
import { GetAllServicesUseCase } from "@/use-cases/service/getAllServicesUseCase"
import { makeServiceRepository } from "./makeServiceRepository"

export const makeGetAllServiceUseCase = () => {
    const myGetAllServiceUseCase = new GetAllServicesUseCase(makeServiceRepository())
    return myGetAllServiceUseCase
}
