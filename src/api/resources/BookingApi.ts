import { APIResponse } from '@playwright/test';
import { ApiClient } from '../clients/ApiClient';
import { Booking } from '../models/booking.model';

export class BookingApi {
  constructor(private readonly apiClient: ApiClient) {}

  async getBooking(id: number): Promise<APIResponse> {
    return this.apiClient.get(`/booking/${id}`);
  }

  async createBooking(
    booking: Booking,
  ): Promise<APIResponse> {
    return this.apiClient.post('/booking', {
      data: booking,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async updateBooking(
    bookingId: number,
    booking: Booking,
    token: string,
  ): Promise<APIResponse> {
    return this.apiClient.put(`/booking/${bookingId}`, {
      data: booking,
      headers: {
        'Content-Type': 'application/json',
        Cookie: `token=${token}`,
      },
    });
  }

  async partialUpdateBooking(
    bookingId: number,
    booking: Partial<Booking>,
    token: string,
  ): Promise<APIResponse> {
    return this.apiClient.patch(`/booking/${bookingId}`, {
      data: booking,
      headers: {
        'Content-Type': 'application/json',
        Cookie: `token=${token}`,
      },
    });
  }

  async deleteBooking(
    bookingId: number,
    token: string,
  ): Promise<APIResponse> {
    return this.apiClient.delete(`/booking/${bookingId}`, {
      headers: {
        Cookie: `token=${token}`,
      },
    });
  }
}