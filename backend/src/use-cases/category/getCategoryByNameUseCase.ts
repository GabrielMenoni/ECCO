// src/use-cases/Category/getCategoryByNameUseCase.ts

import { Categoria } from "@/interfaces/entities/Categoria";
import { ICategoryRepository } from "@/interfaces/repositories/ICategoryRepository";
import { CategoriaNotFoundError } from "../erros/category/categoria-not-found-error";



export class GetCategoryByNameUseCase {
    constructor(private CategoryRepository: ICategoryRepository) {}

    async execute(query: string): Promise<Categoria | null> {
        try {
            const category = await this.CategoryRepository.findByName(query);
            if (!category) {
                throw new CategoriaNotFoundError();
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
