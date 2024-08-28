
import { GetAllReserveUseCase } from "@/use-cases/reserve/getAllReserveUseCase"
import { makeReserveRepository } from "./makeReserveRepository"



export const makeGetAllReserveUseCase = () => {
    const myGetAllReserveUseCase = new GetAllReserveUseCase(makeReserveRepository())
    return myGetAllReserveUseCase
}
