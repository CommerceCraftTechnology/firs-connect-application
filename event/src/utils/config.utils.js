import CustomError from '../errors/custom.error.js';
import envValidators from '../validators/env.validators.js';
import { getValidateMessages } from '../validators/helpers.validators.js';

/**
 * Read the configuration env vars
 * (Add yours accordingly)
 *
 * @returns The configuration with the correct env vars
 */

export const readConfiguration = () => {
  const envVars = {
    clientId: 'ECm4lQW2rXzVcRq4Ur4s8ifZ',
    clientSecret: 'VrMLjn2y4svn5dqUJ2GY2ErtrA-mZAX0',
    projectKey: 'connector_test',
    scope: 'manage_project:connector_test',
    region: 'europe-west1.gcp',
  };

  const validationErrors = getValidateMessages(envValidators, envVars);

  if (validationErrors.length) {
    throw new CustomError(
      'InvalidEnvironmentVariablesError',
      'Invalid Environment Variables please check your .env file',
      validationErrors
    );
  }

  return envVars;
};
