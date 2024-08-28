
import { UpdateReserveUseCase } from "@/use-cases/reserve/updateReserveUseCase"
import { makeReserveRepository } from "./makeReserveRepository"


export const makeUpdateReserveUseCase = () => {
    const myUpdateReserveUseCase = new UpdateReserveUseCase(makeReserveRepository())
    return myUpdateReserveUseCase
}
