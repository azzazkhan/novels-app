'use client';

import type { FC } from 'react';
import Link from 'next/link';
import { useAuth } from 'hooks';

const BecomeAuthorLink: FC = () => {
    const { user } = useAuth();

    if (user?.author)
        return (
            <Link
                href="/dashboard"
                className="relative flex items-center px-5 py-2 space-x-2 transition-colors hover:bg-gray-100"
            >
                <span className="lg:font-medium">Author&apos;s Dashboard</span>
            </Link>
        );

    return (
        <Link
            href="/dashboard"
            className="relative overflow-hidden transition-colors bg-center bg-cover group hover:bg-gray-100"
        >
            <div className="flex items-center px-5 py-3 lg:font-medium">
                <span>Become an author</span>
            </div>
        </Link>
    );
};

export default BecomeAuthorLink;
