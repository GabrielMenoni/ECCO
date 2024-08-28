// src/controllers/service/searchService-controller.ts

import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeSearchServiceUseCase } from "@/factories/service/makeSearchServiceUseCase";
import { CategoriaNotFoundError } from "@/use-cases/erros/category/categoria-not-found-error";
import { SubcategoriaNotFoundError } from "@/use-cases/erros/subCategory/subcategoria-not-found-error";
import { SubcategoriaDoesNotMatchError } from "@/use-cases/erros/subCategory/subcategoria-does-not-match-error";

export async function searchServiceController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const searchServiceQuery = z.object({
        id: z.string().uuid(),
        categoryId: z.string().uuid().optional(),
        subcategoryId: z.string().uuid().optional(),
        dates: z.string().optional(),
    });

    const { id, categoryId, subcategoryId, dates } = searchServiceQuery.parse(request.query);

    try {
        const usecase = makeSearchServiceUseCase();

        console.log('--------------')
        console.log(id,categoryId, subcategoryId)

        const service = await usecase.execute(id, categoryId || '', subcategoryId || '', dates || '');

        if (!service) {
            return reply.status(404).send({ message: 'Service not found' });
        }

        return reply.status(200).send(service);
    } catch (error) {
        if (error instanceof CategoriaNotFoundError) {
            return reply.status(404).send({ error: 'Category not found' });
        }

        if (error instanceof SubcategoriaNotFoundError) {
            return reply.status(404).send({ error: 'Subcategory not found' });
        }

        if (error instanceof SubcategoriaDoesNotMatchError) {
            return reply.status(400).send({ error: 'Subcategory does not match the given category' });
        }

        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        }

        return reply.status(409).send({ error: 'An unknown error occurred.' });
    }
}
