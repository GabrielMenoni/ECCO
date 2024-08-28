export class MessageNotFoundError extends Error {
    constructor() {
      super('Message not found.')
    }
  }