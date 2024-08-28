// src/controllers/user/getUserByEmail-controller.ts

import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeGetUserByEmailUseCase } from "@/factories/user/makeGetUserByEmailUseCase";
import { UserNotFoundError } from "@/use-cases/erros/user/user-not-found-error";
import { CustomError } from "@/use-cases/erros/custom-error";

export async function getUserByEmailController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const emailSchema = z.object({
        email: z.string().email(),
    });

    try {
        const { email } = emailSchema.parse(request.body);

        const usecase = makeGetUserByEmailUseCase();
        const user = await usecase.execute(email);

        reply.status(200).send({
            user: {
                ...user,
                senha: undefined, // Exclude password from the response
            },
        });

    } catch (error: any) {
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
