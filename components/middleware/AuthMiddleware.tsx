'use client';

import { FC, useEffect } from 'react';
import type { Author, Profile, User } from 'types/resources';
import type { AxiosResponse } from 'axios';
import { useAppDispatch, useAppSelector, useAxios } from 'hooks';
import { setAuthStatus, setUser } from 'store/slices';
import { signOut, useSession } from 'next-auth/react';

interface AuthState extends User {
    profile: Profile;
    author?: Author;
}

const AuthMiddleware: FC = () => {
    const axios = useAxios();
    const { data: session, status: sessionStatus } = useSession();

    const dispatch = useAppDispatch();
    const status = useAppSelector((state) => state.auth.status);
    const user = useAppSelector((state) => state.auth.user);

    // Only re-run the effect on initial load or when the user is logged in
    // eslint-disable-next-line consistent-return
    useEffect(() => {
        // Note: The auth loading state should be dependent on `sessionStatus`
        //       before relying on the store `auth.status` value because the
        //       session token is first loaded by NextAuth which we'll use to
        //       send the API request and we need to consider the loading of
        //       NextAuth session as well.
        //       This scenario is handled in the `useAuth` hook's `loading`
        //       return value.

        // We'll depend on the NextAuth's provided status before confirming the
        // actual token. If the user is unauthenticated we'll mark the process
        // as completed because there's nothing to fetch.
        if (sessionStatus === 'unauthenticated' || !session?.token) {
            dispatch(setAuthStatus('success'));
            return;
        }

        // If user is already fetched or a request is already underway then
        // do not sent additional requests
        if (user || status === 'loading') return;

        dispatch(setAuthStatus('loading'));

        axios
            .get('v1/profile?author=true')
            .then((res: AxiosResponse<AuthState>) => {
                dispatch(setAuthStatus('success'));
                dispatch(setUser(res.data));
            })
            .catch(() => {
                dispatch(setAuthStatus('error'));

                // If token is defined and we cannot fetch the session then it
                // means that either the token is expired or the user record
                // is updated/deleted form the server. Signing out the user
                signOut({ callbackUrl: '/login', redirect: true }).catch(() => {});
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, user, session, sessionStatus]);

    return null;
};

export default AuthMiddleware;
