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

type Item = { icon: LucideIcon; label: string; active?: boolean };
const items: Item[] = [
    { icon: LayoutDashboard, label: 'Home', active: true },
    { icon: BookOpen, label: 'My Novels' },
    { icon: Heart, label: 'Reactions' },
    { icon: CircleDollarSign, label: 'Earnings' },
    { icon: User2, label: 'Author Profile' },
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
                        {items.map(({ icon: Icon, label, active }, idx) => {
                            return (
                                <a
                                    className={classNames({
                                        'flex items-center w-full h-12 pl-6 pr-4 space-x-2 rounded-r-full transition-colors cursor-pointer':
                                            true,
                                        'font-bold text-white bg-primary dark:bg-primary/20':
                                            active,
                                        'dark:text-gray-400 hover:bg-primary/20 hover:text-blue-800 dark:hover:bg-primary/10 dark:hover:text-white':
                                            !active,
                                    })}
                                    key={idx}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span className="font-semibold">{label}</span>
                                </a>
                            );
                        })}
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
};

export default Sidebar;
