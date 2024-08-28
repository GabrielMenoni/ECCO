import { makeCategoryRepository } from "./makeCategoryRepository"
import { DeleteCategoryUseCase } from "@/use-cases/category/deleteCategoryUseCase"

export const makeDeleteCategoryUseCase = () => {
    const myDeleteCategoryUseCase = new DeleteCategoryUseCase(makeCategoryRepository())
    return myDeleteCategoryUseCase
}
