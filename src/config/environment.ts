import 'dotenv/config';

const getRequiredEnvironmentVariable = (name: string): string => {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
};

export const environment = {
  baseUrl: getRequiredEnvironmentVariable('BASE_URL'),
  apiBaseUrl: getRequiredEnvironmentVariable('API_BASE_URL'),
};