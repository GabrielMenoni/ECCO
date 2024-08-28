// src/controllers/category/getCategoryByName-controller.ts

import { makeGetByNameCategoryUseCase } from "@/factories/category/makeGetByNameCategoryUseCase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getCategoryByNameController(request: FastifyRequest, reply: FastifyReply) {
    const getCategoryByIdParamsSchema = z.object({
        query: z.string(),
    });


    const { query } = getCategoryByIdParamsSchema.parse(request.query);
    console.log(query)

    try {
        const usecase = makeGetByNameCategoryUseCase();

        const category = await usecase.execute(query);

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
