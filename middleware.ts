import { NextResponse } from 'next/server';
import { withAuth, NextMiddlewareWithAuth, NextAuthMiddlewareOptions } from 'next-auth/middleware';

const guestOnlyRoutes = ['/login', '/register', '/forgot-password'];
const protectedRoutes = ['/profile', '/admin', '/dashboard'];

const handler: NextMiddlewareWithAuth = (request) => {
    const { token } = request.nextauth;
    const { pathname } = request.nextUrl;

    console.log('Middleware being executed!');

    // Redirect guests to login page when trying to access an auth protected route
    if (!token && protectedRoutes.find((route) => pathname.startsWith(route)))
        return NextResponse.redirect(new URL('/login', request.url));

    // Redirect authenticated users to homepage when trying to access guest only
    // routes
    if (token && guestOnlyRoutes.find((route) => pathname.startsWith(route)))
        return NextResponse.redirect(new URL('/', request.url));

    // Redirect non-admin users to homepage when trying to access admin panel
    if (token && token.user.role !== 'admin' && pathname.startsWith('/admin'))
        return NextResponse.redirect(new URL('/', request.url));

    return NextResponse.next();
};

const options: NextAuthMiddlewareOptions = {
    pages: {
        signIn: 'login',
        signOut: 'logout',
    },
};

export default withAuth(handler, options);

export const config = {
    matcher: [
        '/profile/:path*',
        '/admin/:path*',
        '/dashboard/:path*',
        '/(login|register|forgot-password)',
    ],
};
