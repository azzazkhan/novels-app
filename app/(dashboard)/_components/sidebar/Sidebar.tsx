'use client';

import { FC } from 'react';

const Sidebar: FC = () => {
    return (
        <div className="col-span-3 lg:col-span-2">
            <div className="w-full h-full border-r border-gray-200 dark:border-gray-700">
                Sidebar
            </div>
        </div>
    );
};

export default Sidebar;
