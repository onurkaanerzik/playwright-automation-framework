import { expect, test as base } from '@playwright/test';
import { ApiClient, UsersApi } from '../api';
import { environment } from '../config/environment';
import { HomePage } from '../pages/HomePage';

type AppFixtures = {
  homePage: HomePage;
  usersApi: UsersApi;
};

export const test = base.extend<AppFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);

    await use(homePage);
  },

  usersApi: async ({ request }, use) => {
    const apiClient = new ApiClient(
      request,
      environment.apiBaseUrl,
    );

    const usersApi = new UsersApi(apiClient);

    await use(usersApi);
  },
});

export { expect };