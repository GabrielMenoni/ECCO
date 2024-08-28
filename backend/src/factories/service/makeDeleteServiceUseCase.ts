
import { DeleteServiceUseCase } from "@/use-cases/service/deleteServiceUserCase"
import { makeServiceRepository } from "./makeServiceRepository"

export const makeDeleteServiceUseCase = () => {
    const myDeleteServiceUseCase = new DeleteServiceUseCase(makeServiceRepository())
    return myDeleteServiceUseCase
}
