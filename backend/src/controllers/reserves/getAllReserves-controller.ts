// src/controllers/reserve/getAllReserves-controller.ts

import { makeGetAllReserveUseCase } from "@/factories/reserve/makeGetAllReseveUseCase";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getAllReservesController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
        const usecase = makeGetAllReserveUseCase()

        const reserves = await usecase.execute();

        return reply.status(200).send(reserves);
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        }

        return reply.status(409).send({ error: 'An unknown error occurred.' });
    }
}
