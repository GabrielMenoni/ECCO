// src/use-cases/reserve/deleteReserveUseCase.ts

import { IReserveRepository } from "@/interfaces/repositories/IReserveRespository";
import { ReserveNotFoundError } from "../erros/reserve/reserve-not-found-error";


export class DeleteReserveUseCase {
    constructor(private reserveRepository: IReserveRepository) {}

    async execute(id: string){
        try {
            const reserve = await this.reserveRepository.findById(id);

            if(!reserve){
                throw new ReserveNotFoundError();
            }

            await this.reserveRepository.delete(id)

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error deleting reserve: ${error.message}`);
            }
            throw new Error('Unknown error occurred while deleting reserve.');
        }
    }
}
