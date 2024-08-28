
import { CategoryCreationUseCase } from "@/use-cases/category/categoryCreationUseCase"
import { makeCategoryRepository } from "./makeCategoryRepository"

export const makeCategoryCreationUseCase = () => {
    const myCategoryCreationUseCase = new CategoryCreationUseCase(makeCategoryRepository())
    return myCategoryCreationUseCase
}
