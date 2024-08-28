// src/use-cases/category/getAllCategoryUseCase.ts

import { Categoria } from "@/interfaces/entities/Categoria";
import { ICategoryRepository } from "@/interfaces/repositories/ICategoryRepository";


export class GetAllCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) {}

    async execute(): Promise<Categoria[]> {
        try {
            return await this.categoryRepository.getAll();
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error retrieving categories: ${error.message}`);
            }
            throw new Error('Unknown error occurred while retrieving categories.');
        }
    }
}
