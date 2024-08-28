// src/controllers/user/getAllUsers-controller.ts

import { FastifyReply, FastifyRequest } from "fastify";
import { makeGetAllUsersUseCase } from "@/factories/user/makeGetAllUsersUseCase";

export async function getAllUsersController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
        const usecase = makeGetAllUsersUseCase();

        const users = await usecase.execute();

        return reply.status(200).send(users);
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        }

        return reply.status(409).send({ error: 'An unknown error occurred.' });
    }
}
