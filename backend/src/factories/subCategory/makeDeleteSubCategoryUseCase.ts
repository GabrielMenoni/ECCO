import { DeleteSubCategoryUseCase } from "@/use-cases/subCategory/deleteSubCategoryUseCase"
import { makeSubCategoryRepository } from "./makeSubCategoryRepository"

export const makeDeleteSubCategoryUseCase = () => {
    const myDeleteSubCategoryUseCase = new DeleteSubCategoryUseCase(makeSubCategoryRepository())
    return myDeleteSubCategoryUseCase
}
