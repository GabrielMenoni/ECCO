// src/use-cases/service/getMyRunningServicesUserCase.ts

import { IServiceRepository } from "@/interfaces/repositories/IServiceRepository";
import { Servico } from "@/interfaces/entities/Servico";

export class getMyRunningServices {
    constructor(private serviceRepository: IServiceRepository) {}

    async execute(id: string): Promise<Servico[]> {
        
        try {

            const service = await this.serviceRepository.getMyRunningServices(id);  
            return service;

        } catch (error) {
            
            if (error instanceof Error) {
                throw new Error(`Error returning service: ${error.message}`);
            }
            throw new Error('Unknown error occurred while retrieving the service.');
        
        }
    }
}
