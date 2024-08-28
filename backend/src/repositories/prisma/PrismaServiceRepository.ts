// src/repositories/prisma/PrismaServiceRepository.ts

import { prisma } from "@/lib/prisma";
import { Servico, servicoCreateInput } from "@/interfaces/entities/Servico";
import { IServiceRepository } from "@/interfaces/repositories/IServiceRepository";
import { Reserva } from "@prisma/client";

export class PrismaServiceRepository implements IServiceRepository {

    async getByUserId(id: string): Promise<Servico[]> {
        return await prisma.servico.findMany({
            where: {
                usuarioId : id
            }
        })
    }

    async create(data: servicoCreateInput): Promise<Servico> {
        return await prisma.servico.create({
            data: {
                momentoCriacao: data.momentoCriacao,
                precoFixo: data.precoFixo,
                precoMin: data.precoMin,
                precoMax: data.precoMax,
                subcategoriaId: data.subcategoriaId,
                usuarioId: data.usuarioId,
                diasServico: {
                    create: data.diasServico.map(diaServico => ({
                        data: diaServico.data,
                        periodo: diaServico.periodo,
                    })),
                },
            },
            include: {
                diasServico: true,
            },
        });
    }

    async update(id: string, data: Partial<Servico> & { diasServico?: { data: string; periodo: string; }[] }): Promise<void> {
        await prisma.servico.update({
            where: { id },
            data: {
                momentoCriacao: data.momentoCriacao,
                precoFixo: data.precoFixo,
                precoMin: data.precoMin,
                precoMax: data.precoMax,
                subcategoriaId: data.subcategoriaId,
                usuarioId: data.usuarioId,
                diasServico: data.diasServico
                    ? {
                          upsert: data.diasServico.map(diaServico => ({
                              where: { id: diaServico.id ?? '' }, // Ensure diaServico has an id field for identification
                              create: {
                                  data: diaServico.data,
                                  periodo: diaServico.periodo,
                              },
                              update: {
                                  data: diaServico.data,
                                  periodo: diaServico.periodo,
                              },
                          })),
                      }
                    : undefined,
            },
        });
    }

    async delete(id: string): Promise<void> {
        await prisma.servico.delete({
            where: { id },
        });
    }

    async findById(id: string): Promise<Servico | null> {
        return await prisma.servico.findUnique({
            where: { id },
            include: {
                diasServico: true,
            },
        });
    }

    async searchMany(id: string, categoriaId: string, subcategoriaId: string, date: string): Promise<Servico[] | null> {
        console.log("-------------------------")
        console.log(categoriaId, id, subcategoriaId, date)


        let obj:any = {
                    usuarioId: {
                        not: id,
                    }
                }

        if (subcategoriaId) {
            obj = {
                ...obj,
                subcategoriaId: subcategoriaId
            }
        } else if (categoriaId) {
            obj = {
                ...obj,
                subcategoria: {
                    categoriaId: categoriaId
                }
            }
        }

        if (date) {
            obj = {
                ...obj,
                momentoCriacao: date
            }
        }

        const servicos = await prisma.servico.findMany({
            where: {
              reservas: {
                none: {
                  status: {
                    in: ['RESERVADO', 'TERMINADO'], // Exclui serviços com reservas nesses status
                  },
                },
              },
              ...obj
            },
            include: {
              usuario: true,
              subcategoria: true,  
            },
          });
         
        return servicos
    }

    async getAll(): Promise<Servico[]> {
        return await prisma.servico.findMany({
            include: {
                diasServico: true,
            },
        });
    }


    async getMyRunningServices(id: string): Promise<Servico[]> {
        
        const servicos = await prisma.servico.findMany({
            where: {
              usuarioId: id,
              reservas: {
                none: {
                  status: {
                    in: ['CRIADO', 'TERMINADO'], // Exclui serviços com reservas nesses status
                  }
                }
            }
        },
        include:{
            reservas: true
        }
    
    })
    return servicos
    }



    async getRunningServicesImPaying(id: string): Promise<Reserva[]>{
        const servicos = await prisma.reserva.findMany({
            where: {
                usuarioId: id,
                status: 'RESERVADO', // Exclui serviços com reservas nesses status
                
            },
            include: {
                servico: true
            }
        })
    return servicos
    }}
