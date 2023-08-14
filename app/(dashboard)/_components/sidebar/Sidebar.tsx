'use client';

import { FC } from 'react';
import { ScrollArea } from 'components/ui/scroll-area';
import {
    BookOpen,
    CircleDollarSign,
    Heart,
    LayoutDashboard,
    LucideIcon,
    User2,
} from 'lucide-react';
import classNames from 'classnames';
import { useAppSelector } from 'hooks';
import NavItem from './NavItem';

type Item = { icon: LucideIcon; label: string; href?: string };
const items: Item[] = [
    { icon: LayoutDashboard, label: 'Home', href: '/' },
    { icon: BookOpen, label: 'My Novels', href: '/novels' },
    { icon: Heart, label: 'Reactions', href: '/reactions' },
    { icon: CircleDollarSign, label: 'Earnings', href: '/earnings' },
    { icon: User2, label: 'Author Profile', href: '/profile' },
];

const Sidebar: FC = () => {
    const sidebarOpened = useAppSelector((state) => state.dashboard.navOpened);

    return (
        <div
            className={classNames({
                'fixed top-[calc(4rem-1px)] left-0 z-10 w-[min(100%,19rem)] h-[calc(100vh-calc(4rem+1px))] md:relative md:-top-px md:w-auto md:h-[calc(100%+1px)] md:col-span-3 lg:col-span-2 dark:bg-gray-900 shadow max-md:transition-transform max-md:transform':
                    true,
                'max-md:-translate-x-full': !sidebarOpened,
                'max-md:translate-x-0': sidebarOpened,
            })}
        >
            <div className="w-full h-full py-4 border-r border-gray-200 dark:border-gray-700">
                <ScrollArea className="w-full h-full pr-4">
                    <div className="flex flex-col space-y-2">
                        {items.map(({ icon, label, href }, idx) => {
                            return <NavItem icon={icon} label={label} href={href} key={idx} />;
                        })}
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
};

export default Sidebar;
