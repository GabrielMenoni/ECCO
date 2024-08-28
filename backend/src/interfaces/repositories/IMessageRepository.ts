// src/interfaces/repositories/IMessageRepository.ts

import { Mensagem, MensagemCreateInput } from "../entities/Mensagem";

export interface IMessageRepository {
    create(data: MensagemCreateInput): Promise<Mensagem>;
    findByReservationId(reservaId: string): Promise<Mensagem[]>;
}