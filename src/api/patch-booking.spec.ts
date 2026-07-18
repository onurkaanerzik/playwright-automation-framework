import { expect, test } from '../../src/fixtures';
import { ApiAssertions } from '../../src/api';
import { createBooking } from '../../src/data';

test.describe(
  'Patch Booking API',
  {
    tag: ['@api', '@regression'],
  },
  () => {
    test(
      'should partially update an existing booking',
      {
        tag: '@smoke',
      },
      async ({ bookingApi, authApi }) => {
        // Create booking
        const booking = createBooking();

        const createResponse =
          await bookingApi.createBooking(booking);

        ApiAssertions.expectStatus(createResponse, 200);

        const createdBody =
          await createResponse.json();

        const bookingId = createdBody.bookingid;

        // Get token
        const tokenResponse =
          await authApi.createToken({
            username: 'admin',
            password: 'password123',
          });

        ApiAssertions.expectStatus(tokenResponse, 200);

        const tokenBody =
          await tokenResponse.json();

        // Patch booking
        const patchResponse =
          await bookingApi.partialUpdateBooking(
            bookingId,
            {
              firstname: 'Dilek',
            },
            tokenBody.token,
          );

        ApiAssertions.expectStatus(patchResponse, 200);
        ApiAssertions.expectSuccess(patchResponse);

        const patchedBody =
          await patchResponse.json();

        expect(patchedBody.firstname).toBe('Dilek');

        // Değişmeyen alanlar korunmalı
        expect(patchedBody.lastname).toBe(
          booking.lastname,
        );
    },
    );
  },
);