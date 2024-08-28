// src/use-cases/reserve/cancelReserve.ts

import { Reserva } from "@/interfaces/entities/Reserva";
import { IReserveRepository } from "@/interfaces/repositories/IReserveRespository";
import { ReserveNotFoundError } from "../erros/reserve/reserve-not-found-error";


export class cancelReserve {
    constructor(private reserveRepository: IReserveRepository) {}

    async execute(id: string, reason: string): Promise<Reserva | null> {
        try {
            const reserve = await this.reserveRepository.cancelReserve(id, reason);
            if (!reserve) {
                throw new ReserveNotFoundError();
            }
            return reserve;
            
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error returning reserve: ${error.message}`);
            }
            throw new Error('Unknown error occurred while retrieving the reserve.');
        }
    }
}
