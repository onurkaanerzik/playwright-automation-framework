import { test as base, expect } from '@playwright/test';

type UserData = {
  username: string;
  password: string;
};

type MyFixtures = {
  user: UserData;
};

export const test = base.extend<MyFixtures>({

  user: async ({}, use) => {

    const userData = {
      username: 'standard_user',
      password: 'secret_sauce'
    };

    await use(userData);
  },

});

export { expect };