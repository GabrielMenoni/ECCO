import { makeAuthenticateUseCase } from "@/factories/user/makeAuthenticateUseCase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function authenticate(request: FastifyRequest, reply: FastifyReply){
    const authenticateBodySchema = z.object({
        email: z.string().email(),
        senha: z.string(),
    })
    const { email, senha } = authenticateBodySchema.parse(request.body)
    try{
        const authenticateUseCase = makeAuthenticateUseCase()

        const { user } = await authenticateUseCase.execute({
            email,
            senha,
        })

        const token = await reply.jwtSign(
            {},
            {
                sign: {
                    sub: user.id
                }
            }
        )

        const refreshToken = await reply.jwtSign(
            {},
            {
                sign: {
                    sub: user.id,
                    expiresIn: '7d',
                }
            }
        )

        return reply
        .setCookie('refreshToken', refreshToken, {
            path: '/',
            secure: true,
            sameSite: true,
            httpOnly: true,
        })
        .status(200)
        .send({ token, })
    }catch (err){
        return err
    }
}