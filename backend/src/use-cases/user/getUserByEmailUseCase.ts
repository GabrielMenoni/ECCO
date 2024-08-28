// src/use-cases/user/getUserByEmailUseCase.ts

import { IUserRepository } from "@/interfaces/repositories/IUserRepository";
import { Usuario } from "@/interfaces/entities/Usuario";
import { UserNotFoundError } from "../erros/user/user-not-found-error";

export class GetUserByEmailUseCase {
    constructor(private usersRepository: IUserRepository) {}

    async execute(email: string): Promise<Usuario> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new UserNotFoundError();
        }

        return user;
    }
}
