// src/controllers/service/deleteService-controller.ts

import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeDeleteServiceUseCase } from "@/factories/service/makeDeleteServiceUseCase";

export async function deleteServiceController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const deleteParamsSchema = z.object({
        id: z.string().uuid(),
    });

    const { id } = deleteParamsSchema.parse(request.params);

    try {
        const usecase = makeDeleteServiceUseCase()

        await usecase.execute(id);

        return reply.status(204).send();
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        }

        return reply.status(409).send({ error: 'An unknown error occurred.' });
    }
}
