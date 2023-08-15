/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { FC, MouseEventHandler } from 'react';
import classNames from 'classnames';
import { Switch } from '@headlessui/react';
import { useTheme } from 'hooks';

const DarkModeToggler: FC = () => {
    const { theme, setTheme } = useTheme();

    const enabled = theme === 'dark';

    const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
        event.preventDefault();

        setTheme();
    };

    return (
        <a
            role="button"
            className="flex items-center justify-between py-2.5 px-5 transition-colors hover:bg-gray-50"
            onClick={handleClick}
        >
            <span>Dark Mode</span>
            <Switch
                checked={enabled}
                className={classNames('relative inline-flex h-6 w-11 items-center rounded-full', {
                    'bg-primary': enabled,
                    'bg-gray-200': !enabled,
                })}
            >
                <span className="sr-only">Toggle dark mode</span>
                <span
                    className={classNames(
                        'inline-block h-4 w-4 transform rounded-full bg-white transition',
                        { 'translate-x-6': enabled, 'translate-x-1': !enabled }
                    )}
                />
            </Switch>
        </a>
    );
};

export default DarkModeToggler;
