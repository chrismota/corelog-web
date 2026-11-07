export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface Organization {
  id: string;
  name: string;
  slug: string;
}

export interface AuthenticatedUser {
  id: number;
  name: string;
  email: string;
  organization: Organization;
}

export interface ApiResource<T> {
  data: T;
}
