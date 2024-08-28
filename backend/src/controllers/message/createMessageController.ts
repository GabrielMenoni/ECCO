// src/controllers/message/createMessageController.ts

import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeMessageCreationUseCase } from "@/factories/message/makeMessageUseCase";

export async function createMessageController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    
    const createMessageSchema = z.object({
        momento: z.string(),
        conteudo: z.string(),
        reservaId: z.string(),
        usuarioId: z.string(),
    });

    const data = createMessageSchema.parse(request.body);

    try {
        const registerMessageUseCase = makeMessageCreationUseCase()

        await registerMessageUseCase.execute(data);

        return reply.status(201).send();
    } catch (error: unknown) {
        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        } else {
            // Handle the case where the error is not an Error object
            return reply.status(500).send({ error: "An unexpected error occurred" });
        }
    }
}
