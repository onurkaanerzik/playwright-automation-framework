export type EnvironmentName =
  | 'local'
  | 'dev'
  | 'staging'
  | 'production';

export interface EnvironmentConfig {
  name: EnvironmentName;
  baseUrl: string;
  apiBaseUrl: string;
  retries: number;
  workers: number | undefined;
}