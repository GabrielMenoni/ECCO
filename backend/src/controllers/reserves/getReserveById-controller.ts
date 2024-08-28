// src/controllers/reserve/getreserveById-controller.ts

import { makeGetByIdReserveUseCase } from "@/factories/reserve/makeGetByIdReserveUseCase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function getReserveByIdController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const getReserveByIdParamsSchema = z.object({
        id: z.string().uuid(),
    });

    const { id } = getReserveByIdParamsSchema.parse(request.params);

    console.log(request.params)    

    try {
        const usecase = makeGetByIdReserveUseCase()

        const reserve = await usecase.execute(id);

        if (!reserve) {
            return reply.status(404).send({ message: 'reserve not found' });
        }

        return reply.status(200).send(reserve);
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        }

        return reply.status(409).send({ error: 'An unknown error occurred.' });
    }
}
