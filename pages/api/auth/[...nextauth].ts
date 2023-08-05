import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getClientIp } from 'request-ip';
import { LoginResponse, SessionData } from 'types/auth';

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    return NextAuth(req, res, {
        providers: [
            CredentialsProvider({
                name: 'Credentials',
                credentials: {
                    username: {},
                    password: {},
                },
                async authorize(credentials, req) {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
                        method: 'POST',
                        body: JSON.stringify({
                            username: credentials?.username,
                            password: credentials?.password,
                        }),
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                            'X-Forwarded-For': getClientIp(req) ?? '',
                        },
                    });

                    const user = await res.json();

                    return res.ok && user ? user : null;
                },
            }),
        ],
        callbacks: {
            async signIn() {
                // Rate limiting can be implemented here, returning false will
                // show default error response returning a string (URL) will
                // perform a redirect
                // Will be called after `authorize`
                // Redirecting to error page will cancel the auth flow

                return true;
            },
            async jwt({ token, user }) {
                // Called while creating a new JWT token
                // Login and session status routes/functions will trigger this
                // {user, account, profile, isNewUser} will be passed on login
                // request only and only token will be passed afterwards

                console.log('In JWT callback!');
                console.log({ token, user });

                const res = user as unknown as LoginResponse;
                token.user = res.user;
                token.token = res.token;

                return token;
            },
            async session({ session, user, token }) {
                console.log('In session callback!');
                console.log({ session, user, token });

                session.user = token.user as SessionData;
                session.token = token.token as string;

                return session;
            },
        },
    });
}
