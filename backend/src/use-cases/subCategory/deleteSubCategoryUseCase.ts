// src/use-cases/subCategory/deleteSubCategoryUseCase.ts

import { ISubCategoryRepository } from "@/interfaces/repositories/ISubCategoryRepository";
import { SubCategoryNotFoundError } from "../erros/subCategory/subcategoria-not-found-error";


export class DeleteSubCategoryUseCase {
    constructor(private subCategoryRepository: ISubCategoryRepository) {}

    async execute(id: string): Promise<void> {
        try {
            const subCategory = await this.subCategoryRepository.findById(id);

            if(!subCategory){
                throw new SubCategoryNotFoundError();
            }

            await this.subCategoryRepository.delete(id)
            
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error deleting subcategory: ${error.message}`);
            }
            throw new Error('Unknown error occurred while deleting subcategory.');
        }
    }
}
