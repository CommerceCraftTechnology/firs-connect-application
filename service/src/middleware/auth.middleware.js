import { readConfiguration } from '../utils/config.utils.js';

/**
 * Configure Middleware. Example only. Adapt on your own
 */
export const authMiddlewareOptions = {
  host: `${readConfiguration().authUrl}`,
  projectKey: readConfiguration().projectKey,
  credentials: {
    clientId: readConfiguration().clientId,
    clientSecret: readConfiguration().clientSecret,
  },
  copes: [
    readConfiguration().scope
        ? (readConfiguration().scope)
  : 'default',
  ],
};
