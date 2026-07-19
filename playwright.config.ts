import { defineConfig, devices } from '@playwright/test';
import { environment } from './src/config';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['junit', { outputFile: 'test-results/results.xml' }],
  ],

  timeout: 30_000,

  expect: {
    timeout: 5_000,
  },
  
  metadata: {
    project: 'Playwright Automation Framework',
    environment: process.env.APP_ENV ?? 'local',
  },

  use: {
    baseURL: environment.baseUrl,

    trace: 'on-first-retry',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    actionTimeout: 10_000,

    navigationTimeout: 15_000,
  },

projects: [
  {
    name: 'setup',
    testMatch: /tests\/auth\/.*\.setup\.ts/,
  },

  {
    name: 'api',
    testMatch: /tests\/api\/.*\.spec\.ts/,
  },

  {
    name: 'chromium',
    dependencies: ['setup'],
    testMatch: /tests\/e2e\/.*\.spec\.ts/,
    use: {
      ...devices['Desktop Chrome'],
      storageState: '.auth/user.json',
    },
  },

  {
    name: 'firefox',
    dependencies: ['setup'],
    testMatch: /tests\/e2e\/.*\.spec\.ts/,
    use: {
      ...devices['Desktop Firefox'],
      storageState: '.auth/user.json',
    },
  },

  {
    name: 'webkit',
    dependencies: ['setup'],
    testMatch: /tests\/e2e\/.*\.spec\.ts/,
    use: {
      ...devices['Desktop Safari'],
      storageState: '.auth/user.json',
    },
  },
],

  outputDir: 'test-results',
});