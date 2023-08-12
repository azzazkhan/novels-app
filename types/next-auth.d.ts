import { SessionData } from './auth';
import { User } from './resources';

declare module 'next-auth' {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the
     * `SessionProvider` React Context.
     */
    interface Session {
        user: SessionData;
        token: string;
    }
}

declare module 'next-auth/jwt' {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
        sub: string;
        token: string;
        user: Pick<User, 'id' | 'uuid' | 'role'>;
    }
}
