'use client';

import { Disclosure } from '@headlessui/react';
import classNames from 'classnames';
import { useSeries } from 'hooks';
import React, { FC, ReactNode } from 'react';

interface Props {
    name: string;
    index: number;
    children?: ReactNode;
}

const Series: FC<Props> = ({ name, index, children }) => {
    const { getChapters } = useSeries();

    return (
        <Disclosure>
            {({ open }) => {
                return (
                    <div
                        className={classNames({
                            'rounded-xl select-none': true,
                            'bg-gray-100': open,
                        })}
                    >
                        <Disclosure.Button
                            className={classNames({
                                'flex items-center flex-grow-0 flex-shrink-0 w-full h-16 px-4 transition-colors rounded-xl':
                                    true,
                                'hover:bg-gray-100': !open,
                            })}
                            onClick={() => getChapters(index)}
                        >
                            <div className="inline-flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full">
                                <span className="text-lg font-bold">
                                    {index < 9 ? `0${index + 1}` : index + 1}
                                </span>
                            </div>
                            <p className="flex-1 ml-4 text-lg font-bold text-left line-clamp-1">
                                {name}
                            </p>
                        </Disclosure.Button>

                        <Disclosure.Panel className="grid w-full grid-cols-2 gap-4 p-4">
                            {children}
                        </Disclosure.Panel>
                    </div>
                );
            }}
        </Disclosure>
    );
};

export default Series;
