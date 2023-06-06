import type { FC } from 'react';
import Link from 'next/link';

const Home: FC = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen space-y-10">
            <h1 className="text-4xl font-bold">Hello &mdash; Next!</h1>

            <Link
                href="/about"
                role="button"
                className="flex items-center justify-center h-10 px-6 font-medium transition-colors bg-gray-300 rounded hover:bg-gray-400"
            >
                About
            </Link>
        </div>
    );
};

export default Home;
