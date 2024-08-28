// src/interfaces/repositories/IServiceRepository.ts

import { Reserva, reservaCreateInput } from "../entities/Reserva";

export interface IReserveRepository {
    create(data: reservaCreateInput): Promise<Reserva>
    update(id: string, data: Partial<Reserva>): Promise<void>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Reserva | null>;
    getAll(): Promise<Reserva[]>;
    cancelReserve(id: string, reason: string): Promise<Reserva | null>;
}