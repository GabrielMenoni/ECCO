import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeServiceCreationUseCase } from "@/factories/service/makeServiceUseCase";

export async function createServiceController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const createServiceBodySchema = z.object({
        momentoCriacao: z.string(),
        precoFixo: z.number().nullable().optional(),
        precoMin: z.number().nullable().optional(),
        precoMax: z.number().nullable().optional(),
        subcategoriaId: z.string(),
        usuarioId: z.string(),
        diasServico: z.array(z.object({
            data: z.string(),
            periodo: z.string(),
        })).min(1).max(4), // Allows between 1 and 4 DiaServico objects
    });


    const data = createServiceBodySchema.parse(request.body);

    try {

        const usecase = makeServiceCreationUseCase();
        const createdService = await usecase.execute(data);

        return reply.status(201).send(createdService);
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        }

        return reply.status(409).send({ error: 'An unknown error occurred.' });
    }
}