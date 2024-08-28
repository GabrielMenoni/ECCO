import { AuthenticateUseCase } from "@/use-cases/user/authenticateUserUseCase"
import { makeUserCreationUseCase } from "./makeUserUseCase"
import { makeUserRepository } from "./makeUserRepository"


export const makeAuthenticateUseCase = () => {
    const myAuthenticateUseCase = new AuthenticateUseCase(makeUserRepository())
    return myAuthenticateUseCase
}