// src/controllers/subCategory/getSubCategoryByName-controller.ts

import { makeGetByNameSubCategoryUseCase } from "@/factories/subCategory/makeGetByNameSubCategoryUseCase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getSubCategoryByNameController(request: FastifyRequest, reply: FastifyReply) {
    const getSubCategoryByIdParamsSchema = z.object({
        query: z.string(),
    });


    const { query } = getSubCategoryByIdParamsSchema.parse(request.query);

    try {
        const usecase = makeGetByNameSubCategoryUseCase();

        const subCategory = await usecase.execute(query);

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
