// src/controllers/service/getAllServices-controller.ts

import { FastifyReply, FastifyRequest } from "fastify";
import { makeGetAllServiceUseCase } from "@/factories/service/makeGetAllServiceUseCase";

export async function getAllServicesController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
        const usecase = makeGetAllServiceUseCase()

        const services = await usecase.execute();

        return reply.status(200).send(services);
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        }

        return reply.status(409).send({ error: 'An unknown error occurred.' });
    }
}
