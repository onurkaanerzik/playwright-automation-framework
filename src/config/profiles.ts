import {
  EnvironmentConfig,
  EnvironmentName,
} from './types';

const profiles: Record<EnvironmentName, EnvironmentConfig> = {
  local: {
    name: 'local',
    baseUrl: 'https://example.com',
    apiBaseUrl: 'https://jsonplaceholder.typicode.com',
    retries: 0,
    workers: undefined,
  },

  dev: {
    name: 'dev',
    baseUrl: 'https://example.com',
    apiBaseUrl: 'https://jsonplaceholder.typicode.com',
    retries: 1,
    workers: undefined,
  },

  staging: {
    name: 'staging',
    baseUrl: 'https://example.com',
    apiBaseUrl: 'https://jsonplaceholder.typicode.com',
    retries: 1,
    workers: 2,
  },

  production: {
    name: 'production',
    baseUrl: 'https://example.com',
    apiBaseUrl: 'https://jsonplaceholder.typicode.com',
    retries: 2,
    workers: 1,
  },
};

export const getEnvironmentProfile = (
  environmentName: EnvironmentName,
): EnvironmentConfig => {
  return profiles[environmentName];
};