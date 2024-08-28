// src/controllers/reserve/updatereserve-controller.ts

import { makeUpdateReserveUseCase } from "@/factories/reserve/makeUpdateReserveUseCase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function updateReserveController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const updateReserveParamsSchema = z.object({
        id: z.string().uuid(),
    });

    const updateReserveBodySchema = z.object({
        status: z.string().optional(),
        notaAvaliacaoParaCliente: z.number().optional(),
        comentarioAvaliacaoParaCliente: z.string().optional(),
        notaAvaliacaoParaPrestador: z.number().optional(),
        comentarioAvaliacaoParaPrestador: z.string().optional(),
        dataSolicitacao: z.string().optional(),
        comentario: z.string().optional(),
        cep: z.string().optional(),
        estado: z.string().optional(),
        cidade: z.string().optional(),
        bairro: z.string().optional(),
        rua: z.string().optional(),
        numero: z.number().optional(),
        horarioInicio: z.string().optional(),
        motivoRejeicao: z.string().optional(),
        horarioFim: z.string().optional(),
        servicoId: z.string().optional(), // Foreign key reference to Servico
        usuarioId: z.string().optional(),
    });

    const { id } = updateReserveParamsSchema.parse(request.params);
    const data = updateReserveBodySchema.parse(request.body);

    try {
        const usecase = makeUpdateReserveUseCase()

        const updatedReserve = await usecase.execute(id, data);

        return reply.status(200).send(updatedReserve);
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(409).send({ error: error.message });
        }

        return reply.status(409).send({ error: 'An unknown error occurred.' });
    }
}
