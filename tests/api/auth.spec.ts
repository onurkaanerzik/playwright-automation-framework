import { expect, test } from '../../src/fixtures';

test.describe(
  'Authentication API',
  {
    tag: ['@api', '@regression'],
  },
  () => {
    test(
      'should create auth token',
      {
        tag: '@smoke',
      },
      async ({ authApi }) => {
        const response = await authApi.createToken({
          username: 'admin',
          password: 'password123',
        });

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.token).toBeTruthy();
        expect(typeof body.token).toBe('string');
      },
    );
  },
);