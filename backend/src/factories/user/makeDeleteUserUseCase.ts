
import { makeUserRepository } from "./makeUserRepository"
import { DeleteUserUseCase } from "@/use-cases/user/deleteUserUseCase"

export const makeDeleteUserUseCase = () => {
    const myDeleteUserUseCase = new DeleteUserUseCase(makeUserRepository())
    return myDeleteUserUseCase
}
