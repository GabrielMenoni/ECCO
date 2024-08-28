/**
 * Documentation:
 * /src/server.ts
 * This file implements the entry point for the backend application.
 * 
 * Pedro Augusto Faria
 * Felipe Gabriel Senapeschi de Almeida 
 */

import { app } from './app';

const start = async () => {
  try {
    await app.listen({
      port: 3000,
      host: '127.0.0.1' // Set the host to '127.0.0.1' for localhost
    });
    console.log(`\nHTTP Server is responding at http://localhost:3000`);
  } catch (err) {
    console.error(err);  // Use console.error to log the error
    process.exit(1);
  }
};

start();
