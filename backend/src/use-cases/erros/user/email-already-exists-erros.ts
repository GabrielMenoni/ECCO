// src/use-cases/errors/user/user-already-exists-error.ts
import { CustomError } from '../custom-error';

export class UserAlreadyExistsError extends CustomError {
    constructor() {
        super('E-mail already exists.', 409);
    }
}
