// src/controllers/category/createCategory-controller.ts

import { z } from "zod";
import { FastifyReply, FastifyRequest } from "fastify";
import { makeCategoryCreationUseCase } from "@/factories/category/makeCategoryUseCase";


export async function createCategoryController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const createCategoryBodySchema = z.object({
        nome: z.string(),
    });

    const data = createCategoryBodySchema.parse(request.body);

    try {
        const usecase = makeCategoryCreationUseCase()

        const createdCategory = await usecase.execute(data);

        return reply.status(201).send(createdCategory);
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        }

        return reply.status(409).send({ error: 'An unknown error occurred.' });
    }
}
