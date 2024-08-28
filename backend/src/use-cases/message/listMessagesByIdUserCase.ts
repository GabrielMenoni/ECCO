// src/use-cases/message/ListMessagesByReservationUseCase.ts

import { IMessageRepository } from "@/interfaces/repositories/IMessageRepository";
import { Mensagem } from "@/interfaces/entities/Mensagem";

export class ListMessagesByReservationUseCase {
    constructor(private messageRepository: IMessageRepository) {}

    async execute(reservaId: string): Promise<Mensagem[]> {
        try {
            return await this.messageRepository.findByReservationId(reservaId);
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error listing messages: ${error.message}`);
            }
            throw new Error('Unknown error occurred while listing the messages.');
        }
    }
}
