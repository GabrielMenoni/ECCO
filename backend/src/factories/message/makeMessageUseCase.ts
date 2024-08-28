
import { RegisterMessageUseCase } from "@/use-cases/message/createMessageUserCase"
import { makeMessageRepository } from "./makeMessageRepository"


export const makeMessageCreationUseCase = () => {
    const myMessageCreationUseCase = new RegisterMessageUseCase(makeMessageRepository())
    return myMessageCreationUseCase
}
