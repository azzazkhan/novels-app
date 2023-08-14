/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import React, { FC, MouseEventHandler } from 'react';
import { LucideIcon } from 'lucide-react';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface Props {
    icon: LucideIcon;
    label: string;
    href?: string;
}

const NavItem: FC<Props> = ({ icon: Icon, label, href }) => {
    href = href ? (href === '/' ? '/dashboard' : `/dashboard${href}`) : href;

    const pathname = usePathname();
    const active = pathname === href;

    const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
        event.preventDefault();
    };

    const Component = href ? Link : 'a';
    const props = href ? { href } : { onClick: handleClick };

    return (
        // @ts-ignore
        <Component
            {...props}
            className={classNames({
                'flex items-center w-full h-12 pl-6 pr-4 space-x-2 rounded-r-full transition-colors cursor-pointer':
                    true,
                'font-bold text-white bg-primary shadow dark:bg-primary/20': active,
                'dark:text-gray-400 hover:bg-primary/20 hover:text-blue-800 dark:hover:bg-primary/10 dark:hover:text-white':
                    !active,
            })}
        >
            <Icon className="w-4 h-4" />
            <span className="font-semibold">{label}</span>
        </Component>
    );
};

export default NavItem;
