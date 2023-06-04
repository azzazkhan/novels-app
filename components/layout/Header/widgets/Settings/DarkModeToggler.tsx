import type { FC, MouseEventHandler } from 'react';
import classNames from 'classnames';
import { Switch } from '@headlessui/react';

interface Props {
    toggle: MouseEventHandler<HTMLAnchorElement>;
    enabled: boolean;
}

const DarkModeToggler: FC<Props> = ({ enabled, toggle }) => {
    return (
        <a
            role="button"
            href="#"
            className="flex items-center justify-between py-2.5 px-5 transition-colors hover:bg-gray-50"
            onClick={toggle}
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
