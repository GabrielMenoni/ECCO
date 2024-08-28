// src/use-cases/reserve/GetReserveByIdUseCase.ts

import { reservaGetById } from "@/interfaces/entities/Reserva";
import { IReserveRepository } from "@/interfaces/repositories/IReserveRespository";
import { ReserveNotFoundError } from "../erros/reserve/reserve-not-found-error";


export class GetReserveByIdUseCase {
    constructor(private reserveRepository: IReserveRepository) {}

    async execute(id: string): Promise<reservaGetById | null> {
        try {
            const reserve = await this.reserveRepository.findById(id);
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
