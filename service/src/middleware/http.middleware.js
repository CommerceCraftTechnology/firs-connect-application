import pkg from '@commercetools/sdk-client-v2';
const { HttpMiddlewareOptions } = pkg;
import { readConfiguration } from '../utils/config.utils.js';

/**
 * Configure Middleware. Example only. Adapt on your own
 */
export let httpMiddlewareOptions;
httpMiddlewareOptions = {
  host: `${readConfiguration().apiUrl}`,
};
