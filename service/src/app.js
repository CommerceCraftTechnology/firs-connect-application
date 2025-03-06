import dotenv from 'dotenv';
dotenv.config({ path: './service/.env' });


import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Import routes
import ServiceRoutes from './routes/service.route.js';
import { readConfiguration } from './utils/config.utils.js';
import { errorMiddleware } from './middleware/error.middleware.js';
import CustomError from './errors/custom.error.js';

// Read env variables
readConfiguration();

// Create the express app
const app = express();
app.disable('x-powered-by');

// Define configurations
app.use(cors({
  origin: '*', // Allow any origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposedHeaders: ['Content-Length', 'X-Requested-With'],
  credentials: false // Set to false when using '*' as origin
})); // Enable CORS for any origin

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.use('/service', ServiceRoutes);
app.use('*', () => {
  throw new CustomError(404, 'Path not found...');
});
// Global error handler
app.use(errorMiddleware);

export default app;
