import { ReactNode, HTMLAttributes, forwardRef, ForwardRefRenderFunction } from 'react';
import classNames from 'classnames';
import { cn } from 'utils';

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
    className?: ClassName;
    wrapperClassName?: ClassName;
    children?: ReactNode;
    noMargins?: boolean;
}

const Container: ForwardRefRenderFunction<HTMLDivElement, Props> = (
    { wrapperClassName, noMargins, className, children, ...props },
    ref
) => {
    return (
        <div
            className={cn(classNames('mx-auto max-w-[95%] xl:max-w-[76rem]', wrapperClassName))}
            {...props}
            ref={ref}
        >
            <div
                className={cn(
                    classNames({ 'mx-4 sm:mx-6 md:mx-10 lg:mx-20': !noMargins }, className)
                )}
            >
                {children}
            </div>
        </div>
    );
};

export default forwardRef<HTMLDivElement, Props>(Container);
