// src/use-cases/user/authenticateUseCase.ts
import { Usuario } from "@/interfaces/entities/Usuario";
import { IUserRepository } from "@/interfaces/repositories/IUserRepository";
import { compare } from "bcrypt";
import { InvalidCredentialsError } from "../erros/user/invalid-credentials-errors"; 

interface AuthenticateUseCaseRequest {
    email: string;
    senha: string;
}

interface AuthenticateUseCaseResponse {
    user: Usuario;
}

export class AuthenticateUseCase {
    constructor(private usersRepository: IUserRepository) {}

    async execute({
        email, 
        senha,
    }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new InvalidCredentialsError();
        }

        const doesPasswordMatch = await compare(senha, user.senha);

        if (!doesPasswordMatch) {
            throw new InvalidCredentialsError();
        }

        return { user };
    }
}

