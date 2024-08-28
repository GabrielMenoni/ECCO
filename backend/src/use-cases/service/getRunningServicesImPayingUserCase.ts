// src/use-cases/service/getRunningServicesImPaying.ts

import { IServiceRepository } from "@/interfaces/repositories/IServiceRepository";
import { Reserva } from "@/interfaces/entities/Reserva";

export class getRunningServicesImPaying {
    constructor(private serviceRepository: IServiceRepository) {}

    async execute(id: string): Promise<Reserva[]> {
        
        try {

            const service = await this.serviceRepository.getRunningServicesImPaying(id);  
            return service;

        } catch (error) {
            
            if (error instanceof Error) {
                throw new Error(`Error returning service: ${error.message}`);
            }
            throw new Error('Unknown error occurred while retrieving the service.');
        
        }
    }
}
