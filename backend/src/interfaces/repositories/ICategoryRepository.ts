// src/interfaces/repositories/ICategoryRepository.ts

import { Categoria, categoriaCreateInput } from "../entities/Categoria";

export interface ICategoryRepository {
    create(data: categoriaCreateInput): Promise<Categoria>;
    update(id: string, data: Partial<Categoria>): Promise<void>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Categoria | null>;
    findByName(query: string): Promise<Categoria | null>;
    getAll(): Promise<Categoria[]>;
}
