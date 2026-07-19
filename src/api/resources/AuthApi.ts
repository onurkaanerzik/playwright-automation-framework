import { type APIResponse } from '@playwright/test';
import { type ApiClient } from '../clients/ApiClient';
import { type AuthRequest } from '../models/booking.model';

export class AuthApi {
  constructor(private readonly apiClient: ApiClient) {}

  async createToken(
    credentials: AuthRequest,
  ): Promise<APIResponse> {
    return this.apiClient.post('/auth', {
      data: credentials,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}