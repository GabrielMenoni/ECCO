
import { getMyRunningServices } from "@/use-cases/service/getMyRunningServicesUserCase"
import { makeServiceRepository } from "./makeServiceRepository"

export const makeGetMyRunningServices = () => {
    const myGetByUserIdServiceUseCase = new getMyRunningServices(makeServiceRepository())
    return myGetByUserIdServiceUseCase
}
