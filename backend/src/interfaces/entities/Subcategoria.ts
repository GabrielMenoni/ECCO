// src/domains/entities/Subcategoria.ts
export interface Subcategoria {
  id: string;
  nome: string;
  categoriaId: string;
}

export type subCategoriaCreateInput = Omit<Subcategoria, 'id'>;