
import { UpdateServiceUseCase } from "@/use-cases/service/updateServiceUserCase"
import { makeServiceRepository } from "./makeServiceRepository"

export const makeUpdateServiceUseCase = () => {
    const myUpdateServiceUseCase = new UpdateServiceUseCase(makeServiceRepository())
    return myUpdateServiceUseCase
}
