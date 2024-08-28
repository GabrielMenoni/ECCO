// src/routes/reserveRoutes.ts

import { cancelReserveController } from "@/controllers/reserves/cancelReserve-controller";
import { createReserveController } from "@/controllers/reserves/createReserve-controller";
import { deleteReserveController } from "@/controllers/reserves/deleteReserve-controller";
import { getAllReservesController } from "@/controllers/reserves/getAllReserves-controller";
import { getReserveByIdController } from "@/controllers/reserves/getReserveById-controller";
import { updateReserveController } from "@/controllers/reserves/updateReserve-controller";
import { verifyJWT } from "@/middlewares/verify-jwt";
import { FastifyInstance } from "fastify";

export async function reserveRoutes(app: FastifyInstance){
    app.post('/reserves',{onRequest: [verifyJWT]}, createReserveController)
    app.get('/reserves/:id',{onRequest: [verifyJWT]}, getReserveByIdController) 
    app.get('/reserves',{onRequest: [verifyJWT]}, getAllReservesController)
    app.put('/reserves/:id',{onRequest: [verifyJWT]}, updateReserveController)
    app.put('/reserves/cancel',{onRequest: [verifyJWT]}, cancelReserveController)
    app.delete('/reserves/:id',{onRequest: [verifyJWT]}, deleteReserveController)
}