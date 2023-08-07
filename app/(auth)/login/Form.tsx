'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import { z } from 'zod';
import { useForm } from '@mantine/form';
import { Input, SocialIcons } from '../_client-components';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

type LoginData = { username: string; password: string };

const Form: FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [status, setStatus] = useState<AsyncState>();
    const [error, setError] = useState<string>();

    const { onSubmit, getInputProps, setFieldValue } = useForm<LoginData>({
        validate: {
            username: (value) =>
                z.string().min(1).safeParse(value).success
                    ? null
                    : 'Please enter your username or email address!',
            password: (value) =>
                z.string().min(1).safeParse(value).success ? null : 'Please enter your password!',
        },
    });

    const handleSubmission = (data: LoginData) => {
        setStatus('loading');
        setError(undefined);

        const { username, password } = data;
        const callbackUrl = decodeURIComponent(searchParams?.get('redirectTo') || '') || '/';

        signIn('credentials', { username, password, callbackUrl, redirect: false })
            .then((res) => {
                if (res?.ok) {
                    setStatus('success');

                    router.push(res.url || '/');
                    return;
                }

                setFieldValue('password', '');
                setStatus('error');
                setError(res?.error || 'Unknown error!');
            })
            .catch(() => {
                setFieldValue('password', '');
                setError('An unknown error occurred!');
                setStatus('error');
            });
    };

    return (
        <div className="dark">
            <form onSubmit={onSubmit(handleSubmission)} className="flex flex-col space-y-4">
                {error && <p className="!-mt-4 font-semibold text-red-500 mx-2 !mb-2">{error}</p>}
                {status === 'success' && (
                    <p className="!-mt-4 font-semibold text-emerald-600 mx-2 !mb-2">
                        Login successful, you&apos;ll be redirect shortly
                    </p>
                )}
                <Input
                    name="username"
                    placeholder="Enter username or email address"
                    disabled={status === 'loading'}
                    {...getInputProps('username')}
                    required
                />

                <Input
                    name="password"
                    type="password"
                    disabled={status === 'loading'}
                    placeholder="Enter password"
                    {...getInputProps('password')}
                    required
                    togglePassword
                />

                <div className="flex items-center justify-between pt-4 space-x-1">
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="relative inline-flex items-center justify-center h-10 px-8 font-bold text-white transition border-2 rounded-full max-w-max group/btn bg-primary border-primary"
                    >
                        Sign In
                    </button>

                    <Link
                        href="/register"
                        className="relative inline-flex items-center justify-center h-10 px-2 font-bold text-black rounded-full max-w-max group/btn dark:text-white hover:underline "
                    >
                        Sign up instead
                    </Link>
                </div>

                <SocialIcons />
            </form>
        </div>
    );
};

export default Form;
