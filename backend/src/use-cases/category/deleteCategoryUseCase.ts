// src/use-cases/category/deleteCategoryUseCase.ts

import { ICategoryRepository } from "@/interfaces/repositories/ICategoryRepository";
import { CategoryNotFoundError } from "../erros/category/categoria-not-found-error";

export class DeleteCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) {}

    async execute(id: string): Promise<void> {
        try {
            const category = await this.categoryRepository.findById(id);

            if(!category){
                throw new CategoryNotFoundError();
            }

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error deleting category: ${error.message}`);
            }
            throw new Error('Unknown error occurred while deleting category.');
        }
    }
}
