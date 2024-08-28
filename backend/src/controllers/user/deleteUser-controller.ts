// src/controllers/user/deleteUser-controller.ts

import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeDeleteUserUseCase } from "@/factories/user/makeDeleteUserUseCase";
import { UserNotFoundError } from "@/use-cases/erros/user/user-not-found-error";
import { CustomError } from "@/use-cases/erros/custom-error";

export async function deleteUserController(request: FastifyRequest, reply: FastifyReply): Promise<void> {

    try {

        const usecase = makeDeleteUserUseCase()
        await usecase.execute(request.user.sub);
        return reply.status(204).send();

    } catch (error) {
        
        if (error instanceof UserNotFoundError) {
            reply.status(404).send({ error: error.message });
        } else if (error instanceof CustomError) {
            reply.status(error.statusCode).send({ error: error.message });
        } else if (error instanceof z.ZodError) {
            reply.status(400).send({ error: 'Invalid request data.', details: error.errors });
        } else {
            // Propagate unexpected errors to the global error handler
            throw error;
        }
    }
}
