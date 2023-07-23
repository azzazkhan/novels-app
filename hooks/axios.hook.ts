'use client';

import { axios } from 'lib/axios';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const useAxios = () => {
    const { data: session } = useSession();

    useEffect(() => {
        const interceptor = axios.interceptors.request.use((config) => {
            if (!config.headers.Authorization && session?.token)
                config.headers.Authorization = `Bearer ${session.token}`;

            return config;
        });

        () => axios.interceptors.request.eject(interceptor);
    }, [session]);

    return axios;
};

export default useAxios;
