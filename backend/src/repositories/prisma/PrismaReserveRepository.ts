import { reservaCreateInput, Reserva } from "@/interfaces/entities/Reserva";
import { IReserveRepository } from "@/interfaces/repositories/IReserveRespository";
import { prisma } from "@/lib/prisma";

export class PrismaReserveRepository implements IReserveRepository{
    
    async create(data: reservaCreateInput): Promise<Reserva> {
        return await prisma.reserva.create({
            data
        })
    }
    async update(id: string, data: Partial<Reserva>): Promise<void> {
        await prisma.reserva.update({
            where: { id },
            data,
        })
    }
    async delete(id: string): Promise<void> {
        await prisma.reserva.delete({
            where: { id },
        })
    }
    async findById(id: string): Promise<Reserva | null> {
        return await prisma.reserva.findUnique({
            where: { id },
        })
    }
    async getAll(): Promise<Reserva[]> {
        return await prisma.reserva.findMany()
    }

    async cancelReserve(id: string, reason: string): Promise<Reserva | null> {
        if (reason) {
            const updatedReserve = await prisma.reserva.update({
                where: {
                    id: id, // Id   entifying the reservation by its id
                },
                data: {
                    status: 'CANCELADA', // Setting the status to 'CANCELADA'
                    motivoRejeicao: reason // Updating the reason field
                },
            });
            return updatedReserve;
        } else {
            return null
        }
    }
}
