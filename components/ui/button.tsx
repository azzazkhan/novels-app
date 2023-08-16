import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from 'utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-lg text-xs sm:text-sm font-medium ring-offset-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300',
    {
        variants: {
            variant: {
                default:
                    'bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90',
                destructive:
                    'bg-red-500 text-gray-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-gray-50 dark:hover:bg-red-900/90',
                outline:
                    'border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50',
                ghost: 'hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:text-gray-100 dark:hover:text-gray-50',
                link: 'text-gray-900 underline-offset-4 hover:underline dark:text-gray-50',
                primary:
                    'text-white bg-primary gap-x-2 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 border border-transparent',
                secondary:
                    'text-gray-700 bg-white border gap-x-2 hover:bg-gray-50 dark:text-gray-200 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800',
                grouped:
                    'px-5 py-2 text-gray-600 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 rounded-none',
                'grouped-active':
                    'px-5 py-2 text-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-none',
            },
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
                'icon-md': 'h-11 w-11',
                icon: 'h-10 w-10',
                'icon-sm': 'h-9 w-9',
            },
            shape: {
                rounded: 'rounded-full',
                flat: 'rounded-none',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, shape, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, shape, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
