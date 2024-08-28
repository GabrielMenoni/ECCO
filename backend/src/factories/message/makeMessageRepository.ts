import { PrismaMessageRepository } from "@/repositories/prisma/PrismaMessageRepository"

export const makeMessageRepository = () => {
    const prismaMessageRepository = new PrismaMessageRepository()
    return prismaMessageRepository
}