
import { makeUserRepository } from "./makeUserRepository"
import { UpdateUserUseCase } from "@/use-cases/user/updateUserUseCase"

export const makeUpdateUserUseCase = () => {
    const myUserUpdateUseCase = new UpdateUserUseCase(makeUserRepository())
    return myUserUpdateUseCase
}
