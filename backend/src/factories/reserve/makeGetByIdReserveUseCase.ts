
import { GetReserveByIdUseCase } from "@/use-cases/reserve/getReserveByIdUseCase"
import { makeReserveRepository } from "./makeReserveRepository"


export const makeGetByIdReserveUseCase = () => {
    const myGetByIdReserveUseCase = new GetReserveByIdUseCase(makeReserveRepository())
    return myGetByIdReserveUseCase
}
