// src/domains/entities/Categoria.ts

export interface Categoria {
  id: string;
  nome: string;
}

export type categoriaCreateInput = Omit<Categoria, 'id'>;