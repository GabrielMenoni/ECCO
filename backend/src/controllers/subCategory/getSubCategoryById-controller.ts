// src/controllers/subCategory/getSubCategoryById-controller.ts

import { makeGetByIdSubCategoryUseCase } from "@/factories/subCategory/makeGetByIdSubCategoryUseCase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getSubCategoryByIdController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const getSubCategoryByIdParamsSchema = z.object({
        id: z.string().uuid(),
    });

    const { id } = getSubCategoryByIdParamsSchema.parse(request.params);

    try {
        const usecase = makeGetByIdSubCategoryUseCase()

        const subCategory = await usecase.execute(id);

        if (!subCategory) {
            return reply.status(404).send({ message: 'Subcategory not found' });
        }

        return reply.status(200).send(subCategory);
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        }

        return reply.status(409).send({ error: 'An unknown error occurred.' });
    }
}
