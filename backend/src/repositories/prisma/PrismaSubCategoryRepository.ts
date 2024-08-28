// src/repositories/prisma/PrismaSubCategoryRepository.ts

import { prisma } from "@/lib/prisma";
import { ISubCategoryRepository } from "@/interfaces/repositories/ISubCategoryRepository";
import { Subcategoria, subCategoriaCreateInput } from "@/interfaces/entities/Subcategoria";

export class PrismaSubCategoryRepository implements ISubCategoryRepository {
    async findByName(query: string): Promise<Subcategoria | null> {
        const subCategory = await prisma.subcategoria.findFirst({
            where: {
                nome: {
                    equals: query,
                    mode: "insensitive"
                }
            }
        });

        return subCategory;
    }

    async create(data: subCategoriaCreateInput): Promise<Subcategoria> {
        return await prisma.subcategoria.create({
            data,
        });
    }

    async update(id: string, data: Partial<Subcategoria>): Promise<void> {
        await prisma.subcategoria.update({
            where: { id },
            data,
        });
    }

    async delete(id: string): Promise<void> {
        await prisma.subcategoria.delete({
            where: { id },
        });
    }

    async findById(id: string): Promise<Subcategoria | null> {
        return await prisma.subcategoria.findUnique({
            where: { id },
        });
    }

    async getAll(): Promise<Subcategoria[]> {
        return await prisma.subcategoria.findMany();
    }

    async findAllByCategory(categoryId: string): Promise<Subcategoria[]> {
        return await prisma.subcategoria.findMany({
            where: { categoriaId: categoryId },
        });
    }
}
