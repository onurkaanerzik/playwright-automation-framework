import { expect, test } from '../../src/fixtures';
import { ApiAssertions } from '../../src/api';

test.describe(
  'Booking API',
  {
    tag: ['@api', '@regression'],
  },
  () => {
    test(
      'should return booking details',
      {
        tag: '@smoke',
      },
      async ({ bookingApi }) => {
        const response = await bookingApi.getBooking(1);

        ApiAssertions.expectStatus(response, 200);
        ApiAssertions.expectSuccess(response);
        ApiAssertions.expectJson(response);

        const booking = await response.json();

        expect(booking.firstname).toBeTruthy();
        expect(booking.lastname).toBeTruthy();
        expect(typeof booking.totalprice).toBe('number');
        expect(typeof booking.depositpaid).toBe('boolean');

        expect(booking.bookingdates.checkin).toBeTruthy();
        expect(booking.bookingdates.checkout).toBeTruthy();
      },
    );
  },
);