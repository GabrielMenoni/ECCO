// src/use-cases/errors/user/invalid-credentials-error.ts
import { CustomError } from '../custom-error';

export class InvalidCredentialsError extends CustomError {
    constructor() {
        super('Invalid credentials provided.', 401);
    }
}
