'use client';

import { FC } from 'react';

const Dashboard: FC = () => {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <header className="w-full h-16 bg-blue-500" />
            <div className="grid flex-1 grid-cols-10">
                <div className="col-span-2 bg-green-500" />
            </div>
        </div>
    );
};

export default Dashboard;
