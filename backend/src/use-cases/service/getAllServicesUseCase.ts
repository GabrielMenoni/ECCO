// src/use-cases/service/GetAllServicesUseCase.ts

import { IServiceRepository } from "@/interfaces/repositories/IServiceRepository";
import { Servico } from "@/interfaces/entities/Servico";

export class GetAllServicesUseCase {
    constructor(private serviceRepository: IServiceRepository) {}

    async execute(): Promise<Servico[]> {
        try {
            return await this.serviceRepository.getAll();
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error retrieving services: ${error.message}`);
            }
            throw new Error('Unknown error occurred while retrieving services.');
        }
    }
}
