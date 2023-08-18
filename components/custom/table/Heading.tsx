import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { cn } from 'utils';

interface Props {
    className?: ClassName;
    children?: ReactNode;
}

const Heading: FC<Props> = ({ children, className }) => {
    return (
        <th
            scope="col"
            className={cn(
                classNames(
                    'py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400',
                    className
                )
            )}
        >
            {children}
        </th>
    );
};

export default Heading;
