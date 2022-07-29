import {authInstance} from "../shares/axios";
import { Meta } from "./Base";

export interface AuthRequest {
    username: string,
    password: string,
}

export interface AuthResponse {
    meta: Meta,
    data: AuthData,
}

export interface AuthData {
    access_token: string,
    refresh_token: string,
}
export const signin = async (req: AuthRequest): Promise<AuthResponse> =>
    (
        await authInstance.post(`remembrance-auth/v1/auth`, req)
    ).data;
