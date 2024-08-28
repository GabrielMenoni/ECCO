// src/factories/service/makeServiceUseCase.ts

import { PrismaServiceRepository } from '@/repositories/prisma/PrismaServiceRepository';
import { ServiceCreationUseCase } from '@/use-cases/service/serviceCreationUseCase';

export const makeServiceCreationUseCase = (): ServiceCreationUseCase => {
    const serviceRepository = new PrismaServiceRepository();
    return new ServiceCreationUseCase(serviceRepository);
};
