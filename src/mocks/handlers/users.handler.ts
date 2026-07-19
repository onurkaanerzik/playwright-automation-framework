import { Route } from '@playwright/test';
import { mockedUser } from '../data/users.mock';

export const usersMockHandler = async (
  route: Route,
) => {
  await route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify(mockedUser),
  });
};