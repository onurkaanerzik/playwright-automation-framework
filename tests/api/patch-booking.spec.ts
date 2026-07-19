import { expect, test } from '../../src/fixtures';
import { ApiAssertions } from '../../src/api';
import { createBooking } from '../../src/data';
import { environment } from '../../src/config';
import type {
  AuthResponse,
  Booking,
  CreateBookingResponse,
} from '../../src/api';

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
          (await createResponse.json()) as CreateBookingResponse;

        const bookingId = createdBody.bookingid;

        // Get token
        const tokenResponse =
          await authApi.createToken({
            username: environment.apiUser.username,
            password: environment.apiUser.password,
          });

        ApiAssertions.expectStatus(tokenResponse, 200);

        const tokenBody =
          (await tokenResponse.json()) as AuthResponse;

        const patchResponse =
          await bookingApi.partialUpdateBooking(
            bookingId,
            {
              firstname: 'Onur',
            },
            tokenBody.token,
          );

        ApiAssertions.expectStatus(patchResponse, 200);
        ApiAssertions.expectSuccess(patchResponse);

        const patchedBody =
          (await patchResponse.json()) as Booking;

        expect(patchedBody.firstname).toBe('Onur');

        // Değişmeyen alanlar korunmalı
        expect(patchedBody.lastname).toBe(
          booking.lastname,
        );
      },
    );
  },
);