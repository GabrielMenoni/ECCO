// src/use-cases/erros/user/invalid-password-format-error.ts
import { CustomError } from '../custom-error';

export class InvalidPasswordFormatError extends CustomError {
    constructor() {
        super('Invalid password format. Password must include letters, numbers, and special characters.', 400);
    }
}
