import {
    ReactNode,
    DetailedHTMLProps,
    HTMLAttributes,
    MutableRefObject,
    forwardRef,
    ForwardRefRenderFunction,
} from 'react';
import classNames from 'classnames';

declare type Ref = MutableRefObject<HTMLDivElement>;

interface Props
    extends Omit<
        DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        'ref' | 'className'
    > {
    className?: ClassName;
    opened?: boolean;
    children?: ReactNode;
    chevron?: 'left' | 'right' | false;
    chevronClassName?: ClassName;
}

const Dropdown: ForwardRefRenderFunction<Ref, Props> = (
    { opened, chevron = 'right', chevronClassName, className, children },
    ref
) => {
    return (
        <div
            className={classNames(
                '',
                'lg:absolute lg:top-[calc(100%+0.75rem)] lg:-right-5 lg:max-h-[24rem] lg:min-h-[3rem] lg:max-w-min lg:min-w-[10rem] lg:shadow-lg lg:bg-white lg:border lg:border-gray-200 lg:rounded-xl lg:transition-all lg:duration-300',
                { 'lg:invisible lg:opacity-0 lg:-translate-y-5': !opened },
                { 'lg:visible lg:opacity-100 lg:translate-y-0': opened },
                className
            )}
            ref={ref as unknown as Ref}
        >
            {chevron && (
                <span
                    className={classNames(
                        'hidden lg:block absolute -top-2 h-4 w-4 bg-white transform rotate-45 border-t border-l border-gray-200',
                        {
                            'right-8': chevron === 'right',
                            'left-8': chevron === 'left',
                        },
                        chevronClassName
                    )}
                />
            )}
            {children}
        </div>
    );
};

export default forwardRef<MutableRefObject<HTMLDivElement>, Props>(Dropdown);
