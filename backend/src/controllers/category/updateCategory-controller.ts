// src/controllers/category/updateCategory-controller.ts

import { makeUpdateCategoryUseCase } from "@/factories/category/makeupdateCategoryUseCase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function updateCategoryController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const updateParamsSchema = z.object({
        id: z.string().uuid(),
    });

    const updateBodySchema = z.object({
        nome: z.string().optional(),
    });

    const { id } = updateParamsSchema.parse(request.params);
    const data = updateBodySchema.parse(request.body);

    try {
        const usecase = makeUpdateCategoryUseCase()

        const updatedCategory = await usecase.execute(id, data);

        return reply.status(200).send(updatedCategory);
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        }

        return reply.status(409).send({ error: 'An unknown error occurred.' });
    }
}
