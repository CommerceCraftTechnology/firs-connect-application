import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Cargar variables de entorno con ruta absoluta
dotenv.config({ path: join(__dirname, '../.env') });

// Import logger
// import { logger } from './utils/logger.utils';

import app from './app.js';
import {logger} from "./utils/logger.utils.js";

// Debug environment variables
logger.info('Environment Variables:', {
  CTP_CLIENT_ID: process.env.CTP_CLIENT_ID,
  CTP_CLIENT_SECRET: process.env.CTP_CLIENT_SECRET,
  CTP_PROJECT_KEY: process.env.CTP_PROJECT_KEY
});

const PORT = process.env.PORT || 3000;

// Listen the application
const server = app.listen(PORT, () => {
  logger.info(`⚡️ Service application listening on port ${PORT}`);
});

export default server;

