// src/controllers/subCategory/updateSubCategory-controller.ts

import { makeUpdateSubCategoryUseCase } from "@/factories/subCategory/makeUpdateSubCategoryUseCase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function updateSubCategoryController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const updateParamsSchema = z.object({
        id: z.string().uuid(),
    });

    const updateBodySchema = z.object({
        nome: z.string().optional(),
        categoriaId: z.string().optional(),
    });

    const { id } = updateParamsSchema.parse(request.params);
    const data = updateBodySchema.parse(request.body);

    try {
        const usecase = makeUpdateSubCategoryUseCase()

        const updatedSubCategory = await usecase.execute(id, data);

        return reply.status(200).send(updatedSubCategory);
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        }

        return reply.status(409).send({ error: 'An unknown error occurred.' });
    }
}
