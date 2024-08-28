
import { makeUserRepository } from "./makeUserRepository"
import { GetUserByIdUseCase } from "@/use-cases/user/getUserByIdUseCase"

export const makeGetUserByIdUseCase = () => {
    const myGetUserByIdUseCase = new GetUserByIdUseCase(makeUserRepository())
    return myGetUserByIdUseCase
}
