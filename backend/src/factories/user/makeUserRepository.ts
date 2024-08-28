import { PrismaUserRepository } from "@/repositories/prisma/PrismaUserRepository"

export const makeUserRepository = () => {
    const prismaUsersRepository = new PrismaUserRepository()
    return prismaUsersRepository
}