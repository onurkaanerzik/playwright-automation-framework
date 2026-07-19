import { expect, test } from '../../src/fixtures';
import { ApiAssertions } from '../../src/api';
import { createBooking } from '../../src/data';
import type { AuthResponse, Booking, CreateBookingResponse } from '../../src/api';

test.describe(
  'Update Booking API',
  {
    tag: ['@api', '@regression'],
  },
  () => {
    test(
      'should update an existing booking',
      {
        tag: '@smoke',
      },
      async ({ bookingApi, authApi }) => {
        // Create booking
        const booking = createBooking();

        const createResponse = await bookingApi.createBooking(booking);

        ApiAssertions.expectStatus(createResponse, 200);

        const createdBody = (await createResponse.json()) as CreateBookingResponse;

        const bookingId = createdBody.bookingid;

        // Get token
        const tokenResponse = await authApi.createToken({
          username: 'admin',
          password: 'password123',
        });

        ApiAssertions.expectStatus(tokenResponse, 200);

        const tokenBody = (await tokenResponse.json()) as AuthResponse;

        // Update booking
        const updatedBooking = createBooking({
          firstname: 'Onur',
          lastname: 'Kaan',
          totalprice: 999,
        });

        const updateResponse = await bookingApi.updateBooking(
          bookingId,
          updatedBooking,
          tokenBody.token,
        );

        ApiAssertions.expectStatus(updateResponse, 200);
        ApiAssertions.expectSuccess(updateResponse);

        const updatedBody = (await updateResponse.json()) as Booking;

        expect(updatedBody.firstname).toBe(updatedBooking.firstname);

        expect(updatedBody.lastname).toBe(updatedBooking.lastname);

        expect(updatedBody.totalprice).toBe(updatedBooking.totalprice);
      },
    );
  },
);
