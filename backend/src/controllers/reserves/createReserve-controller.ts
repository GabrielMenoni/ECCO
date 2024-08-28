// src/controllers/reserves/createReserveController.ts

import { makeReserveCreationUseCase } from "@/factories/reserve/makeReserveUseCase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createReserveController(request: FastifyRequest, reply : FastifyReply){

    const createReserveSchema = z.object({
        status: z.string(),                             // na hora da criação, CRIADO, quando aceito por ambos, RESERVADO, quando executado, TERMINADO
        notaAvaliacaoParaCliente: z.number(),           // no próximo período MANHA/TARDE após o serviço ser prestado
        comentarioAvaliacaoParaCliente: z.string(),     // no próximo período MANHA/TARDE após o serviço ser prestado
        notaAvaliacaoParaPrestador: z.number(),         // no próximo período MANHA/TARDE após o serviço ser prestado
        comentarioAvaliacaoParaPrestador: z.string(),   // no próximo período MANHA/TARDE após o serviço ser prestado
        
        dataSolicitacao: z.string(),                    // Dia da reserva, na hora da criação

        comentario: z.string(),                         // na hora da criação

        cep: z.string(),                                // na hora da criação
        estado: z.string(),                             // na hora da criação
        cidade: z.string(),                             // na hora da criação
        bairro: z.string(),                             // na hora da criação
        rua: z.string(),                                // na hora da criação
        numero: z.number(),                             // na hora da criação

        horarioInicio: z.string(),                      // Hora do serviço no dia dataSolicitacao, na hora da criação
        motivoRejeicao: z.string().optional(),          // null na criação, passado pelo trabalhador caso rejeite
        horarioFim: z.string(),                         // Hora do término do serviço no dia dataSolicitacao, ha hora de criação
        servicoId: z.string(),                          // id do serviço contratado, que contém o id do trabalhador
        usuarioId: z.string(),                          // id do contratante
    })
    
    const data = createReserveSchema.parse(request.body)
    
    try {
        const usecase = makeReserveCreationUseCase()

        const createdReserve = await usecase.execute(data);

        return reply.status(201).send(createdReserve);
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        }

        return reply.status(409).send({ error: 'An unknown error occurred.' });
    }
}