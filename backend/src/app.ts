import fastify from 'fastify';
import fastifyJwt from '@fastify/jwt';
import fastifyCookie from '@fastify/cookie';
import cors from '@fastify/cors';
import { env } from './env';
import { userRoutes } from './routes/userRoutes';
import { serviceRoutes } from './routes/serviceRoutes';
import { messageRoutes } from './routes/messageRoutes';
import { reserveRoutes } from './routes/reserveRoutes';
import { categoryRoutes } from './routes/categoryRoutes';
import { subCategoryRoutes } from './routes/subCategoryRoutes';
import { z } from 'zod';
import { CustomError } from './use-cases/erros/custom-error';

export const app = fastify({ logger: true });

const allowedOrigins = ['http://localhost:5173'];

// Register CORS
app.register(cors, {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'), false);
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // Include if your frontend needs to send cookies or authorization headers
});

// Register JWT
app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: '60m',
  },
});

// Register cookie
app.register(fastifyCookie);

// Register routes
app.register(userRoutes);
app.register(serviceRoutes);
app.register(reserveRoutes);
app.register(categoryRoutes);
app.register(subCategoryRoutes);
app.register(messageRoutes);

// Global error handler
app.setErrorHandler((error, request, reply) => {
  // Log the error for debugging purposes
  request.log.error(error);

  // Check if the error is an instance of CustomError
  if (error instanceof CustomError) {
    return reply.status(error.statusCode).send({ error: error.message });
  }

  // Check if the error is an instance of ZodError
  if (error instanceof z.ZodError) {
    return reply.status(400).send({ error: 'Invalid request data.', details: error.errors });
  }

  // Handle any other errors (generic internal server error)
  return reply.status(500).send({
    error: 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { message: error.message, stack: error.stack })
  });
});