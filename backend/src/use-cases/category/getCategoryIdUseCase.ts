// src/use-cases/category/getCategoryByIdUseCase.ts

import { ICategoryRepository } from "@/interfaces/repositories/ICategoryRepository";
import { Categoria } from "@prisma/client";
import { CategoryNotFoundError } from "../erros/category/categoria-not-found-error";

export class GetCategoryByIdUseCase {
    constructor(private categoryRepository: ICategoryRepository) {}

    async execute(id: string): Promise<Categoria | null> {
        try {
            const category = await this.categoryRepository.findById(id);
            if (!category) {
                throw new CategoryNotFoundError();
            }
            return category;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error returning category: ${error.message}`);
            }
            throw new Error('Unknown error occurred while retrieving the category.');
        }
    }
}
