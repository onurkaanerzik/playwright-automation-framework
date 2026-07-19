import {
  type APIRequestContext,
  type APIResponse,
  expect,
} from '@playwright/test';

type RequestOptions = {
  headers?: Record<string, string>;
  query?: Record<string, string | number | boolean>;
};

type BodyRequestOptions<TBody> = RequestOptions & {
  data: TBody;
};

export class ApiClient {
  constructor(
    private readonly request: APIRequestContext,
    private readonly baseUrl: string,
  ) {}

  async get(
    path: string,
    options: RequestOptions = {},
  ): Promise<APIResponse> {
    return this.request.get(this.buildUrl(path), {
      headers: options.headers,
      params: options.query,
    });
  }

  async post<TBody>(
    path: string,
    options: BodyRequestOptions<TBody>,
  ): Promise<APIResponse> {
    return this.request.post(this.buildUrl(path), {
      data: options.data,
      headers: options.headers,
      params: options.query,
    });
  }

  async put<TBody>(
    path: string,
    options: BodyRequestOptions<TBody>,
  ): Promise<APIResponse> {
    return this.request.put(this.buildUrl(path), {
      data: options.data,
      headers: options.headers,
      params: options.query,
    });
  }

  async patch<TBody>(
    path: string,
    options: BodyRequestOptions<TBody>,
  ): Promise<APIResponse> {
    return this.request.patch(this.buildUrl(path), {
      data: options.data,
      headers: options.headers,
      params: options.query,
    });
  }

  async delete(
    path: string,
    options: RequestOptions = {},
  ): Promise<APIResponse> {
    return this.request.delete(this.buildUrl(path), {
      headers: options.headers,
      params: options.query,
    });
  }

  async expectSuccessfulResponse(
    response: APIResponse,
  ): Promise<void> {
    await expect(
      response,
      `Expected a successful API response but received ${response.status()}`,
    ).toBeOK();
  }

  async parseJson<TResponse>(
    response: APIResponse,
  ): Promise<TResponse> {
    return response.json() as Promise<TResponse>;
  }

  private buildUrl(path: string): string {
    const normalizedBaseUrl = this.baseUrl.replace(/\/$/, '');
    const normalizedPath = path.startsWith('/')
      ? path
      : `/${path}`;

    return `${normalizedBaseUrl}${normalizedPath}`;
  }
}