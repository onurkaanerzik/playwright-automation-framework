export interface ApiUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface CreateUserRequest {
  name: string;
  username: string;
  email: string;
}

export interface CreateUserResponse extends CreateUserRequest {
  id: number;
}