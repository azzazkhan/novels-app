import * as React from 'react';

import { cn } from 'utils';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    'flex h-10 w-full rounded-md border border-gray-200 focus:border-gray-300 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:text-gray-100 dark:border-gray-800 dark:focus:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400',
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = 'Input';

export { Input };
