// src/controllers/category/getAllCategory-controller.ts

import { makeGetAllCategoryUseCase } from "@/factories/category/makeGetAllCategoryUseCase";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getAllCategoryController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
        const usecase = makeGetAllCategoryUseCase()
        const category = await usecase.execute();

        return reply.status(200).send(category);
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        }

        return reply.status(409).send({ error: 'An unknown error occurred.' });
    }
}
