// src/controllers/subCategory/createSubCategory-controller.ts

import { z } from "zod";
import { FastifyReply, FastifyRequest } from "fastify";
import { makeSubCategoryCreationUseCase } from "@/factories/subCategory/makeSubCategoryUseCase";


export async function createSubCategoryController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const createSubCategoryBodySchema = z.object({
        nome: z.string(),
        categoriaId: z.string(),
    });

    const data = createSubCategoryBodySchema.parse(request.body);

    try {
        const usecase = makeSubCategoryCreationUseCase()

        const createdSubCategory = await usecase.execute(data);

        return reply.status(201).send(createdSubCategory);
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        }

        return reply.status(409).send({ error: 'An unknown error occurred.' });
    }
}
