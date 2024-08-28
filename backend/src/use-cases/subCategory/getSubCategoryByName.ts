// src/use-cases/subCategory/getSubCategoryByNameUseCase.ts

import { Subcategoria } from "@/interfaces/entities/Subcategoria";
import { ISubCategoryRepository } from "@/interfaces/repositories/ISubCategoryRepository";
import { SubCategoryNotFoundError } from "../erros/subCategory/subcategoria-not-found-error";


export class GetSubCategoryByNameUseCase {
    constructor(private subCategoryRepository: ISubCategoryRepository) {}

    async execute(query: string): Promise<Subcategoria | null> {
        try {
            const subCategory = await this.subCategoryRepository.findByName(query);
            if (!subCategory) {
                throw new SubCategoryNotFoundError();
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
