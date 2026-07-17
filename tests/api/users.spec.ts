import { expect, test } from '../../src/fixtures';

test.describe('Users API', () => {
  test('should return the requested user', async ({ usersApi }) => {
    const user = await usersApi.getUserById(1);

    expect(user.id).toBe(1);
    expect(user.name).toBeTruthy();
    expect(user.email).toContain('@');
  });

  test('should return the users collection', async ({ usersApi }) => {
    const users = await usersApi.getUsers();

    expect(users.length).toBeGreaterThan(0);
    expect(users[0]).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        email: expect.any(String),
      }),
    );
  });

  test('should create a user', async ({ usersApi }) => {
    const requestBody = {
      name: 'Automation Tester',
      username: 'automation.tester',
      email: 'automation.tester@example.com',
    };

    const createdUser = await usersApi.createUser(requestBody);

    expect(createdUser).toEqual(
      expect.objectContaining({
        ...requestBody,
        id: expect.any(Number),
      }),
    );
  });
});