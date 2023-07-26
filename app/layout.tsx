import type { FC } from 'react';
import classNames from 'classnames';
import { ReduxProvider, SessionProvider, MantineProvider } from 'providers';
import { Header } from 'components/layout';
import { nunito, merienda } from './fonts';
import 'styles/tailwind.css';
import 'styles/app.scss';
import Screen from './Screen';

interface Props {
    children: React.ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
    return (
        <html lang="en">
            <body
                className={classNames(
                    nunito.className,
                    merienda.variable,
                    'min-h-screen !overflow-x-hidden w-screen'
                )}
            >
                <ReduxProvider>
                    <SessionProvider>
                        <MantineProvider>
                            <Screen />
                            <Header />
                            <main className="pt-16">{children}</main>
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
