'use client';

import { FC, MouseEventHandler, useState } from 'react';
import Image from 'next/image';
import { useClickOutside } from '@mantine/hooks';
import { RadioGroup } from '@headlessui/react';
import Dropdown from '../Dropdown';
import DarkModeToggler from './DarkModeToggler';
import SelectionAction from './SelectionAction';
import settings from 'assets/icons/settings.svg';

const Settings: FC = () => {
    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(false));
    const [preference, setPreference] = useState('');

    const handleTriggerClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();

        setOpened((current) => !current);
    };

    return (
        <li className="relative" ref={ref}>
            <button
                type="button"
                onClick={handleTriggerClick}
                className="items-center justify-center hidden w-10 h-10 overflow-hidden transition-colors rounded-full cursor-pointer lg:flex hover:bg-gray-100"
            >
                <Image src={settings} height={24} alt="Avatar" />
            </button>

            <Dropdown opened={opened} className="py-2.5 lg:min-w-[20rem]">
                <DarkModeToggler />

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
