// src/use-cases/service/UpdateServiceUseCase.ts

import { IServiceRepository } from "@/interfaces/repositories/IServiceRepository";
import { Servico } from "@/interfaces/entities/Servico";
import { ServiceNotFoundError } from "../erros/service/service-not-found-error";

export class UpdateServiceUseCase {
    
    constructor(private serviceRepository: IServiceRepository) {}

    async execute(id: string, data: Partial<Servico>): Promise<Servico> {
        try {
            const service = await this.serviceRepository.findById(id);

            if (!service) {
                throw new ServiceNotFoundError();
            }

            await this.serviceRepository.update(id, data);

            const updatedService = await this.serviceRepository.findById(id);

            if (!updatedService) {
                throw new ServiceNotFoundError();
            }

            return updatedService;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error updating service: ${error.message}`);
            }
            throw new Error('Unknown error occurred while updating the service.');
        }
    }
}
