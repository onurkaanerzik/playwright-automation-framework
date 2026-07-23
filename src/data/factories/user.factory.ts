import { type User } from '../models/user.model';

const createUniqueValue = (): string => {
  return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};

export const createUser = (overrides: Partial<User> = {}): User => {
  const uniqueValue = createUniqueValue();

  const defaultUser: User = {
    firstName: 'Automation',
    lastName: 'Tester',
    email: `automation.tester.${uniqueValue}@example.com`,
    password: `Qa-${uniqueValue}!`,
  };

  return {
    ...defaultUser,
    ...overrides,
  };
};
