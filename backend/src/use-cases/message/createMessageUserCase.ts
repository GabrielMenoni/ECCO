// src/use-cases/message/RegisterMessageUseCase.ts

import { IMessageRepository } from "@/interfaces/repositories/IMessageRepository";
import { Mensagem, MensagemCreateInput } from "@/interfaces/entities/Mensagem";

export class RegisterMessageUseCase {
    constructor(private messageRepository: IMessageRepository) {}

    async execute(data: MensagemCreateInput): Promise<Mensagem> {
        try {
            return await this.messageRepository.create(data);
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error registering message: ${error.message}`);
            }
            throw new Error('Unknown error occurred while registering the message.');
        }
    }
}
