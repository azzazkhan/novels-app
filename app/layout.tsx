import type { FC } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import ReduxProvider from 'store/ReduxProvider';

const inter = Inter({ subsets: ['latin'] });

interface Props {
    children: React.ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
    );
};

export const metadata = {
    title: process.env.NEXT_PUBLIC_APP_NAME,
    description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
};

export default RootLayout;
