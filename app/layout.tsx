import type { FC, ReactNode } from 'react';
import NextTopLoader from 'nextjs-toploader';
import { MantineProvider, ReduxProvider, SessionProvider } from 'providers';
import { Screen } from './_components';
import { nunito } from './_fonts';
import classNames from 'classnames';

import 'styles/tailwind.css';
import 'styles/app.scss';
import { Middleware } from 'components/middleware';

interface Props {
    children?: ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
    return (
        <html lang="en">
            <body
                className={classNames(nunito.className)}
                style={{ minHeight: '100vh', overflowX: 'hidden', width: '100vw' }}
            >
                <ReduxProvider>
                    <SessionProvider>
                        <Middleware />
                        <MantineProvider>
                            <NextTopLoader
                                color="#2563EB"
                                initialPosition={0.08}
                                crawlSpeed={200}
                                height={3}
                                crawl
                                showSpinner={false}
                                easing="ease"
                                speed={200}
                                shadow="0 0 10px #2563EB,0 0 5px #2563EB"
                            />
                            <Screen />
                            {children}
                        </MantineProvider>
                    </SessionProvider>
                </ReduxProvider>
            </body>
        </html>
    );
};

export const metadata = {
    title: {
        template: `%s — ${process.env.NEXT_PUBLIC_APP_NAME}`,
        default: process.env.NEXT_PUBLIC_APP_NAME || '',
        absolute: process.env.NEXT_PUBLIC_APP_NAME,
    },
    description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
    viewport: 'width=device-width, initial-scale=1.0, user-scalable=no, shrink-to-fit=no',
};

export default RootLayout;
