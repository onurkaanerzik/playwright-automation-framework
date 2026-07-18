export type EnvironmentName =
  | 'local'
  | 'dev'
  | 'staging'
  | 'production';

export type EnvironmentConfig = {
  name: EnvironmentName;
  baseUrl: string;
  apiBaseUrl: string;
  retries: number;
  workers?: number;

  apiUser: {
    username: string;
    password: string;
  };
};