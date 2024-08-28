import { UserCreationUseCase } from "@/use-cases/user/userCreationUseCase"
import { makeUserRepository } from "./makeUserRepository"

export const makeUserCreationUseCase = () => {
    const myUserCreationUseCase = new UserCreationUseCase(makeUserRepository())
    return myUserCreationUseCase
}
