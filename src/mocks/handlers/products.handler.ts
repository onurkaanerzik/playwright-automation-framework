import { Route } from '@playwright/test';
import { mockedProducts } from '../data/products.mock';

export const productMockHandler = async (
  route: Route,
) => {
  await route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify(mockedProducts),
  });
};