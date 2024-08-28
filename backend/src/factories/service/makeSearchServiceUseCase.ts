// src/factories/service/makeSearchServiceUseCase.ts

import { makeServiceRepository } from "./makeServiceRepository";
import { SearchServiceUseCase } from "@/use-cases/service/searchServiceUseCase";

export const makeSearchServiceUseCase= () => {
    const myGetByIdServiceUseCase = new SearchServiceUseCase(makeServiceRepository())
    return myGetByIdServiceUseCase
};
