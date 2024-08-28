// src/controllers/user/updateUser-controller.ts

import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeUpdateUserUseCase } from "@/factories/user/makeUpdateUserUseCase";

export async function updateUserController(request: FastifyRequest, reply: FastifyReply): Promise<void> {

    const updateBodySchema = z.object({
        nome: z.string().optional(),
        email: z.string().email().optional(),
        senha: z.string().min(6).optional(),
        celular: z.string().optional(),
        avaliacao: z.number().min(0).max(5).optional(),
        fotoFrenteDocumento: z.string().optional(),
        fotoVersoDocumento: z.string().optional(),
        tipoDocumento: z.string().optional(),
        verificado: z.boolean().optional(),
        fotoPerfil: z.string().optional(),
    });

    const data = updateBodySchema.parse(request.body);

    try {
        const usecase = makeUpdateUserUseCase()

        const updatedUser = await usecase.execute(request.user.sub, data);

        return reply.status(200).send(updatedUser);
        
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        }

        return reply.status(409).send({ error: 'An unknown error occurred.' });
    }
}
