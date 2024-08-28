// src/controllers/user/createUser-controller.ts
import { makeUserCreationUseCase } from '@/factories/user/makeUserUseCase';
import { FastifyReply, FastifyRequest } from 'fastify';
import { CustomError } from '@/use-cases/erros/custom-error';
import { z } from 'zod';

export async function createUserController(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    // Define the schema for request validation
    console.log(request.body);
    const registerBodySchema = z.object({
        nome: z.string(),
        email: z.string().email(),
        senha: z.string().min(6),
        celular: z.string(),
        avaliacao: z.number().min(0).max(5),
        fotoFrenteDocumento: z.string(),
        fotoVersoDocumento: z.string(),
        tipoDocumento: z.string(),
        verificado: z.boolean(),
        fotoPerfil: z.string(),
    });
    

    try {
        // Parse and validate the request body
        const data = registerBodySchema.parse(request.body);

        // Create the use case instance
        const usecase = makeUserCreationUseCase();

        // Execute the use case with the validated data
        await usecase.execute(data);

        // Send a success response
        reply.status(201).send();
    } catch (error) {
        if (error instanceof z.ZodError) {
            // Handle Zod validation errors
            reply.status(400).send({ error: 'Invalid request data.', details: error.errors });
        } else if (error instanceof CustomError) {
            console.log(error)
            // Handle custom application errors
            reply.status(error.statusCode).send({ error: error.message });
        } else {
            // Propagate unexpected errors to the global error handler
            throw error;
        }
    }
}
