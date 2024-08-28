import { GetAllSubCategoryUseCase } from "@/use-cases/subCategory/getAllSubCategoryUseCase"
import { makeSubCategoryRepository } from "./makeSubCategoryRepository"

export const makeGetAllSubCategoryUseCase = () => {
    const myGetAllSubCategoryUseCase = new GetAllSubCategoryUseCase(makeSubCategoryRepository())
    return myGetAllSubCategoryUseCase
}
