export class ReserveNotFoundError extends Error {
    constructor() {
      super('Reserve not found.')
    }
  }