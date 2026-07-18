import { Booking } from '../api';

export class BookingTestData {
  static default(): Booking {
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
    };
  }

  static updated(): Booking {
    return {
      firstname: 'Onur Kaan',
      lastname: 'Erzik',
      totalprice: 500,
      depositpaid: false,
      bookingdates: {
        checkin: '2026-08-01',
        checkout: '2026-08-10',
      },
      additionalneeds: 'Lunch',
    };
  }
}