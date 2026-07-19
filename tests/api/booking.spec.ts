import { expect, test } from '../../src/fixtures';
import { ApiAssertions } from '../../src/api';
import { createBooking } from '../../src/data';

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
          const booking =
            createBooking();

          const createResponse =
            await bookingApi.createBooking(
              booking,
            );

          ApiAssertions.expectStatus(
            createResponse,
            200,
          );

          const createdBody =
            await createResponse.json();

          const bookingId =
            createdBody.bookingid;

          const response =
            await bookingApi.getBooking(
              bookingId,
            );

          ApiAssertions.expectStatus(
            response,
            200,
          );

          ApiAssertions.expectSuccess(response);
          ApiAssertions.expectJson(response);

          const bookingResponse =
            await response.json();

          expect(
            bookingResponse.firstname,
          ).toBeTruthy();

          expect(
            bookingResponse.lastname,
          ).toBeTruthy();

          expect(
            typeof bookingResponse.totalprice,
          ).toBe('number');

          expect(
            typeof bookingResponse.depositpaid,
          ).toBe('boolean');

          expect(
            bookingResponse.bookingdates.checkin,
          ).toBeTruthy();

          expect(
            bookingResponse.bookingdates.checkout,
          ).toBeTruthy();
      },
    );
  },
);