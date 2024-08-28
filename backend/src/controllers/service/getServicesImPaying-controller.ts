// src/controllers/service/getServicesImPaying-controller.ts

import { makeGetServicesImPaying } from "@/factories/service/makeGetServicesImPaying";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function getServicesImPayingController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const getServiceByIdParamsSchema = z.object({
        id: z.string().uuid(),
    });

    const { id } = getServiceByIdParamsSchema.parse(request.query);

    try {
        const usecase = makeGetServicesImPaying()

        const service = await usecase.execute(id);

        return reply.status(200).send(service);
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        }

        return reply.status(409).send({ error: 'An unknown error occurred.' });
    }
}
