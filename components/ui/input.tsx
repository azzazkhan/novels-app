import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from 'utils';

const inputVariants = cva(
    'block w-full pr-5 text-gray-700 bg-white px-5 border border-gray-200 rounded-lg placeholder-gray-400/70 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:border-gray-300 dark:focus:border-gray-500',
    {
        variants: {
            variant: {
                icon: 'pl-11 rtl:pr-11 rtl:pl-5',
            },
            size: {
                lg: 'h-11',
                default: 'h-10',
                sm: 'text-sm h-9',
            },
        },
        defaultVariants: {
            size: 'default',
        },
    }
);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
        VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, variant, size, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(inputVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = 'Input';

export { Input };
