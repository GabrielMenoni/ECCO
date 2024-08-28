// src/use-cases/user/userCreationUseCase.ts
import bcrypt from 'bcrypt';
import { UsuarioCreateInput } from '@/interfaces/entities/Usuario';
import { IUserRepository } from '@/interfaces/repositories/IUserRepository';
import { InvalidEmailFormatError } from '../erros/user/invalid-email-format-error';
import { PasswordTooShortError } from '../erros/user/password-too-short-error';
import { InvalidPhoneNumberError } from '../erros/user/invalid-phone-number-error';
import { InvalidPasswordFormatError } from '../erros/user/invalid-password-format-error';
import { UserAlreadyExistsError } from '../erros/user/user-already-exists-error';

export class UserCreationUseCase {
    constructor(private usersRepository: IUserRepository) {}

    async execute({
        nome, 
        email, 
        senha, 
        celular, 
        avaliacao, 
        fotoFrenteDocumento, 
        fotoVersoDocumento,
        tipoDocumento, 
        verificado, 
        fotoPerfil,
    }: UsuarioCreateInput ): Promise<void> {
        
        // Validate email format
        if (!this.isValidEmail(email)) {
            throw new InvalidEmailFormatError();
        }

        // Validate password length
        if (senha.length < 6) {
            throw new PasswordTooShortError();
        }

        // Validate password format
        if (!this.isValidPasswordFormat(senha)) {
            throw new InvalidPasswordFormatError();
        }

        // Validate phone number format
        if (!this.isValidPhoneNumber(celular)) {
            throw new InvalidPhoneNumberError();
        }

        // Check if email already exists
        const repeatedEmail = await this.usersRepository.findByEmail(email);
        if (repeatedEmail) {
            throw new UserAlreadyExistsError();
        }

        // Hash the password
        const salt_value = 6;
        const password_hash = await bcrypt.hash(senha, salt_value);

        // Create user
        await this.usersRepository.create({
            nome, 
            email, 
            senha: password_hash, 
            celular, 
            avaliacao, 
            fotoFrenteDocumento, 
            fotoVersoDocumento,
            tipoDocumento, 
            verificado, 
            fotoPerfil,
        });
    }

    // Helper method to validate email format
    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Helper method to validate password format
    private isValidPasswordFormat(password: string): boolean {
        // Password must be at least 6 characters, include at least one letter, one number, and one special character
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
        return passwordRegex.test(password);
    }

    // Helper method to validate phone number format
    private isValidPhoneNumber(phone: string): boolean {
        const phoneRegex = /^[0-9]{10,15}$/;
        return phoneRegex.test(phone);
    }
}
