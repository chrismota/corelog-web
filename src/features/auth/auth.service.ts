import { api } from "@/lib/api";
import type {
  ApiResource,
  AuthenticatedUser,
  AuthResponse,
  LoginCredentials,
} from "./types";

export const authService = {
  async login(credentials: LoginCredentials) {
    const { data } = await api.post<AuthResponse>("/auth/login", credentials);

    localStorage.setItem("corelog_token", data.access_token);

    return data;
  },

  async logout() {
    try {
      await api.post("/auth/logout");
    } finally {
      localStorage.removeItem("corelog_token");
    }
  },

  async me(): Promise<AuthenticatedUser> {
    const { data } = await api.get<ApiResource<AuthenticatedUser>>("/auth/me");

    return data.data;
  },
};
