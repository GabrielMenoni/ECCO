// src/controllers/user/getUserById-controller.ts

import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeGetUserByIdUseCase } from "@/factories/user/makeGetUserByIdUseCase";
import { UserNotFoundError } from "@/use-cases/erros/user/user-not-found-error";
import { CustomError } from "@/use-cases/erros/custom-error";

export async function getUserByIdController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
        
        const usecase = makeGetUserByIdUseCase();
        const user  = await usecase.execute(request.user.sub)

        reply.status(200).send({
            user:{
                ...user,
                senha: undefined,
            }
        });

    } catch (error:any) {
        
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
