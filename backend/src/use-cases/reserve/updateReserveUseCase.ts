// src/use-cases/reserve/UpdateReserveUseCase.ts

import { Reserva } from "@/interfaces/entities/Reserva";
import { IReserveRepository } from "@/interfaces/repositories/IReserveRespository";
import { ReserveNotFoundError } from "../erros/reserve/reserve-not-found-error";


export class UpdateReserveUseCase {
    
    constructor(private reserveRepository: IReserveRepository) {}

    async execute(id: string, data: Partial<Reserva>): Promise<Reserva> {
        try {
            const reserve = await this.reserveRepository.findById(id);

            if (!reserve) {
                throw new ReserveNotFoundError();
            }

            await this.reserveRepository.update(id, data);

            return reserve;
            
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error updating reserve: ${error.message}`);
            }
            throw new Error('Unknown error occurred while updating the reserve.');
        }
    }
}
