// src/controllers/message/listMessagesController.ts

import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeGetByIdMessageUseCase } from "@/factories/message/makeGetByIdMessageUseCase";

export async function listMessagesController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const listMessagesSchema = z.object({
        reservationId: z.string(),
    });

    const { reservationId } = listMessagesSchema.parse(request.params);

    try {
        const listMessagesByReservationUseCase = makeGetByIdMessageUseCase()

        const messages = await listMessagesByReservationUseCase.execute(reservationId);

        return reply.status(200).send(messages);
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        } else {
            return reply.status(500).send({ error: 'An unknown error occurred.' });
        }
    }
}
