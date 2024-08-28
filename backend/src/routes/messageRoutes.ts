import { FastifyInstance } from "fastify";
import { createMessageController } from "@/controllers/message/createMessageController";
import { listMessagesController } from "@/controllers/message/listMessagesController";
import { verifyJWT } from "@/middlewares/verify-jwt";

export async function messageRoutes(app: FastifyInstance) {
    app.post('/messages',{onRequest: [verifyJWT]}, createMessageController); // Create a message for a reservation
    app.get('/reservations/:reservationId/messages',{onRequest: [verifyJWT]}, listMessagesController); // List messages for a reservation
}
