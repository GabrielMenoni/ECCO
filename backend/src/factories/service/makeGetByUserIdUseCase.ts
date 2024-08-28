
import { GetServiceByUserIdUseCase } from "@/use-cases/service/getServiceByUserIdUseCase"
import { makeServiceRepository } from "./makeServiceRepository"

export const makeGetByUserIdServiceUseCase = () => {
    const myGetByUserIdServiceUseCase = new GetServiceByUserIdUseCase(makeServiceRepository())
    return myGetByUserIdServiceUseCase
}
