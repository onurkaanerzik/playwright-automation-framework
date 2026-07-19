export interface Customer {
  firstName: string;
  lastName: string;
  postalCode: string;
}

export function createCustomer(overrides: Partial<Customer> = {}): Customer {
  return {
    firstName: 'Onur',
    lastName: 'Erzik',
    postalCode: '10115',
    ...overrides,
  };
}
