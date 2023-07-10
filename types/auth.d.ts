import type { Role } from './resources';

export interface SessionData {
    id: string;
    uuid: string;
    role: Role;
    email_verified_at: Nullable<string>;
}

export interface LoginResponse {
    token: string;
    user: SessionData;
}
