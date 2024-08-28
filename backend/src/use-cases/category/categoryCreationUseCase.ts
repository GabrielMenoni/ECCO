// src/use-cases/category/categoryCreationUseCase.ts

import { Categoria, categoriaCreateInput } from "@/interfaces/entities/Categoria";
import { ICategoryRepository } from "@/interfaces/repositories/ICategoryRepository";

export class CategoryCreationUseCase {
    constructor(private categoryRepository: ICategoryRepository) {}

    async execute(data: categoriaCreateInput): Promise<Categoria> {
        try {
            const createdCategory = await this.categoryRepository.create(data);
            return createdCategory;
        } catch (error) {
            // Handle errors if necessary, e.g., log them, wrap them in custom errors, etc.
            if (error instanceof Error) {
                throw new Error(`Error creating category: ${error.message}`);
                
            }
            else {
                throw new Error('Unkown Error') // TODO: Upgrade the error handling
            }
        }
    }
}
