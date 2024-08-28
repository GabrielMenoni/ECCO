
import { getRunningServicesImPaying } from "@/use-cases/service/getRunningServicesImPayingUserCase"
import { makeServiceRepository } from "./makeServiceRepository"

export const makeGetServicesImPaying = () => {
    const myGetByUserIdServiceUseCase = new getRunningServicesImPaying(makeServiceRepository())
    return myGetByUserIdServiceUseCase
}
