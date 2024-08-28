// src/controllers/reserve/deleteReserve-controller.ts

import { makeDeleteReserveUseCase } from "@/factories/reserve/makeDeleteReserveUseCase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deleteReserveController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const deleteParamsSchema = z.object({
        id: z.string().uuid(),
    });

    const { id } = deleteParamsSchema.parse(request.params);

    try {
        const usecase = makeDeleteReserveUseCase()

        await usecase.execute(id);

        return reply.status(204).send();
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        }

        return reply.status(409).send({ error: 'An unknown error occurred.' });
    }
}
