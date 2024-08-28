// src/use-cases/erros/subcategoria/subcategoria-does-not-match-error.ts

export class SubcategoriaDoesNotMatchError extends Error {
    constructor(message: string = 'Subcategoria does not match the given Categoria') {
        super(message);
        this.name = 'SubcategoriaDoesNotMatchError';
    }
}
