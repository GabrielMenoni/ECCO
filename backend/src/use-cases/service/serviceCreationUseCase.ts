// src/use-cases/service/ServiceCreationUseCase.ts

import { IServiceRepository } from '@/interfaces/repositories/IServiceRepository';
import { servicoCreateInput, Servico } from '@/interfaces/entities/Servico';

export class ServiceCreationUseCase {
    private serviceRepository: IServiceRepository;

    constructor(serviceRepository: IServiceRepository) {
        this.serviceRepository = serviceRepository;
    }

    async execute(data: servicoCreateInput): Promise<Servico> {
        try {
            const createdService = await this.serviceRepository.create(data);
            return createdService;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error creating service: ${error.message}`);
            } else {
                throw new Error('Unknown Error');
            }
        }
    }
}
