'use client';

import { useCallback, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useAppSelector } from './redux.hook';

interface Props {
    authOnly?: boolean;
}

export const useAuth = (props: Props = {}) => {
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
        const { authOnly } = props;
        const url = encodeURIComponent(pathname + (searchParams ? `?${searchParams}` : ''));

        if (authOnly && !loading && !user) return router.push(`/login?redirect=${url}`);
    }, [router, pathname, searchParams, loading, user, props]);

    return { user, loading, logout };
};
