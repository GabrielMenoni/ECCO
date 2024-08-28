export class SubCategoryAlreadyExistsError extends Error {
    constructor() {
      super('Subcategory already exists.')
    }
  }