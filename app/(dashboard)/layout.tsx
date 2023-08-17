'use client';

import { useEffect, type FC, type ReactNode } from 'react';

import 'styles/global.css';
import { Header, Sidebar } from './_components';
import { Container } from 'components/common';

interface Props {
    children?: ReactNode;
}

const DashboardLayout: FC<Props> = ({ children }) => {
    useEffect(() => {
        document.body.classList.contains('min-h-screen') &&
            document.body.classList.remove('min-h-screen');
        !document.body.classList.contains('h-screen') && document.body.classList.add('h-screen');
        !document.body.classList.contains('overflow-y-hidden') &&
            document.body.classList.add('overflow-y-hidden');

        return () => {
            !document.body.classList.contains('min-h-screen') &&
                document.body.classList.add('min-h-screen');
            document.body.classList.contains('h-screen') &&
                document.body.classList.remove('h-screen');
            document.body.classList.contains('overflow-y-hidden') &&
                document.body.classList.remove('overflow-y-hidden');
        };
    }, []);

    return (
        <div className="flex flex-col w-full h-screen bg-gray-100 dark:bg-gray-800">
            <Header />
            <div className="flex-1 md:grid md:grid-cols-10">
                <Sidebar />
                <div className="md:col-span-7 lg:col-span-8 h-[calc(100vh-4rem)] overflow-y-auto">
                    <Container className="py-4 sm:py-6 lg:mx-10 dark:text-gray-100">
                        {children}
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
