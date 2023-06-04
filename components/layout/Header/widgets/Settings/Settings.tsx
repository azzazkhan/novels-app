'use client';

import { FC, MouseEventHandler, useState } from 'react';
import Image from 'next/image';
import settings from 'assets/icons/settings.svg';
import { useClickOutside } from '@mantine/hooks';
import Dropdown from '../Dropdown';
import { RadioGroup, Switch } from '@headlessui/react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { toggleDarkMode } from 'store/slices';
import classNames from 'classnames';
import DarkModeToggler from './DarkModeToggler';
import SelectionAction from './SelectionAction';

const Settings: FC = () => {
    const dispatch = useAppDispatch();
    const [opened, setOpened] = useState(true);
    const ref = useClickOutside(() => setOpened(false));
    const darkMode = useAppSelector((state) => state.layout.darkMode);
    const [preference, setPreference] = useState('');

    const handleTriggerClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();

        setOpened(true);
    };

    const handleDarkModeClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
        event.preventDefault();

        dispatch(toggleDarkMode(!darkMode));
    };

    return (
        <li className="relative" ref={ref}>
            <button
                type="button"
                onClick={handleTriggerClick}
                className="flex items-center justify-center rounded-full h-10 w-10 overflow-hidden hover:bg-gray-100 cursor-pointer transition-colors"
            >
                <Image src={settings} height={24} alt="Avatar" />
            </button>

            {/* Theme */}
            {/* Preference */}
            <Dropdown opened={opened} className="py-2.5 min-w-[15rem]">
                <DarkModeToggler enabled={darkMode} toggle={handleDarkModeClick} />

                <div className="flex flex-col space-y-1 mt-4">
                    <span className="text-gray-500 text-sm px-5">Reading Preference</span>

                    <div>
                        <RadioGroup
                            value={preference}
                            onChange={setPreference}
                            className="flex flex-col"
                        >
                            <RadioGroup.Option value="male">
                                {({ checked }) => (
                                    <SelectionAction checked={checked}>Male Lead</SelectionAction>
                                )}
                            </RadioGroup.Option>
                            <RadioGroup.Option value="female">
                                {({ checked }) => (
                                    <SelectionAction checked={checked}>Female Lead</SelectionAction>
                                )}
                            </RadioGroup.Option>
                        </RadioGroup>
                    </div>
                </div>
            </Dropdown>
        </li>
    );
};

export default Settings;
