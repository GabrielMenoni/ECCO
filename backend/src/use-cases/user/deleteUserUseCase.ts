// src/use-cases/user/deleteUserUseCase.ts

import { IUserRepository } from "@/interfaces/repositories/IUserRepository";
import { UserNotFoundError } from "../erros/user/user-not-found-error";

export class DeleteUserUseCase {
    constructor(private usersRepository: IUserRepository) {}

    async execute(id: string): Promise<void> {
        const user = await this.usersRepository.findById(id);

        if (!user) {
            throw new UserNotFoundError();
        }

        await this.usersRepository.delete(id);
    }
}
