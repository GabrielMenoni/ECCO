// src/use-cases/subCategory/getSubCategoryByIdUseCase.ts

import { Subcategoria } from "@/interfaces/entities/Subcategoria";
import { ISubCategoryRepository } from "@/interfaces/repositories/ISubCategoryRepository";
import { SubcategoriaNotFoundError } from "../erros/subCategory/subcategoria-not-found-error";


export class GetSubCategoryByIdUseCase {
    constructor(private subCategoryRepository: ISubCategoryRepository) {}

    async execute(id: string): Promise<Subcategoria | null> {
        try {
            const subCategory = await this.subCategoryRepository.findById(id);
            if (!subCategory) {
                throw new SubcategoriaNotFoundError();
            }
            return subCategory;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error returning subcategory: ${error.message}`);
            }
            throw new Error('Unknown error occurred while retrieving the subcategory.');
        }
    }
}
