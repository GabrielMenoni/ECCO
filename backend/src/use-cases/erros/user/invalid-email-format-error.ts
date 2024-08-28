// src/use-cases/erros/user/invalid-email-format-error.ts
import { CustomError } from '../custom-error';

export class InvalidEmailFormatError extends CustomError {
    constructor() {
        super('Invalid email format.', 400);
    }
}
