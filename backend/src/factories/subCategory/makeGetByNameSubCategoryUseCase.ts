import { makeSubCategoryRepository } from "./makeSubCategoryRepository"
import { GetSubCategoryByNameUseCase } from "@/use-cases/subCategory/getSubCategoryByName"

export const makeGetByNameSubCategoryUseCase = () => {
    const myGetByNameSubCategoryUseCase = new GetSubCategoryByNameUseCase(makeSubCategoryRepository())
    return myGetByNameSubCategoryUseCase
}
