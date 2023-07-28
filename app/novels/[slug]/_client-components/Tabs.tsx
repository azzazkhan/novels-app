'use client';

import type { FC } from 'react';
import type { Novel, Tag } from 'types/resources';
import Link from 'next/link';
import { Disclosure, Tab } from '@headlessui/react';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import Summary from './Summary';
import Tags from './Tags';
import Reviews from './Reviews';
import series from '../series';

interface Props {
    summary: Novel['summary'];
    tags: Tag[];
    slug: string;
    className?: ClassName;
}

const Tabs: FC<Props> = ({ slug, tags, summary, className }) => {
    return (
        <div className={classNames(className)}>
            <Tab.Group>
                <Tab.List className="flex items-center space-x-4">
                    <Tab
                        className={({ selected }) =>
                            classNames({
                                'inline-flex items-center h-10 px-6 text-lg font-bold border-b-2 border-transparent transition-colors':
                                    true,
                                'text-primary border-b-primary': selected,
                                'text-gray-500 hover:text-black': !selected,
                            })
                        }
                    >
                        Details
                    </Tab>
                    <Tab
                        className={({ selected }) =>
                            classNames({
                                'inline-flex items-center h-10 px-6 text-lg font-bold border-b-2 border-transparent transition-colors':
                                    true,
                                'text-primary border-b-primary': selected,
                                'text-gray-500 hover:text-black': !selected,
                            })
                        }
                    >
                        Chapters
                    </Tab>
                </Tab.List>
                <Tab.Panels className="mt-8">
                    <Tab.Panel>
                        <Summary summary={summary} className="mb-8" />
                        <Tags tags={tags} className="mb-8" />
                        <Reviews type="novel" />
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className="flex flex-col items-stretch mb-10 space-y-2">
                            {series.map(({ name, chapters }, seriesIdx) => {
                                return (
                                    <Disclosure key={seriesIdx}>
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
                                                    >
                                                        <div className="inline-flex items-center justify-center h-10 border-2 border-gray-300 rounded-full w-11">
                                                            <span className="text-lg font-bold">
                                                                {seriesIdx < 9
                                                                    ? `0${seriesIdx + 1}`
                                                                    : seriesIdx + 1}
                                                            </span>
                                                        </div>
                                                        <p className="ml-4 text-lg font-bold flex-1text-left line-clamp-1">
                                                            {name}
                                                        </p>
                                                    </Disclosure.Button>

                                                    <Disclosure.Panel className="grid w-full grid-cols-2 gap-4 p-4">
                                                        {chapters.map(
                                                            (
                                                                { name, number, date, locked },
                                                                idx
                                                            ) => {
                                                                return (
                                                                    <Link
                                                                        href={`/novels/${slug}/chapters/${number}`}
                                                                        className={classNames({
                                                                            'flex items-center justify-between px-4 py-3  rounded-xl space-x-2.5':
                                                                                true,
                                                                            'pointer-events-none':
                                                                                locked,
                                                                            'transition-colors hover:bg-gray-200':
                                                                                !locked,
                                                                        })}
                                                                        key={idx}
                                                                    >
                                                                        <div className="flex flex-col flex-1">
                                                                            <h2 className="text-lg font-bold line-clamp-1">
                                                                                Chapter {number}:{' '}
                                                                                {name}
                                                                            </h2>
                                                                            <span className="text-sm text-gray-500">
                                                                                {date}
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            className={classNames(
                                                                                'flex items-center justify-center flex-grow-0 flex-shrink-0 w-8 h-8 border border-gray-400 rounded-full',
                                                                                {
                                                                                    invisible:
                                                                                        !locked,
                                                                                }
                                                                            )}
                                                                        >
                                                                            <LockClosedIcon className="w-5 h-5 text-gray-400" />
                                                                        </div>
                                                                    </Link>
                                                                );
                                                            }
                                                        )}
                                                    </Disclosure.Panel>
                                                </div>
                                            );
                                        }}
                                    </Disclosure>
                                );
                            })}
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default Tabs;
