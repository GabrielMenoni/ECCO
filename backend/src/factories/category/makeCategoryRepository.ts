// src/factories/category/makeCategoryRepository.ts

import { PrismaCategoryRepository } from "@/repositories/prisma/PrismaCategoryRepository";

export const makeCategoryRepository = () => {
    return new PrismaCategoryRepository();
};
