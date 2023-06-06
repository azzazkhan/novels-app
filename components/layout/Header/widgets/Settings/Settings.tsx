'use client';

import { FC, MouseEventHandler, useState } from 'react';
import Image from 'next/image';
import { useClickOutside } from '@mantine/hooks';
import { RadioGroup } from '@headlessui/react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { toggleDarkMode } from 'store/slices';
import Dropdown from '../Dropdown';
import DarkModeToggler from './DarkModeToggler';
import SelectionAction from './SelectionAction';
import settings from 'assets/icons/settings.svg';

const Settings: FC = () => {
    const dispatch = useAppDispatch();
    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(false));
    const darkMode = useAppSelector((state) => state.layout.darkMode);
    const [preference, setPreference] = useState('');

    const handleTriggerClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();

        setOpened((current) => !current);
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
                className="flex items-center justify-center w-10 h-10 overflow-hidden transition-colors rounded-full cursor-pointer hover:bg-gray-100"
            >
                <Image src={settings} height={24} alt="Avatar" />
            </button>

            <Dropdown opened={opened} className="py-2.5 min-w-[20rem]">
                <DarkModeToggler enabled={darkMode} toggle={handleDarkModeClick} />

                <div className="flex flex-col mt-4 space-y-1">
                    <span className="px-5 text-sm text-gray-500">Reading Preference</span>

                    <div>
                        <RadioGroup
                            value={preference}
                            onChange={setPreference}
                            className="flex flex-col"
                        >
                            <RadioGroup.Option value="male">
                                {({ checked }) => (
                                    <SelectionAction checked={checked} label="Male Lead">
                                        More fiction in contemporary and other romance
                                    </SelectionAction>
                                )}
                            </RadioGroup.Option>
                            <RadioGroup.Option value="female">
                                {({ checked }) => (
                                    <SelectionAction checked={checked} label="Female Lead">
                                        More fiction in fantasy, games and magical realism
                                    </SelectionAction>
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
