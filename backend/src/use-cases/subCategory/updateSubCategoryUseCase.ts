// src/use-cases/subCategory/updateSubCategoryUseCase.ts

import { Subcategoria } from "@/interfaces/entities/Subcategoria";
import { ISubCategoryRepository } from "@/interfaces/repositories/ISubCategoryRepository";
import { SubCategoryNotFoundError } from "../erros/subCategory/subcategoria-not-found-error";

export class UpdateSubCategoryUseCase {
    
    constructor(private subCategoryRepository: ISubCategoryRepository) {}

    async execute(id: string, data: Partial<Subcategoria>): Promise<Subcategoria> {
        try {
            const subCategory = await this.subCategoryRepository.findById(id);

            if (!subCategory) {
                throw new SubCategoryNotFoundError();
            }

            await this.subCategoryRepository.update(id, data);

            return subCategory;

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error updating subcategory: ${error.message}`);
            }
            throw new Error('Unknown error occurred while updating the subcategory.');
        }
    }
}
