import type { FC } from 'react';
import Link from 'next/link';

const About: FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center w-full space-y-10">
            <h1 className="text-4xl font-bold">About Next!</h1>

            <Link
                href="/"
                role="button"
                className="h-10 flex justify-center items-center px-6 bg-gray-300 font-medium rounded hover:bg-gray-400 transition-colors"
            >
                Home
            </Link>
        </div>
    );
};

export default About;
