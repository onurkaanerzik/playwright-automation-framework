import 'dotenv/config';

import { getEnvironmentProfile } from './profiles';
import type {
  EnvironmentConfig,
  EnvironmentName,
} from './types';

const supportedEnvironments: EnvironmentName[] = [
  'local',
  'dev',
  'staging',
  'production',
];

const resolveEnvironmentName = (): EnvironmentName => {
  const requestedEnvironment = process.env.APP_ENV ?? 'local';

  if (
    !supportedEnvironments.includes(
      requestedEnvironment as EnvironmentName,
    )
  ) {
    throw new Error(
      `Unsupported APP_ENV: ${requestedEnvironment}. ` +
        `Supported values: ${supportedEnvironments.join(', ')}`,
    );
  }

  return requestedEnvironment as EnvironmentName;
};

export const environmentName = resolveEnvironmentName();

const profile = getEnvironmentProfile(environmentName);

export const environment: EnvironmentConfig = {
  ...profile,

  baseUrl:
    process.env.BASE_URL ??
    profile.baseUrl,

  apiBaseUrl:
    process.env.API_BASE_URL ??
    profile.apiBaseUrl,

  apiUser: {
    username:
      process.env.API_USERNAME ??
      profile.apiUser.username,

    password:
      process.env.API_PASSWORD ??
      profile.apiUser.password,
  },
};