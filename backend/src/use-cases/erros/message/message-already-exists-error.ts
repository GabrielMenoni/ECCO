export class MessageAlreadyExistsError extends Error {
    constructor() {
      super('Message already exists.')
    }
  }