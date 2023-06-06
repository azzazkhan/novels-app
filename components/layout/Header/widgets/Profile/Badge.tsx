import classNames from 'classnames';
import type { FC, ReactNode } from 'react';

interface Props {
    className?: ClassName;
    children?: ReactNode;
}

const Badge: FC<Props> = ({ className, children }) => {
    return (
        <span
            className={classNames(
                'absolute inline-flex items-center h-5 px-2 font-bold text-white uppercase transform -translate-y-1/2 bg-red-500 rounded-full text-xxs right-5 top-1/2',
                className
            )}
        >
            {children}
        </span>
    );
};

export default Badge;
