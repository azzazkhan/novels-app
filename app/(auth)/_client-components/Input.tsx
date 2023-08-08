'use client';

import {
    DetailedHTMLProps,
    ForwardRefRenderFunction,
    InputHTMLAttributes,
    MouseEventHandler,
    ReactNode,
    forwardRef,
    useId,
    useState,
} from 'react';
import classNames from 'classnames';
import { useToggle } from '@mantine/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface Props
    extends Omit<
        DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
        'className' | 'onChange'
    > {
    className?: ClassName;
    error?: ReactNode;
    togglePassword?: boolean;
    hint?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = (
    { className, error, togglePassword, type: inputType, hint, ...props },
    ref
) => {
    const id = useId();
    const [type, setType] = useState<Props['type']>(inputType || 'text');
    const [toggled, toggle] = useToggle([true, false]);

    const toggleVisibility: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();

        if (!togglePassword) return;
        toggle();
        setType((current) => (current === 'password' ? 'text' : 'password'));
    };

    return (
        <div className="flex flex-col">
            <div className="relative group">
                <input
                    id={props.id || id}
                    type={type}
                    className={classNames(
                        {
                            'bg-gray-900 font-semibold block h-11 w-full px-5 border-2 rounded-full transition-colors focus:bg-white':
                                true,
                            'text-red-500 border-red-500': error,
                            'text-white focus:text-black border-transparent': !error,
                        },
                        className
                    )}
                    {...props}
                    ref={ref}
                />

                {togglePassword && (
                    <button
                        type="button"
                        onClick={toggleVisibility}
                        className="absolute inline-flex items-center justify-center transition-colors transform -translate-y-1/2 rounded-full cursor-pointer hover:bg-black/20 dark:hover:bg-white/10 w-9 h-9 top-1/2 right-1 group-focus-within:dark:hover:bg-black/20"
                        title="Toggle password"
                    >
                        <FontAwesomeIcon
                            icon={toggled ? faEye : faEyeSlash}
                            className="text-sm text-gray-800 dark:text-white group-focus-within:text-black max-h-3.5"
                        />
                    </button>
                )}
            </div>

            {error && <div className="mx-2 mt-1 text-sm font-semibold text-red-500">{error}</div>}
            {hint && <div className="mx-2 mt-1 text-sm font-semibold text-gray-500">{hint}</div>}
        </div>
    );
};

export default forwardRef<HTMLInputElement, Props>(Input);
