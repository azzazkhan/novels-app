import type { Role, User } from './resources';

export interface SessionData {
    uuid: string;
    role: Role;
}

export interface LoginResponse {
    token: string;
    user: Pick<User, 'id' | 'uuid' | 'name' | 'username' | 'email' | 'role'> & {
        avatar: Nullable<string>;
    };
}
