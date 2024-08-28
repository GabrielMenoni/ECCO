// src/use-cases/erros/subcategoria/subcategoria-not-found-error.ts

export class SubcategoriaNotFoundError extends Error {
  constructor(message: string = 'Subcategoria not found') {
      super(message);
      this.name = 'SubcategoriaNotFoundError';
  }
}
