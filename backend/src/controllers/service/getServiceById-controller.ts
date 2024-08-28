// src/controllers/service/getServiceById-controller.ts

import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeGetByIdServiceUseCase } from "@/factories/service/makeGetByIdServiceUseCase";

export async function getServiceByIdController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const getServiceByIdParamsSchema = z.object({
        id: z.string().uuid(),
    });

    const { id } = getServiceByIdParamsSchema.parse(request.params);

    try {
        const usecase = makeGetByIdServiceUseCase()

        const service = await usecase.execute(id);

        if (!service) {
            return reply.status(404).send({ message: 'Service not found' });
        }

        return reply.status(200).send(service);
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        }

        return reply.status(409).send({ error: 'An unknown error occurred.' });
    }
}
