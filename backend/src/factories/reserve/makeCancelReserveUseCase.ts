
import { cancelReserve } from "@/use-cases/reserve/cancelReserveUseCase"
import { makeReserveRepository } from "./makeReserveRepository"


export const makeCancelReserveUseCase = () => {
    const myCancelReserveUseCase = new cancelReserve(makeReserveRepository())
    return myCancelReserveUseCase
}

