// src/repositories/prisma/PrismaCategoryRepository.ts

import { prisma } from "@/lib/prisma";
import { ICategoryRepository } from "@/interfaces/repositories/ICategoryRepository";
import { Categoria, categoriaCreateInput } from "@/interfaces/entities/Categoria";

export class PrismaCategoryRepository implements ICategoryRepository {
    async create(data: categoriaCreateInput): Promise<Categoria> {
        return await prisma.categoria.create({
            data,
        });
    }
    
    async update(id: string, data: Partial<Categoria>): Promise<void> {
        await prisma.categoria.update({
            where: { id },
            data,
        });
    }
    
    async delete(id: string): Promise<void> {
        await prisma.categoria.delete({
            where: { id },
        });
    }
    
    async findById(id: string): Promise<Categoria | null> {
        return await prisma.categoria.findUnique({
            where: { id },
        });
    }
    
    async findByName(query: string): Promise<Categoria | null> {
        return await prisma.categoria.findFirst({
            where:{
                nome:{
                    equals: query,
                    mode: 'insensitive'
                }
            }
        });
    }

    async getAll(): Promise<Categoria[]> {
        return await prisma.categoria.findMany();
    }
}
