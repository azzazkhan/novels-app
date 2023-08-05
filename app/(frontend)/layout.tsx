import type { FC } from 'react';
import { Header } from 'components/layout';
import { merienda } from './fonts';
import classNames from 'classnames';

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

export default PublicLayout;
