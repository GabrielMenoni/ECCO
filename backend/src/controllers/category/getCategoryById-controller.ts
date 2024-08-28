// src/controllers/category/getCategoryById-controller.ts

import { makeGetByIdCategoryUseCase } from "@/factories/category/makeGetByIdCategoryUseCase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getCategoryByIdController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const getCategoryByIdParamsSchema = z.object({
        id: z.string().uuid(),
    });

    const { id } = getCategoryByIdParamsSchema.parse(request.params);

    try {
        const usecase = makeGetByIdCategoryUseCase()

        const category = await usecase.execute(id);

        if (!category) {
            return reply.status(404).send({ message: 'Category not found' });
        }

        return reply.status(200).send(category);
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        }

        return reply.status(409).send({ error: 'An unknown error occurred.' });
    }
}
