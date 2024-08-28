// src/controllers/reserve/getreserveById-controller.ts


import { makeCancelReserveUseCase } from "@/factories/reserve/makeCancelReserveUseCase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function cancelReserveController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const getReserveByIdParamsSchema = z.object({
        id: z.string().uuid(),
        reason: z.string(),
    });

    const { id, reason } = getReserveByIdParamsSchema.parse(request.query);

    console.log(request.params)    

    try {
        const usecase = makeCancelReserveUseCase()

        const reserve = await usecase.execute(id, reason);

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
