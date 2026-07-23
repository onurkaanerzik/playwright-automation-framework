import { type EnvironmentConfig, type EnvironmentName } from './types';

const profiles: Record<EnvironmentName, EnvironmentConfig> = {
  local: {
    name: 'local',
    baseUrl: 'https://www.saucedemo.com',
    apiBaseUrl: 'https://jsonplaceholder.typicode.com',
    retries: 0,
    workers: undefined,

    apiUser: {
      username: 'admin',
      password: 'password123',
    },
  },

  dev: {
    name: 'dev',
    baseUrl: 'https://www.saucedemo.com',
    apiBaseUrl: 'https://jsonplaceholder.typicode.com',
    retries: 1,
    workers: undefined,

    apiUser: {
      username: 'admin',
      password: 'password123',
    },
  },

  staging: {
    name: 'staging',
    baseUrl: 'https://www.saucedemo.com',
    apiBaseUrl: 'https://jsonplaceholder.typicode.com',
    retries: 1,
    workers: 2,

    apiUser: {
      username: 'admin',
      password: 'password123',
    },
  },

  production: {
    name: 'production',
    baseUrl: 'https://www.saucedemo.com',
    apiBaseUrl: 'https://jsonplaceholder.typicode.com',
    retries: 2,
    workers: 1,

    apiUser: {
      username: 'admin',
      password: 'password123',
    },
  },
};

export const getEnvironmentProfile = (environmentName: EnvironmentName): EnvironmentConfig => {
  return profiles[environmentName];
};
