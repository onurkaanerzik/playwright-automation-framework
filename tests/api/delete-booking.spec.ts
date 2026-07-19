import { test } from '../../src/fixtures';
import { ApiAssertions } from '../../src/api';
import { createBooking } from '../../src/data';
import type { AuthResponse, CreateBookingResponse } from '../../src/api';

test.describe(
  'Delete Booking API',
  {
    tag: ['@api', '@regression'],
  },
  () => {
    test(
      'should delete an existing booking',
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

        // Delete booking
        const deleteResponse = await bookingApi.deleteBooking(bookingId, tokenBody.token);

        ApiAssertions.expectStatus(deleteResponse, 201);
        ApiAssertions.expectSuccess(deleteResponse);

        // Verify booking is deleted
        const getResponse = await bookingApi.getBooking(bookingId);

        ApiAssertions.expectStatus(getResponse, 404);
      },
    );
  },
);
