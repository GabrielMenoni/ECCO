// src/use-cases/user/getUserByIdUseCase.ts

import { IUserRepository } from "@/interfaces/repositories/IUserRepository";
import { Usuario } from "@/interfaces/entities/Usuario";
import { UserNotFoundError } from "../erros/user/user-not-found-error";


export class GetUserByIdUseCase {
    constructor(private usersRepository: IUserRepository) {}

    async execute(id: string): Promise<Usuario> {
        const user = await this.usersRepository.findById(id);

        if (!user) {
            throw new UserNotFoundError();
        }

        return user;
    }
}
