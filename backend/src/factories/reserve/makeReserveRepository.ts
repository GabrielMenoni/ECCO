import { PrismaReserveRepository } from "@/repositories/prisma/PrismaReserveRepository"

export const makeReserveRepository = () => {
    const prismaReserveRepository = new PrismaReserveRepository()
    return prismaReserveRepository
}