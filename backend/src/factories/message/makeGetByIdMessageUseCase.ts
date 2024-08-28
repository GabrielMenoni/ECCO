
import { makeMessageRepository } from "./makeMessageRepository"
import { ListMessagesByReservationUseCase } from "@/use-cases/message/listMessagesByIdUserCase"


export const makeGetByIdMessageUseCase = () => {
    const myGetByIdMessageUseCase = new ListMessagesByReservationUseCase(makeMessageRepository())
    return myGetByIdMessageUseCase
}
