import Link from 'next/link';
import { FC } from 'react';

const JoinBtn: FC = () => {
    return (
        <li>
            <Link
                href="/login"
                className="relative inline-flex items-center justify-center h-10 px-6 text-sm font-bold text-white transition border-2 rounded-full max-w-max group/btn bg-primary border-primary ml-2.5 lg:ml-0"
            >
                Join Now
            </Link>
        </li>
    );
};

export default JoinBtn;
