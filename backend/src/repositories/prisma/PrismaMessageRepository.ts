// src/repositories/prisma/PrismaMessageRepository.ts

import { prisma } from "@/lib/prisma";
import { IMessageRepository } from "@/interfaces/repositories/IMessageRepository";
import { Mensagem, MensagemCreateInput } from "@/interfaces/entities/Mensagem";

export class PrismaMessageRepository implements IMessageRepository {
    async create(data: MensagemCreateInput): Promise<Mensagem> {
        return await prisma.mensagem.create({
            data,
        });
    }

    async findByReservationId(reservaId: string): Promise<Mensagem[]> {
        return await prisma.mensagem.findMany({
            where: { reservaId },
        });
    }
}
