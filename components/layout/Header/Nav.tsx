'use client';

import React, { FC } from 'react';
import { faBarsStaggered, faCompass, faPenNib } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import Settings from './widgets/Settings';
import Profile from './widgets/Profile';
import Search from './widgets/Search';
import NavItem from './NavItem';
import { useAppSelector } from 'hooks';

const Nav: FC = () => {
    const opened = useAppSelector((state) => state.layout.navbarOpened);

    return (
        <div
            className={classNames(
                'fixed right-0 flex-1 w-full h-full bg-black/20 top-16 transition-all duration-500 backdrop-blur-md flex justify-end',
                'lg:static lg:bg-transparent lg:transform-none lg:!opacity-100 lg:!visible lg:backdrop-blur-none',
                { 'visible opacity-100': opened, 'invisible opacity-0': !opened }
            )}
        >
            <nav
                className={classNames(
                    'flex flex-col h-full bg-white transition transform w-full sm:max-w-sm duration-300 shadow pt-2.5 pb-5',
                    { 'translate-x-full': !opened, 'translate-x-0': opened },
                    'lg:flex-row lg:items-center lg:justify-between lg:flex-1 lg:transform-none lg:transition-none lg:min-w-[unset] lg:max-w-[unset] lg:ml-[auto] lg:shadow-none lg:p-0'
                )}
            >
                <ul className="items-center hidden space-x-2 lg:flex">
                    <NavItem href="/" icon={faCompass}>
                        Browse
                    </NavItem>
                    <NavItem href="/rankings" icon={faBarsStaggered}>
                        Rankings
                    </NavItem>
                    <NavItem href="/create" icon={faPenNib}>
                        Create
                    </NavItem>
                </ul>

                <ul className="flex flex-col lg:flex-row lg:items-center lg:space-y-0 lg:space-x-2.5">
                    <Search className="hidden lg:flex" />
                    <Settings />
                    <Profile />
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
