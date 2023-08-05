'use client';

import {
    ChangeEvent,
    ChangeEventHandler,
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
    onChange?: (val: string, event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = (
    { className, error, togglePassword, type: inputType, value: inputValue, onChange, ...props },
    ref
) => {
    const id = useId();
    const [value, setValue] = useState(inputValue || '');
    const [type, setType] = useState<Props['type']>(inputType || 'text');
    const [toggled, toggle] = useToggle([true, false]);

    const toggleVisibility: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();

        if (!togglePassword) return;
        toggle();
        setType((current) => (current === 'password' ? 'text' : 'password'));
    };

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value);

        // If change listener is provided then provide the value as well as the
        // triggered event
        onChange && onChange(event.target.value, event);
    };

    return (
        <div className="flex flex-col">
            <div className="relative group">
                <input
                    id={props.id || id}
                    type={type}
                    onChange={handleChange}
                    className={classNames(
                        'bg-gray-200 font-semibold block h-11 w-full px-5 border-2 border-transparent rounded-full transition-colors focus:bg-white focus:border-primary dark:bg-gray-900 dark:focus:bg-white dark:focus:border-transparent dark:focus:text-black dark:text-gray-200',
                        className
                    )}
                    value={value}
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
                            className="text-sm text-gray-800 dark:text-white group-focus-within:text-black"
                        />
                    </button>
                )}
            </div>

            {error && <div className="mx-2 font-semibold text-red-500">{error}</div>}
        </div>
    );
};

export default forwardRef<HTMLInputElement, Props>(Input);
