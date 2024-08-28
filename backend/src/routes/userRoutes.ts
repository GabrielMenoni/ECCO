import { createUserController } from "@/controllers/user/createUser-controller";
import { getUserByIdController } from "@/controllers/user/getUserById-controller";
import { getAllUsersController } from "@/controllers/user/getAllUsers-controller";
import { updateUserController } from "@/controllers/user/updateUser-controller";
import { deleteUserController } from "@/controllers/user/deleteUser-controller";
import { authenticate } from "@/controllers/user/authenticateUser-controller";
import { refresh } from "@/controllers/user/refreshTokenUser-controller";
import { FastifyInstance } from "fastify";
import { verifyJWT } from "@/middlewares/verify-jwt";
import { getUserByEmailController } from "@/controllers/user/getUserByEmail-controller";

export async function userRoutes(app: FastifyInstance) {
    // TODO: Login user
    app.post('/users', createUserController);     // Create user
    app.get('/users', getAllUsersController);     // Get all users
    app.get('/users/getid', {onRequest: [verifyJWT]}, getUserByEmailController)

    app.post('/sessions', authenticate)           // Session by user
    app.patch('/token/refresh', refresh)          // Refresh token

    app.get('/users/me', {onRequest: [verifyJWT]}, getUserByIdController); // Get user by ID
    app.put('/users/updated', {onRequest: [verifyJWT]}, updateUserController);  // Update user by ID
    app.delete('/users/delete', {onRequest: [verifyJWT]}, deleteUserController); // Delete user by ID
}
