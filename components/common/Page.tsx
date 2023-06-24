import type { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

interface Props
    extends Omit<
        DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        'className' | 'children'
    > {
    children?: ReactNode;
    className?: ClassName;
}

const Page: FC<Props> = ({ className, children, ...props }) => {
    return (
        <div className={classNames('py-6 lg:py-10', className)} {...props}>
            {children}
        </div>
    );
};

export default Page;
