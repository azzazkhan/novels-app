import type { FC } from 'react';
import { Header } from 'components/layout';
import { merienda } from './fonts';
import classNames from 'classnames';

import 'styles/tailwind.css';
import 'styles/app.scss';

interface Props {
    children: React.ReactNode;
}

const PublicLayout: FC<Props> = ({ children }) => {
    return (
        <div className={classNames(merienda.variable)}>
            <Header />
            <main className="pt-16">{children}</main>
        </div>
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

export default PublicLayout;
