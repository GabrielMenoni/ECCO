// src/use-cases/subCategory/getAllSubCategoryUseCase.ts

import { Subcategoria } from "@/interfaces/entities/Subcategoria";
import { ISubCategoryRepository } from "@/interfaces/repositories/ISubCategoryRepository";



export class GetAllSubCategoryUseCase {
    constructor(private subCategoryRepository: ISubCategoryRepository) {}

    async execute(): Promise<Subcategoria[]> {
        try {
            return await this.subCategoryRepository.getAll();
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error retrieving subcategories: ${error.message}`);
            }
            throw new Error('Unknown error occurred while retrieving subcategories.');
        }
    }
}
