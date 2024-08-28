// src/use-cases/errors/user/user-not-found-error.ts
import { CustomError } from '../custom-error';

export class UserNotFoundError extends CustomError {
    constructor() {
        super('User not found.', 404);
    }
}
