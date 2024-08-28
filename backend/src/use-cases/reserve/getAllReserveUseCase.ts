// src/use-cases/reserve/GetAllReserveUseCase.ts

import { Reserva } from "@/interfaces/entities/Reserva";
import { IReserveRepository } from "@/interfaces/repositories/IReserveRespository";


export class GetAllReserveUseCase {
    constructor(private reserveRepository: IReserveRepository) {}

    async execute(): Promise<Reserva[]> {
        try {
            return await this.reserveRepository.getAll();
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error retrieving reserves: ${error.message}`);
            }
            throw new Error('Unknown error occurred while retrieving reserves.');
        }
    }
}
