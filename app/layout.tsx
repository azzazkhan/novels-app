import type { FC, ReactNode } from 'react';
import { MantineProvider, ReduxProvider, SessionProvider } from 'providers';
import { Screen } from './_components';
import { nunito } from './_fonts';
import classNames from 'classnames';

interface Props {
    children?: ReactNode;
}

// min-h-screen !overflow-x-hidden w-screen

const RootLayout: FC<Props> = ({ children }) => {
    return (
        <html lang="en">
            <body
                className={classNames(nunito.className)}
                style={{ minHeight: '100vh', overflowX: 'hidden', width: '100vw' }}
            >
                <ReduxProvider>
                    <SessionProvider>
                        <MantineProvider>
                            <Screen />
                            {children}
                        </MantineProvider>
                    </SessionProvider>
                </ReduxProvider>
            </body>
        </html>
    );
};

export default RootLayout;
