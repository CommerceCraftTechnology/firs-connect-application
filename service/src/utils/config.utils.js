import CustomError from '../errors/custom.error.js';
import envValidators from '../validators/env.validators.js';
import { getValidateMessages } from '../validators/helpers.validators.js';
import {logger} from "./logger.utils.js";

/**
 * Read the configuration env vars
 * (Add yours accordingly)
 *
 * @returns The configuration with the correct env vars
 */

export const readConfiguration = () => {
  logger.info('Reading environment variables...');
  logger.info('CTP_CLIENT_ID:', process.env.CTP_CLIENT_ID);
  logger.info('CTP_CLIENT_SECRET:', process.env.CTP_CLIENT_SECRET);
  logger.info('CTP_PROJECT_KEY:', process.env.CTP_PROJECT_KEY);

  const envVars = {
    clientId: process.env.CTP_CLIENT_ID,
    clientSecret: process.env.CTP_CLIENT_SECRET,
    projectKey: process.env.CTP_PROJECT_KEY,
    scope: process.env.CTP_SCOPE,
    //region: process.env.CTP_REGION,
    apiUrl: process.env.CTP_API_URL,
    authUrl: process.env.CTP_AUTH_URL,
  };

  logger.info('Processed envVars:', envVars);

  const validationErrors = getValidateMessages(envValidators, envVars);
  logger.info('Validation errors:', validationErrors);

  if (validationErrors.length) {
    throw new CustomError(
      'InvalidEnvironmentVariablesError',
      'Invalid Environment Variables please check your .env file',
      validationErrors
    );
  }

  return envVars;
};
