'use client';

import { FC } from 'react';
import Link from 'next/link';
import Profile from './Profile';
import ThemeToggler from './ThemeToggler';
import { Input } from 'components/ui/input';
import Hamburger from './Hamburger';
import Notifications from './Notifications';
import { Search } from 'lucide-react';

const Header: FC = () => {
    return (
        <header className="grid flex-shrink-0 w-full h-16 grid-cols-10 border-b border-gray-200 shadow dark:border-gray-700 dark:bg-gray-900">
            <div className="flex items-center col-span-3 px-4 space-x-4 lg:col-span-2">
                <Hamburger />
                <Link href="/dashboard" className="text-2xl font-bold text-primary dark:text-white">
                    {process.env.NEXT_PUBLIC_APP_NAME}
                </Link>
            </div>
            <div className="flex items-center col-span-7 px-4 space-x-4 lg:col-span-8">
                <div className="flex items-center justify-center flex-1 h-full">
                    <div className="relative items-center hidden w-full max-w-xl space-x-4 md:flex">
                        <Search className="absolute w-4 h-4 text-gray-500 transform -translate-y-1/2 top-1/2 left-8" />
                        <Input
                            className="pl-10 pr-4 rounded-full h-11"
                            placeholder="Search for items and settings"
                        />
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <Notifications />
                    <ThemeToggler />
                    <Profile />
                </div>
            </div>
        </header>
    );
};

export default Header;
