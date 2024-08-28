// src/factories/subCategory/makeSubCategoryRepository.ts

import { PrismaSubCategoryRepository } from "@/repositories/prisma/PrismaSubCategoryRepository";

export const makeSubCategoryRepository = () => {
    return new PrismaSubCategoryRepository();
};
