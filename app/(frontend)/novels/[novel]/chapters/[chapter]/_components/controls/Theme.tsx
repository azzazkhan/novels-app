'use client';

import { FC, Fragment } from 'react';
import { ChevronUpDownIcon } from '@heroicons/react/24/solid';
import { Listbox, Transition } from '@headlessui/react';
import { ReadingUtilsContextValue } from 'contexts';
import { useReader } from 'hooks';
import classNames from 'classnames';

interface Props {
    className?: ClassName;
}

const availableThemes: Record<ReadingUtilsContextValue['theme'], string> = {
    dark: 'Dark',
    light: 'Light',
    solarized: 'Solarized',
};

const Theme: FC<Props> = ({ className }) => {
    const { theme, setTheme } = useReader();

    return (
        <div
            className={classNames(
                'flex items-center justify-between space-x-4 -mx-4 px-6 py-2',
                className
            )}
        >
            <h3 className="text-lg font-bold">Theme</h3>

            <Listbox value={theme} onChange={setTheme}>
                <div className="relative w-32 mt-1">
                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-pointer sm:text-sm">
                        <span className="block truncate">{availableThemes[theme]}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <ChevronUpDownIcon
                                className="w-5 h-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute z-20 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 focus:outline-none sm:text-sm">
                            {Object.entries(availableThemes).map(([font, name]) => (
                                <Listbox.Option
                                    key={font}
                                    className={({ active, selected }) =>
                                        classNames({
                                            'relative select-none py-2 px-4 cursor-pointer': true,
                                            '!bg-primary !text-white !pointer-events-none':
                                                selected,
                                            'bg-blue-100 text-blue-900': active,
                                            'text-gray-900': !active,
                                        })
                                    }
                                    value={font}
                                >
                                    {({ selected }) => (
                                        <span
                                            className={`block truncate capitalize ${
                                                selected ? 'font-medium' : 'font-normal'
                                            }`}
                                        >
                                            {name}
                                        </span>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
};

export default Theme;
