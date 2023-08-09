'use client';

import { useCallback, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useAppSelector } from './redux.hook';
import { useSession } from 'next-auth/react';

interface Props {
    authOnly?: boolean;
    guestOnly?: boolean;
}

export const useAuth = (props: Props = {}) => {
    const { status: sessionStatus } = useSession();

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // TODO: Implement logout functionality
    const logout = useCallback(() => {}, []);

    const loading = useAppSelector(
        (state) => !state.auth.status || state.auth.status === 'loading'
    );
    const user = useAppSelector((state) => state.auth.user);

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (sessionStatus === 'loading') return () => {};

        const { authOnly, guestOnly } = props;
        if (guestOnly && sessionStatus === 'authenticated') return router.push('/');

        if (loading) return () => {};
        const url = encodeURIComponent(pathname + (searchParams ? `?${searchParams}` : ''));

        if (authOnly && !user) return router.push(`/login?redirect=${url}`);
    }, [router, pathname, searchParams, loading, user, props, sessionStatus]);

    return { user, loading: loading || sessionStatus === 'loading', logout };
};
