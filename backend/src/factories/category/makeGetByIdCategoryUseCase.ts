import { makeCategoryRepository } from "./makeCategoryRepository"
import { GetCategoryByIdUseCase } from "@/use-cases/category/getCategoryIdUseCase"

export const makeGetByIdCategoryUseCase = () => {
    const myGetByIdCategoryUseCase = new GetCategoryByIdUseCase(makeCategoryRepository())
    return myGetByIdCategoryUseCase
}
