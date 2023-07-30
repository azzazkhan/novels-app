'use client';

import type { FC, ReactNode } from 'react';
import type { Novel, Tag } from 'types/resources';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import Summary from './Summary';
import Tags from './Tags';
import Reviews from './Reviews';

interface Props {
    summary: Novel['summary'];
    tags: Tag[];
    className?: ClassName;
    chapters?: ReactNode;
}

const Tabs: FC<Props> = ({ tags, summary, chapters, className }) => {
    return (
        <div className={classNames(className)}>
            <Tab.Group defaultIndex={1}>
                <Tab.List className="flex items-center space-x-4">
                    {['Details', 'Chapters'].map((label, idx) => {
                        return (
                            <Tab
                                key={idx}
                                className={({ selected }) =>
                                    classNames({
                                        'inline-flex items-center h-10 px-6 text-lg font-bold border-b-2 border-transparent transition-colors':
                                            true,
                                        'text-primary border-b-primary': selected,
                                        'text-gray-500 hover:text-black': !selected,
                                    })
                                }
                            >
                                {label}
                            </Tab>
                        );
                    })}
                </Tab.List>
                <Tab.Panels className="mt-8">
                    <Tab.Panel>
                        <Summary summary={summary} className="mb-8" />
                        <Tags tags={tags} className="mb-8" />
                        <Reviews type="novel" />
                    </Tab.Panel>
                    <Tab.Panel>{chapters}</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default Tabs;
