import type { FC, ReactNode } from 'react';

import 'styles/global.css';
import { Header, Sidebar } from './_components';
import { Container } from 'components/common';

interface Props {
    children?: ReactNode;
}

const DashboardLayout: FC<Props> = ({ children }) => {
    return (
        <div className="flex flex-col w-full h-screen dark:bg-gray-800">
            <Header />
            <div className="grid flex-1 grid-cols-10">
                <Sidebar />
                <div className="md:col-span-7 lg:col-span-8">
                    <Container className="py-4 sm:py-6 lg:mx-10">{children}</Container>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
