import { GetCategoryByNameUseCase } from "@/use-cases/category/getCategoryByNameUseCase"
import { makeCategoryRepository } from "./makeCategoryRepository"


export const makeGetByNameCategoryUseCase = () => {
    const myGetByNameCategoryUseCase = new GetCategoryByNameUseCase(makeCategoryRepository())
    return myGetByNameCategoryUseCase
}
