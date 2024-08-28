// src/controllers/service/getMyRunningServices-controller.ts

import { makeGetMyRunningServices } from "@/factories/service/makeGetMyRunningServices";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function getMyRunningServiceController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const getServiceByIdParamsSchema = z.object({
        id: z.string().uuid(),
    });

    const { id } = getServiceByIdParamsSchema.parse(request.query);

    try {
        const usecase = makeGetMyRunningServices()

        const service = await usecase.execute(id);

        return reply.status(200).send(service);
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        }

        return reply.status(409).send({ error: 'An unknown error occurred.' });
    }
}
