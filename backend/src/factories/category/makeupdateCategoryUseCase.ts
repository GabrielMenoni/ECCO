import { makeCategoryRepository } from "./makeCategoryRepository"
import { UpdateCategoryUseCase } from "@/use-cases/category/updateCategoryUseCase"

export const makeUpdateCategoryUseCase = () => {
    const myUpdateCategoryUseCase = new UpdateCategoryUseCase(makeCategoryRepository())
    return myUpdateCategoryUseCase
}
