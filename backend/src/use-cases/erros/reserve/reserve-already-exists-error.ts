export class ReserveAlreadyExistsError extends Error {
    constructor() {
      super('Reserve already exists.')
    }
  }