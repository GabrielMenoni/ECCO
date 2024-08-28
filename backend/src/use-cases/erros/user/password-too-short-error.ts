// src/use-cases/erros/user/password-too-short-error.ts
import { CustomError } from '../custom-error';

export class PasswordTooShortError extends CustomError {
    constructor() {
        super('Password too short. Minimum length is 6 characters.', 400);
    }
}
