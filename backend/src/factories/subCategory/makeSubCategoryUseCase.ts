// src/factories/subCategory/makeSubCategoryUseCase.ts

import { makeSubCategoryRepository } from "./makeSubCategoryRepository"
import { SubCategoryCreationUseCase } from "@/use-cases/subCategory/subCategoryCreationUseCase"


export const makeSubCategoryCreationUseCase = () => {
    const mySubCategoryCreationUseCase = new SubCategoryCreationUseCase(makeSubCategoryRepository())
    return mySubCategoryCreationUseCase
}
