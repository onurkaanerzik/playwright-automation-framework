import { type APIResponse, expect } from '@playwright/test';

export class ApiAssertions {
  static expectStatus(
    response: APIResponse,
    expectedStatus: number,
  ): void {
    expect(response.status()).toBe(expectedStatus);
  }

  static expectSuccess(
    response: APIResponse,
  ): void {
    expect(response.ok()).toBeTruthy();
  }

  static expectJson(
    response: APIResponse,
  ): void {
    expect(response.headers()['content-type']).toContain(
      'application/json',
    );
  }
}