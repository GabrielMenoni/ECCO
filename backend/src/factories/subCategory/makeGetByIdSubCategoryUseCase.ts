import { GetSubCategoryByIdUseCase } from "@/use-cases/subCategory/getSubCategoryIdUseCase"
import { makeSubCategoryRepository } from "./makeSubCategoryRepository"

export const makeGetByIdSubCategoryUseCase = () => {
    const myGetByIdSubCategoryUseCase = new GetSubCategoryByIdUseCase(makeSubCategoryRepository())
    return myGetByIdSubCategoryUseCase
}
