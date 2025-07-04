/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client';

import { FC, MouseEventHandler, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useClickOutside } from '@mantine/hooks';
import Dropdown from '../Dropdown';
// Assets
import avatar from 'assets/icons/avatar.jpg';
import coin from 'assets/icons/coin-32.png';
import background from 'assets/images/covers/shooting-stars-dark-sky-girl.png';
import Badge from './Badge';
import items from './items';
import { useAuth } from 'hooks';
import { signOut } from 'next-auth/react';
import BecomeAuthorLink from './BecomeAuthorLink';

const Profile: FC = () => {
    const { user } = useAuth();

    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(false));

    const handleTriggerClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();

        setOpened((current) => !current);
    };

    return (
        <li ref={ref} className="relative">
            <button
                type="button"
                onClick={handleTriggerClick}
                className="relative items-center justify-center hidden w-10 h-10 bg-gray-300 border border-gray-200 rounded-full cursor-pointer lg:flex"
            >
                {user?.profile.avatar ? (
                    <img
                        src={user.profile.avatar}
                        height={40}
                        width={40}
                        className="object-cover rounded-full"
                        alt={user.name}
                    />
                ) : (
                    <Image src={avatar} height={40} className="rounded-full" alt="Avatar" />
                )}
                <span className="absolute top-0 right-0 block w-2.5 h-2.5 bg-red-500 rounded-full b-2" />
            </button>

            <Dropdown
                opened={opened}
                chevronClassName="z-[-1]"
                className="lg:min-w-[18rem] flex flex-col space-y-2.5 mt-6 lg:m-0"
            >
                {/* Profile */}
                <div
                    className="relative !mt-0 overflow-hidden bg-cover bg-center mx-2.5 rounded-xl lg:mx-0 lg:rounded-none lg:rounded-t-xl"
                    style={{ backgroundImage: `url('${background.src}')` }}
                >
                    <Image
                        src={background}
                        fill
                        className="absolute z-[-1] top-0 left-0 h-full w-full object-cover object-center"
                        alt="Cover Photo"
                    />
                    <div className="flex items-center justify-between space-x-2.5 group p-5 cursor-pointer select-none transition-colors bg-black/10 hover:bg-black/40 duration-300 h-full">
                        <div className="flex-grow-0 flex-shrink-0 overflow-hidden rounded-full">
                            <Image src={avatar} height={40} className="rounded-full" alt="Avatar" />
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col text-shadow">
                                <span className="font-bold text-white">{user!.name}</span>
                                <span className="text-xs text-gray-200">Sword Wielder</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Coins */}
                <div className="flex justify-between items-center space-x-2.5 px-5 select-none">
                    <div className="flex space-x-1.5">
                        <Image src={coin} height={24} className="object-contain" alt="Coin" />
                        <span className="text-lg font-bold">3.9K</span>
                    </div>
                    <Link
                        href="/shop/coins"
                        className="inline-flex items-center justify-center h-8 px-3 text-xs font-bold tracking-wide text-white uppercase transition-colors bg-blue-600 rounded-full hover:bg-blue-500"
                    >
                        Get More
                    </Link>
                </div>

                <div className="flex flex-col">
                    <BecomeAuthorLink />
                    {items.map(({ label, url, badge }, idx) => {
                        return (
                            <Link
                                href={url}
                                className="relative flex items-center px-5 py-2 space-x-2 transition-colors hover:bg-gray-100"
                                key={idx}
                            >
                                <span className="lg:font-medium">{label}</span>

                                {badge && <Badge>{badge}</Badge>}
                            </Link>
                        );
                    })}

                    <a
                        onClick={() => signOut()}
                        role="link"
                        className="flex items-center px-5 py-3 space-x-2 text-red-600 transition-colors cursor-pointer hover:bg-red-100 lg:rounded-b-xl"
                    >
                        <span className="font-medium">Logout</span>
                    </a>
                </div>
            </Dropdown>
        </li>
    );
};

export default Profile;
