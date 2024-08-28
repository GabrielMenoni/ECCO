// src/factories/makeGetUserByEmailUseCase.ts

import { makeUserRepository } from "./makeUserRepository";
import { GetUserByEmailUseCase } from "@/use-cases/user/getUserByEmailUseCase";

export const makeGetUserByEmailUseCase = () => {
    const getUserByEmailUseCase = new GetUserByEmailUseCase(makeUserRepository());
    return getUserByEmailUseCase;
};
