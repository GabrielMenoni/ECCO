// src/use-cases/subCategory/subCategoryCreationUseCase.ts

import { Subcategoria, subCategoriaCreateInput } from "@/interfaces/entities/Subcategoria";
import { ISubCategoryRepository } from "@/interfaces/repositories/ISubCategoryRepository";


export class SubCategoryCreationUseCase {
    constructor(private subCategoryRepository: ISubCategoryRepository) {}

    async execute(data: subCategoriaCreateInput): Promise<Subcategoria> {
        try {
            const createdSubCategory = await this.subCategoryRepository.create(data);
            return createdSubCategory;
        } catch (error) {
            // Handle errors if necessary, e.g., log them, wrap them in custom errors, etc.
            if (error instanceof Error) {
                throw new Error(`Error creating Subcategory: ${error.message}`);
                
            }
            else {
                throw new Error('Unkown Error') // TODO: Upgrade the error handling
            }
        }
    }
}
