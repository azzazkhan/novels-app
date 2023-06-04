import type { FC, ReactNode, HTMLAttributes } from 'react';
import classNames from 'classnames';

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
    className?: ClassName;
    wrapperClassName?: ClassName;
    children?: ReactNode;
    noMargins?: boolean;
}

const Container: FC<Props> = ({ wrapperClassName, noMargins, className, children, ...props }) => {
    return (
        <div className={classNames('mx-auto max-w-8xl', wrapperClassName)} {...props}>
            <div
                className={classNames({ 'mx-4 sm:mx-6 md:mx-10 lg:mx-20': !noMargins }, className)}
            >
                {children}
            </div>
        </div>
    );
};

export default Container;
