// src/factories/service/makeServiceRepository.ts

import { PrismaServiceRepository } from "@/repositories/prisma/PrismaServiceRepository";

export const makeServiceRepository = () => {
    return new PrismaServiceRepository();
};
