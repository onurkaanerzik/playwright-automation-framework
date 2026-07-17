import { ApiClient } from '../clients/ApiClient';
import {
  ApiUser,
  CreateUserRequest,
  CreateUserResponse,
} from '../models/user-api.model';

export class UsersApi {
  constructor(private readonly apiClient: ApiClient) {}

  async getUsers(): Promise<ApiUser[]> {
    const response = await this.apiClient.get('/users');

    await this.apiClient.expectSuccessfulResponse(response);

    return this.apiClient.parseJson<ApiUser[]>(response);
  }

  async getUserById(userId: number): Promise<ApiUser> {
    const response = await this.apiClient.get(`/users/${userId}`);

    await this.apiClient.expectSuccessfulResponse(response);

    return this.apiClient.parseJson<ApiUser>(response);
  }

  async createUser(
    user: CreateUserRequest,
  ): Promise<CreateUserResponse> {
    const response = await this.apiClient.post('/users', {
      data: user,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    await this.apiClient.expectSuccessfulResponse(response);

    return this.apiClient.parseJson<CreateUserResponse>(response);
  }
}