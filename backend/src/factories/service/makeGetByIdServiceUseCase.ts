
import { GetServiceByIdUseCase } from "@/use-cases/service/getServiceByIdUserCase"
import { makeServiceRepository } from "./makeServiceRepository"

export const makeGetByIdServiceUseCase = () => {
    const myGetByIdServiceUseCase = new GetServiceByIdUseCase(makeServiceRepository())
    return myGetByIdServiceUseCase
}