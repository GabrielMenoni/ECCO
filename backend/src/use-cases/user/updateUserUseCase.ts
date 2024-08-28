// src/use-cases/user/updateUserUseCase.ts

import { IUserRepository } from "@/interfaces/repositories/IUserRepository";
import { Usuario } from "@/interfaces/entities/Usuario";
import { UserNotFoundError } from "../erros/user/user-not-found-error";
import { hash } from "bcrypt";

export class UpdateUserUseCase {
    constructor(private usersRepository: IUserRepository) {}

    async execute(id: string, data: Partial<Usuario>): Promise<void> {
        const user = await this.usersRepository.findById(id);

        const salt_value = 6;
        data.senha = await hash(data.senha || '' , salt_value);

        if (!user) {
            throw new UserNotFoundError();
        }

        await this.usersRepository.update(id, data);
    }
}
