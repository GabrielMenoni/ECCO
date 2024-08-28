// src/controllers/service/updateService-controller.ts

import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeUpdateServiceUseCase } from "@/factories/service/makeUpdateService";

export async function updateServiceController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const updateParamsSchema = z.object({
        id: z.string().uuid(),
    });

    const updateBodySchema = z.object({
        momentoCriacao: z.string().optional(),
        precoFixo: z.number().nullable().optional(),
        precoMin: z.number().nullable().optional(),
        precoMax: z.number().nullable().optional(),
        subcategoriaId: z.string().optional(),
        usuarioId: z.string().optional(),
    });

    const { id } = updateParamsSchema.parse(request.params);
    const data = updateBodySchema.parse(request.body);

    try {
        const usecase = makeUpdateServiceUseCase()

        const updatedService = await usecase.execute(id, data);

        return reply.status(200).send(updatedService);
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        }

        return reply.status(409).send({ error: 'An unknown error occurred.' });
    }
}
