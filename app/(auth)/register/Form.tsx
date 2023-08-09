/* eslint-disable consistent-return */
'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from '@mantine/form';
import { AxiosError } from 'axios';
import { z } from 'zod';
import { getErrorFactory, getErrorMessage, getValidationMessage, isValidationError } from 'utils';
import { useAxios } from 'hooks';
import { Input } from '../_client-components';
import classNames from 'classnames';

type SignUpData = { name: string; username: string; email: string; password: string };

const Form: FC = () => {
    const axios = useAxios();
    const router = useRouter();

    const [status, setStatus] = useState<AsyncState>();
    const [error, setError] = useState<string>();
    const disabled = status === 'loading' || status === 'success';

    const { onSubmit, getInputProps, setFieldValue, setFieldError } = useForm<SignUpData>({
        validate: {
            name: getValidationMessage((v) => ({
                'Name must be a valid string!': typeof v === 'string',
                'Name is required!': !!v,
                'Name must contain at least 2 characters!': v.length >= 2,
                'Name must no longer than 30 characters!': v.length <= 30,
                'Name contains invalid characters!':
                    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
            })),
            username: getValidationMessage((v) => ({
                'Username must be a valid string!': typeof v === 'string',
                'Username is required!': !!v,
                'Username must contain at least 3 characters!': v.length >= 3,
                'Username must no longer than 15 characters!': v.length <= 15,
                'Please enter a valid username!': /^(?=.*[a-z])[a-z][a-z0-9_]{3,15}$/,
            })),
            email: getValidationMessage((v) => ({
                'Email must be a valid string!': typeof v === 'string',
                'Email is required!': !!v,
                'Please enter a valid email!': z.string().min(6).email().safeParse(v).success,
                'Email must no longer than 100 characters!': v.length <= 100,
            })),
            password: getValidationMessage((v) => ({
                'Password should be a valid string!': typeof v === 'string',
                'Password is required!': !!v,
                'Password must contain at least 8 characters!': v.length >= 8,
                'Password must contain 50 characters at most!': v.length <= 50,
                'Password must contain a lowercase letter!': /[a-z]/,
                'Password must contain an uppercase letter!': /[A-Z]/,
                'Password must contain a number!': /[0-9]/,
                'Password must contain a special character': /[^A-z0-9]/,
            })),
        },
    });

    const handleSubmission = (data: SignUpData) => {
        setStatus('loading');
        setError(undefined);

        console.log(data);

        axios
            .post('register', data)
            .then(() => {
                setStatus('success');

                router.push('/login');
            })
            .catch((error: AxiosError<APIError>) => {
                setStatus('error');
                if (!isValidationError(error)) {
                    console.log('Not a validation error!');
                    return setError(getErrorMessage(error));
                }

                console.log('Validation error!');
                console.log({ data: error.response?.data });

                const errors = getErrorFactory<keyof SignUpData>(error.response!.data);
                console.log({ username: errors('username') });

                setFieldError('name', errors('name'));
                setFieldError('username', errors('username'));
                setFieldError('email', errors('email'));
                setFieldError('password', errors('password'));
            })
            .finally(() => setFieldValue('password', ''));
    };

    return (
        <div className="dark">
            <form onSubmit={onSubmit(handleSubmission)} className="flex flex-col space-y-4">
                {error && <p className="!-mt-4 font-semibold text-red-500 mx-2 !mb-2">{error}</p>}
                {status === 'success' && (
                    <p className="!-mt-4 font-semibold text-emerald-600 mx-2 !mb-2">
                        Registration successful! Please sign in to your account.
                    </p>
                )}
                <Input
                    name="name"
                    placeholder="Enter your name"
                    disabled={disabled}
                    {...getInputProps('name')}
                    required
                />

                <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    disabled={disabled}
                    {...getInputProps('email')}
                    required
                />

                <Input
                    name="username"
                    placeholder="Enter your username"
                    hint="Username must begin with a letter and should only contain letters, number and underscores!"
                    disabled={disabled}
                    {...getInputProps('username')}
                    required
                />

                <Input
                    name="password"
                    type="password"
                    disabled={disabled}
                    placeholder="Enter password"
                    {...getInputProps('password')}
                    required
                    togglePassword
                />

                <div className="flex items-center justify-between pt-4 space-x-1">
                    <button
                        type="submit"
                        disabled={disabled}
                        className={classNames({
                            'relative inline-flex items-center justify-center h-10 px-8 font-bold transition-colors rounded-full max-w-max':
                                true,
                            'text-white bg-primary hover:bg-blue-500': !disabled,
                            'bg-gray-500 text-black': disabled,
                        })}
                    >
                        Sign Up
                    </button>
                    <Link
                        href="/login"
                        onClick={(event) => disabled && event.preventDefault()}
                        className={classNames({
                            'relative inline-flex items-center justify-center h-10 px-2 font-bold rounded-full max-w-max group/btn':
                                true,
                            'text-white hover:underline': !disabled,
                            'text-gray-500 pointer-events-none': disabled,
                        })}
                    >
                        Sign in instead
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Form;
