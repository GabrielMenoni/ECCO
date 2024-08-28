
import { DeleteReserveUseCase } from "@/use-cases/reserve/deleteReserveUseCase"
import { makeReserveRepository } from "./makeReserveRepository"



export const makeDeleteReserveUseCase = () => {
    const myDeleteReserveUseCase = new DeleteReserveUseCase(makeReserveRepository())
    return myDeleteReserveUseCase
}
