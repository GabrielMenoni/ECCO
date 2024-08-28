// src/repositories/prisma-user-repository.ts
import { prisma } from "@/lib/prisma";
import { Usuario, UsuarioCreateInput } from "@/interfaces/entities/Usuario";
import { IUserRepository } from "@/interfaces/repositories/IUserRepository";

export class PrismaUserRepository implements IUserRepository {
    async create(data: UsuarioCreateInput): Promise<Usuario> {
        return await prisma.usuario.create({
            data,
        });
    }

    async update(id: string, data: Usuario): Promise<void> {
        await prisma.usuario.update({
            where: { id },
            data,
        });
    }

    async delete(id: string): Promise<void> {
        await prisma.usuario.delete({
            where: { id },
        });
    }

    async findById(id: string): Promise<Usuario | null> {
        return await prisma.usuario.findUnique({
            where: { id },
        });
    }

    async getAll(): Promise<Usuario[]> {
        return await prisma.usuario.findMany();
    }

    async findByEmail(email: string): Promise<Usuario | null> {
        return await prisma.usuario.findUnique({
            where: { email },
        });
    }
}
