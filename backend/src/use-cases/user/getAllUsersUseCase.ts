// src/use-cases/user/getAllUsersUseCase.ts

import { IUserRepository } from "@/interfaces/repositories/IUserRepository";
import { Usuario } from "@/interfaces/entities/Usuario";

export class GetAllUsersUseCase {
    constructor(private usersRepository: IUserRepository) {}

    async execute(): Promise<Usuario[]> {
        return await this.usersRepository.getAll();
    }
}
