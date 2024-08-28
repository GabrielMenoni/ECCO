// src/routes/subCategoryRoutes.ts

import { createSubCategoryController } from "@/controllers/subCategory/createSubCategory-controller";
import { deleteSubCategoryController } from "@/controllers/subCategory/deleteSubCategory-controller";
import { getAllSubCategoryController } from "@/controllers/subCategory/getAllSubCategory-controller";
import { getSubCategoryByIdController } from "@/controllers/subCategory/getSubCategoryById-controller";
import { getSubCategoryByNameController } from "@/controllers/subCategory/getSubCategoryByName-controller";
import { updateSubCategoryController } from "@/controllers/subCategory/updateSubCategory-controller";
import { verifyJWT } from "@/middlewares/verify-jwt";
import { FastifyInstance } from "fastify";


export async function subCategoryRoutes(app: FastifyInstance) {
    app.post('/subcategory',{onRequest: [verifyJWT]}, createSubCategoryController );       // Create subcategory
    app.get('/subcategory/id',{onRequest: [verifyJWT]}, getSubCategoryByIdController);   // Get subcategory by ID
    app.get('/subcategory/name',{onRequest: [verifyJWT]}, getSubCategoryByNameController);// Get subcategory by Name
    app.get('/subcategory',{onRequest: [verifyJWT]}, getAllSubCategoryController);       // Get all subcategory
    app.put('/subcategory/:id',{onRequest: [verifyJWT]}, updateSubCategoryController);    // Update subcategory by ID
    app.delete('/subcategory/:id',{onRequest: [verifyJWT]}, deleteSubCategoryController); // Delete subcategory by ID
}