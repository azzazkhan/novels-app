import { FC, HTMLAttributes } from 'react';
import { cn } from 'utils';

const Skeleton: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    return (
        <div
            className={cn('animate-pulse rounded-md bg-gray-100 dark:bg-gray-800', className)}
            {...props}
        />
    );
};

export { Skeleton };
