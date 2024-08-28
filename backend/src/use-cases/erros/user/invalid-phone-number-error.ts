// src/use-cases/erros/user/invalid-phone-number-error.ts
import { CustomError } from '../custom-error';

export class InvalidPhoneNumberError extends CustomError {
    constructor() {
        super('Invalid phone number format.', 400);
    }
}
