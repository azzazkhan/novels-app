import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { cn } from 'utils';

interface Props {
    children?: ReactNode;
    className?: ClassName;
}

const Cell: FC<Props> = ({ children, className }) => {
    return (
        <td
            className={cn(classNames('px-4 py-4 text-sm font-medium whitespace-nowrap', className))}
        >
            {children}
        </td>
    );
};

export default Cell;
