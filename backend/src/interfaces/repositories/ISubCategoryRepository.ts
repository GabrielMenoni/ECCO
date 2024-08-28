// src/interfaces/repositories/ISubCategoryRepository.ts

import { Subcategoria, subCategoriaCreateInput } from "../entities/Subcategoria";

export interface ISubCategoryRepository {
    create(data: subCategoriaCreateInput): Promise<Subcategoria>;
    update(id: string, data: Partial<Subcategoria>): Promise<void>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Subcategoria | null>;
    findByName(query: string): Promise<Subcategoria | null>;
    getAll(): Promise<Subcategoria[]>;
    findAllByCategory(categoryId: string): Promise<Subcategoria[]>;  // New method
}
