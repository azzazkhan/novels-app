'use client';

import { FC, useEffect } from 'react';
import type { Author, Profile, User } from 'types/resources';
import type { AxiosResponse } from 'axios';
import { useAppDispatch, useAppSelector, useAxios } from 'hooks';
import { setAuthRefresh, setAuthStatus, setUser } from 'store/slices';
import { useSession } from 'next-auth/react';

interface AuthState extends User {
    profile: Profile;
    author?: Author;
}

const AuthMiddleware: FC = () => {
    const axios = useAxios();
    const { data: session } = useSession();

    const dispatch = useAppDispatch();
    const status = useAppSelector((state) => state.auth.status);
    const user = useAppSelector((state) => state.auth.user);

    // Only rerun the effect on initial load or when the user is logged in
    // eslint-disable-next-line consistent-return
    useEffect(() => {
        // If we don't have a session then we cannot fetch the profile
        if (!session?.token) {
            dispatch(setAuthStatus('success'));
            return;
        }

        // If user is already fetched or a request is already underway then
        // do not sent additional requests
        if (user || status === 'loading') return;

        dispatch(setAuthStatus('loading'));
        dispatch(setAuthRefresh(undefined));

        axios
            .get('v1/profile?author=true')
            .then((res: AxiosResponse<AuthState>) => {
                dispatch(setAuthStatus('success'));
                dispatch(setUser(res.data));
            })
            .catch(() => dispatch(setAuthStatus('error')));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, user, session]);

    return null;
};

export default AuthMiddleware;
