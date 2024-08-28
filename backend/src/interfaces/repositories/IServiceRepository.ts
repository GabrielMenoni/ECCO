// src/interfaces/repositories/IServiceRepository.ts

import { Reserva } from "@prisma/client";
import { Servico, servicoCreateInput } from "../entities/Servico";

export interface IServiceRepository {
    create(data: servicoCreateInput): Promise<Servico>
    update(id: string, data: Partial<Servico>): Promise<void>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Servico | null>;
    searchMany(id: string, categoriaId: string, subcategoriaId: string, date: string): Promise<Servico[] | null>;
    getAll(): Promise<Servico[]>;
    getByUserId(id: string): Promise<Servico[]>;
    getMyRunningServices(id: string): Promise<Servico[]>;
    getRunningServicesImPaying(id: string): Promise<Reserva[]>;
}