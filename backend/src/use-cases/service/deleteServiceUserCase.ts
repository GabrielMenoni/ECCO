// src/use-cases/service/deleteServiceUseCase.ts
import { IServiceRepository } from "@/interfaces/repositories/IServiceRepository";
import { ServiceNotFoundError } from "../erros/service/service-not-found-error";

export class DeleteServiceUseCase {
    constructor(private serviceRepository: IServiceRepository) {}

    async execute(id: string): Promise<void> {
        try {
            const service = await this.serviceRepository.findById(id);

            if(!service){
                throw new ServiceNotFoundError();
            }

            await this.serviceRepository.delete(id)

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error deleting service: ${error.message}`);
            }
            throw new Error('Unknown error occurred while deleting service.');
        }
    }
}
