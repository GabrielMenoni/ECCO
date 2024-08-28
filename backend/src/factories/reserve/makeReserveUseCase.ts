
import { makeReserveRepository } from "./makeReserveRepository"
import { ReserveCreationUseCase } from "@/use-cases/reserve/reserveCreationUseCase"


export const makeReserveCreationUseCase = () => {
    const myReserveCreationUseCase = new ReserveCreationUseCase(makeReserveRepository())
    return myReserveCreationUseCase
}
