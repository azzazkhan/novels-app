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
}

const Dropdown: ForwardRefRenderFunction<Ref, Props> = (
    { opened, chevron = 'right', className, children },
    ref
) => {
    return (
        <div
            className={classNames(
                'absolute top-[calc(100%+0.75rem)] -right-5 max-h-[24rem] min-h-[3rem] max-w-min min-w-[10rem] shadow-lg bg-white border border-gray-200 rounded-xl transition-all duration-300',
                { 'invisible opacity-0 -translate-y-5': !opened },
                { 'visible opacity-100 translate-y-0': opened },
                className
            )}
            ref={ref as unknown as Ref}
        >
            {chevron && (
                <span
                    className={classNames(
                        'absolute -top-2 h-4 w-4 bg-white transform rotate-45 border-t border-l border-gray-200',
                        {
                            'right-8': chevron === 'right',
                            'left-8': chevron === 'left',
                        }
                    )}
                />
            )}
            {children}
        </div>
    );
};

export default forwardRef<MutableRefObject<HTMLDivElement>, Props>(Dropdown);
