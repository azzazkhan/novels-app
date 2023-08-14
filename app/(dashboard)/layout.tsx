import type { FC, ReactNode } from 'react';

import 'styles/global.css';
import { Header, Sidebar } from './_components';

interface Props {
    children?: ReactNode;
}

const DashboardLayout: FC<Props> = ({ children }) => {
    return (
        <div className="flex flex-col w-full h-screen dark:bg-gray-800">
            <Header />
            <div className="grid flex-1 grid-cols-10">
                <Sidebar />
                <div className="col-span-7 lg:col-span-8">{children}</div>
            </div>
        </div>
    );
};

export default DashboardLayout;
