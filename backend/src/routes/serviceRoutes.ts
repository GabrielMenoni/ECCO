// src/routes/serviceRoutes.ts

import { FastifyInstance } from "fastify";
import { createServiceController } from "@/controllers/service/createService-controller";
import { getServiceByIdController } from "@/controllers/service/getServiceById-controller";
import { getAllServicesController } from "@/controllers/service/getAllServices-controller";
import { updateServiceController } from "@/controllers/service/updateService-controller";
import { deleteServiceController } from "@/controllers/service/deleteService-controller";
import { searchServiceController } from "@/controllers/service/searchService-controller";
import { verifyJWT } from "@/middlewares/verify-jwt";
import { getServiceByUserIdController } from "@/controllers/service/getServiceByUserId-controller";
import { getMyRunningServiceController } from "@/controllers/service/getMyRunningServices-controller";
import { getServicesImPayingController } from "@/controllers/service/getServicesImPaying-controller";

export async function serviceRoutes(app: FastifyInstance) {
    app.post('/services',{onRequest: [verifyJWT]}, createServiceController);       // Create service
    app.get('/services/:id',{onRequest: [verifyJWT]}, getServiceByIdController);   // Get service by ID
    app.get('/services/search',{onRequest: [verifyJWT]}, searchServiceController);   // Search service
    app.get('/services',{onRequest: [verifyJWT]}, getAllServicesController);       // Get all services
    app.put('/services/:id',{onRequest: [verifyJWT]}, updateServiceController);    // Update service by ID
    app.delete('/services/:id',{onRequest: [verifyJWT]}, deleteServiceController); // Delete service by ID
    app.get('/services/user', {onRequest: [verifyJWT]}, getServiceByUserIdController); // Get service 
    app.get('/services/myrunning', {onRequest: [verifyJWT]}, getMyRunningServiceController)
    app.get('/services/impaying', {onRequest: [verifyJWT]}, getServicesImPayingController)
}
