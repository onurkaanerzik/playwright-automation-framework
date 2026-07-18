import { expect, test } from '../../src/fixtures';
import { ApiAssertions } from '../../src/api';
import { createBooking } from '../../src/data';

test.describe(
  'Create Booking API',
  {
    tag: ['@api', '@regression'],
  },
  () => {
    test(
      'should create a new booking',
      {
        tag: '@smoke',
      },
      async ({ bookingApi }) => {
        const booking = createBooking();

        const response = await bookingApi.createBooking(booking);

        ApiAssertions.expectStatus(response, 200);
        ApiAssertions.expectSuccess(response);
        ApiAssertions.expectJson(response);

        const body = await response.json();

        expect(body.bookingid).toBeGreaterThan(0);

        expect(body.booking.firstname).toBe(
          booking.firstname,
        );
        expect(body.booking.lastname).toBe(
          booking.lastname,
        );
        expect(body.booking.totalprice).toBe(
          booking.totalprice,
        );
        expect(body.booking.depositpaid).toBe(
          booking.depositpaid,
        );
      },
    );
  },
);