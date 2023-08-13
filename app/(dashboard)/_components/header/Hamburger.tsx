'use client';

import { FC, MouseEventHandler } from 'react';
import classNames from 'classnames';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useAppDispatch, useAppSelector } from 'hooks';
import { toggleDashboardSidebar } from 'store/slices';

const Hamburger: FC = () => {
    const dispatch = useAppDispatch();
    const sidebarOpened = useAppSelector((state) => state.dashboard.navOpened);

    const handleHamburgerClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();

        dispatch(toggleDashboardSidebar());
    };

    return (
        <button
            type="button"
            onClick={handleHamburgerClick}
            className={classNames({
                'text-black dark:text-gray-100 h-10 w-10 inline-flex items-center justify-center rounded-full transition-colors flex-shrink-0 md:hidden':
                    true,
                'hover:bg-gray-100 dark:hover:bg-gray-800': !sidebarOpened,
                'bg-gray-200 dark:bg-gray-700': sidebarOpened,
            })}
        >
            {sidebarOpened ? <XMarkIcon className="w-5 h-5" /> : <Bars2Icon className="w-5 h-5" />}
        </button>
    );
};

export default Hamburger;
