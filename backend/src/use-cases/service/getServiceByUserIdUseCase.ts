// src/use-cases/service/getServiceByIdUseCase.ts

// src/use-cases/service/GetServiceByIdUseCase.ts

import { IServiceRepository } from "@/interfaces/repositories/IServiceRepository";
import { Servico } from "@/interfaces/entities/Servico";
import { ServiceNotFoundError } from "../erros/service/service-not-found-error";

export class GetServiceByUserIdUseCase {
    constructor(private serviceRepository: IServiceRepository) {}

    async execute(id: string): Promise<Servico[] | null> {
        try {
            const service = await this.serviceRepository.getByUserId(id);
            if (!service) {
                throw new ServiceNotFoundError();
            }
            return service;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error returning service: ${error.message}`);
            }
            throw new Error('Unknown error occurred while retrieving the service.');
        }
    }
}
