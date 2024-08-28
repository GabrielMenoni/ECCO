
import { makeUserRepository } from "./makeUserRepository"
import { GetAllUsersUseCase } from "@/use-cases/user/getAllUsersUseCase"

export const makeGetAllUsersUseCase = () => {
    const myGetAllUsersUseCase = new GetAllUsersUseCase(makeUserRepository())
    return myGetAllUsersUseCase
}
