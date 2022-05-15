import pino from 'pino';

const isDevelopment = true;

export const logger = pino({
  prettyPrint: isDevelopment,
  level: isDevelopment ? 'trace' : 'info',
});
