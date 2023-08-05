import { FC } from 'react';
import { Input } from '../_client-components';
import Link from 'next/link';

const Form: FC = () => {
    return (
        <div className="dark">
            <form action="" className="flex flex-col space-y-4">
                <Input
                    name="username"
                    minLength={3}
                    maxLength={100}
                    placeholder="Enter username or email address"
                    required
                />
                <Input
                    name="password"
                    type="password"
                    maxLength={255}
                    placeholder="Enter password"
                    required
                    togglePassword
                />

                <div className="flex items-center justify-between pt-4 space-x-1">
                    <button
                        type="submit"
                        className="relative inline-flex items-center justify-center h-10 px-8 font-bold text-white transition border-2 rounded-full max-w-max group/btn bg-primary border-primary "
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
            </form>
        </div>
    );
};

export default Form;
