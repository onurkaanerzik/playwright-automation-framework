import { expect, test as base } from '@playwright/test';
import { products } from '../data/products';
import { ApiClient, AuthApi, BookingApi, UsersApi } from '../api';
import { environment } from '../config/environment';
import {
  CartPage,
  CheckoutCompletePage,
  CheckoutStepOnePage,
  CheckoutStepTwoPage,
  HomePage,
  InventoryPage,
  LoginPage,
} from '../pages';

type AppFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutStepOnePage: CheckoutStepOnePage;
  checkoutStepTwoPage: CheckoutStepTwoPage;
  checkoutCompletePage: CheckoutCompletePage;

  usersApi: UsersApi;
  bookingApi: BookingApi;
  authApi: AuthApi;

  customer: {
    firstName: string;
    lastName: string;
    postalCode: string;
  };

  products: typeof products;
};

export const test = base.extend<AppFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);

    await use(homePage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },

  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);

    await use(inventoryPage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);

    await use(cartPage);
  },

  checkoutStepOnePage: async ({ page }, use) => {
    const checkoutStepOnePage = new CheckoutStepOnePage(page);

    await use(checkoutStepOnePage);
  },

  checkoutStepTwoPage: async ({ page }, use) => {
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page);

    await use(checkoutStepTwoPage);
  },

  checkoutCompletePage: async ({ page }, use) => {
    const checkoutCompletePage = new CheckoutCompletePage(page);

    await use(checkoutCompletePage);
  },

  usersApi: async ({ request }, use) => {
    const apiClient = new ApiClient(request, environment.apiBaseUrl);

    await use(new UsersApi(apiClient));
  },

  bookingApi: async ({ request }, use) => {
    const apiClient = new ApiClient(request, 'https://restful-booker.herokuapp.com');

    await use(new BookingApi(apiClient));
  },

  authApi: async ({ request }, use) => {
    const apiClient = new ApiClient(request, 'https://restful-booker.herokuapp.com');

    await use(new AuthApi(apiClient));
  },

  customer: async ({}, use) => {
    await use({
      firstName: 'John',
      lastName: 'Doe',
      postalCode: '10115',
    });
  },

  products: async ({}, use) => {
    await use(products);
  },
});

export { expect };
