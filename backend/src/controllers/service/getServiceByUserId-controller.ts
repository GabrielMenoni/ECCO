// src/controllers/service/getServiceById-controller.ts

import { makeGetByUserIdServiceUseCase } from "@/factories/service/makeGetByUserIdUseCase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getServiceByUserIdController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const getServiceByIdParamsSchema = z.object({
        id: z.string().uuid(),
    });

    const { id } = getServiceByIdParamsSchema.parse(request.query);

    try {
        const usecase = makeGetByUserIdServiceUseCase()

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
