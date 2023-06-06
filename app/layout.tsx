import type { FC } from 'react';
import MantineProvider from 'providers/MantineProvider';
import classNames from 'classnames';
import { ReduxProvider } from 'providers';
import { Header } from 'components/layout';
import { nunito } from './fonts';
import 'styles/tailwind.css';
import 'styles/app.scss';

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
    title: {
        template: `%s — ${process.env.NEXT_PUBLIC_APP_NAME}`,
        default: process.env.NEXT_PUBLIC_APP_NAME || '',
        absolute: process.env.NEXT_PUBLIC_APP_NAME,
    },
    description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
};

export default RootLayout;
