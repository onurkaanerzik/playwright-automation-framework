import { Booking } from '../../api';

export function createBooking(
  overrides: Partial<Booking> = {},
): Booking {
  return {
    firstname: 'Onur',
    lastname: 'Erzik',
    totalprice: 250,
    depositpaid: true,
    bookingdates: {
      checkin: '2026-07-20',
      checkout: '2026-07-25',
    },
    additionalneeds: 'Breakfast',
    ...overrides,
  };
}