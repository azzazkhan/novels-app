import type { FC } from 'react';
import { Nunito } from 'next/font/google';
import { ReduxProvider } from 'providers';
import { Header } from 'components/layout';
import 'styles/tailwind.css';
import classNames from 'classnames';
import MantineProvider from 'providers/MantineProvider';

const nunito = Nunito({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
    preload: true,
});

interface Props {
    children: React.ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
    return (
        <html lang="en">
            <body className={classNames(nunito.className, 'min-h-screen !overflow-x-hidden')}>
                <ReduxProvider>
                    <MantineProvider>
                        <Header />
                        <main>{children}</main>
                    </MantineProvider>
                </ReduxProvider>
            </body>
        </html>
    );
};

export const metadata = {
    title: process.env.NEXT_PUBLIC_APP_NAME,
    description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
};

export default RootLayout;
