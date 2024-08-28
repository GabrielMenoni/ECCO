// src/routes/categoryRoutes.ts

import { createCategoryController } from "@/controllers/category/createCategory-controller";
import { deleteCategoryController } from "@/controllers/category/deleteCategory-controller";
import { getAllCategoryController } from "@/controllers/category/getAllCategory-controller";
import { getCategoryByIdController } from "@/controllers/category/getCategoryById-controller";
import { getCategoryByNameController } from "@/controllers/category/getCategoryByName-controller";
import { updateCategoryController } from "@/controllers/category/updateCategory-controller";
import { verifyJWT } from "@/middlewares/verify-jwt";
import { FastifyInstance } from "fastify";


export async function categoryRoutes(app: FastifyInstance) {
    app.post('/category',{onRequest: [verifyJWT]}, createCategoryController );       // Create category
    app.get('/category/id',{onRequest: [verifyJWT]}, getCategoryByIdController);   // Get category by ID
    app.get('/category/name',{onRequest: [verifyJWT]}, getCategoryByNameController);   // Get category by ID
    app.get('/category',{onRequest: [verifyJWT]}, getAllCategoryController);       // Get all category
    app.put('/category/:id',{onRequest: [verifyJWT]}, updateCategoryController);    // Update category by ID
    app.delete('/category/:id',{onRequest: [verifyJWT]}, deleteCategoryController); // Delete category by ID
}