import type { LoginResponse } from 'types/auth';
import type { User } from 'types/resources';
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getClientIp } from 'request-ip';
import { AxiosError } from 'axios';
import { client } from 'lib/axios';

type Token = { sub: string; token: string; user: Pick<User, 'id' | 'uuid' | 'role'> };

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {},
                password: {},
            },
            async authorize(credentials, req) {
                try {
                    const response = await client.post(
                        'login',
                        {
                            username: credentials?.username,
                            password: credentials?.password,
                        },
                        { headers: { 'X-Forwarded-For': getClientIp(req) ?? '' } }
                    );

                    return response.data;
                } catch (err) {
                    const error = err as AxiosError;

                    if (
                        error.response &&
                        error.response.data &&
                        error.response.headers['content-type'] === 'application/json'
                    ) {
                        const res = error.response.data as APIError;
                        throw new Error(res.message || error.response.statusText);
                    }

                    return null;
                }
            },
        }),
    ],
    pages: {
        signIn: 'login',
        signOut: 'logout',
    },
    callbacks: {
        async signIn() {
            // Rate limiting can be implemented here, returning false will
            // show default error response returning a string (URL) will
            // perform a redirect
            // Will be called after `authorize`
            // Redirecting to error page will cancel the auth flow

            return true;
        },
        async jwt({ token, user, trigger }) {
            // Called while creating a new JWT token
            // Login and session status routes/functions will trigger this
            // {user, account, profile, isNewUser} will be passed on login
            // request only and only token will be passed afterwards

            if (trigger === 'signIn') {
                const data = user as unknown as LoginResponse;
                const { id, uuid, role } = data.user;
                return { sub: uuid, token: data.token, user: { id, uuid, role } } as Token;
            }

            return token;
        },
        async session({ session, token: jwtToken }) {
            // Token will be the value returned from the `jwt` callback
            // Session will be the values exposed to the client.
            // session = { expires: string; ...customData }

            const { token, user } = jwtToken as Token;
            const { role, uuid } = user;
            session = { expires: session.expires, token, user: { role, uuid } };

            return session;
        },
    },
};

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    return NextAuth(req, res, authOptions);
}
