import { makeCategoryRepository } from "./makeCategoryRepository"
import { GetAllCategoryUseCase } from "@/use-cases/category/getAllCategoryUseCase"

export const makeGetAllCategoryUseCase = () => {
    const myGetAllCategoryUseCase = new GetAllCategoryUseCase(makeCategoryRepository())
    return myGetAllCategoryUseCase
}
