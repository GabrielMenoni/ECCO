// src/controllers/subCategory/getAllSubCategory-controller.ts


import { makeGetAllSubCategoryUseCase } from "@/factories/subCategory/makeGetAllsubCategoryUseCase";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getAllSubCategoryController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
        const usecase = makeGetAllSubCategoryUseCase()

        const subCategory = await usecase.execute();

        return reply.status(200).send(subCategory);
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        }

        return reply.status(409).send({ error: 'An unknown error occurred.' });
    }
}
