// src/use-cases/category/updateCategoryUseCase.ts

import { Categoria } from "@/interfaces/entities/Categoria";
import { ICategoryRepository } from "@/interfaces/repositories/ICategoryRepository";
import { CategoryNotFoundError } from "../erros/category/categoria-not-found-error";


export class UpdateCategoryUseCase {
    
    constructor(private categoryRepository: ICategoryRepository) {}

    async execute(id: string, data: Partial<Categoria>): Promise<Categoria> {
        try {
            const category = await this.categoryRepository.findById(id);

            if (!category) {
                throw new Error('category not found');
            }

            await this.categoryRepository.update(id, data);

            const updatedCategory = await this.categoryRepository.findById(id);

            if (!updatedCategory) {
                throw new CategoryNotFoundError();
            }

            return updatedCategory;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error updating category: ${error.message}`);
            }
            throw new Error('Unknown error occurred while updating the category.');
        }
    }
}
