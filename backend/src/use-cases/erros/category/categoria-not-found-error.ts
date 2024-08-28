// src/use-cases/erros/categoria/categoria-not-found-error.ts

export class CategoriaNotFoundError extends Error {
  constructor(message: string = 'Categoria not found') {
      super(message);
      this.name = 'CategoriaNotFoundError';
  }
}
