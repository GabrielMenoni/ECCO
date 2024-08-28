import { UpdateSubCategoryUseCase } from "@/use-cases/subCategory/updateSubCategoryUseCase"
import { makeSubCategoryRepository } from "./makeSubCategoryRepository"


export const makeUpdateSubCategoryUseCase = () => {
    const myUpdateSubCategoryUseCase = new UpdateSubCategoryUseCase(makeSubCategoryRepository())
    return myUpdateSubCategoryUseCase
}
