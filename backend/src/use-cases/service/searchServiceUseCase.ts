// src/use-cases/service/SearchServiceUseCase.ts

import { IServiceRepository } from "@/interfaces/repositories/IServiceRepository";
import { Servico } from "@/interfaces/entities/Servico";
import { ServiceNotFoundError } from "../erros/service/service-not-found-error";

export class SearchServiceUseCase {
    constructor(
        private serviceRepository: IServiceRepository,
    ) {}

    async execute(id: string, categoriaId: string, subcategoriaId: string, date: string): Promise<Servico[] | null> {
        try {
            // Perform service search using the IDs obtained
            const services = await this.serviceRepository.searchMany(id, categoriaId, subcategoriaId, date);
            if (!services) {
                throw new ServiceNotFoundError();
            }

            return services;
        } catch (error:any) {
            console.error(`Error executing search: ${error.message}`, error); // Log the error for debugging
            throw new Error(`An error occurred while retrieving the service: ${error.message}`);
        }
    }
}
