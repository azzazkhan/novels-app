'use client';

import type { FC } from 'react';
import type { Novel, Tag } from 'types/resources';
import { Tab } from '@headlessui/react';
import Summary from './Summary';
import Tags from './Tags';
import Reviews from './Reviews';
import classNames from 'classnames';

interface Props {
    summary: Novel['summary'];
    tags: Tag[];
}

const Tabs: FC<Props> = ({ tags, summary }) => {
    return (
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus nobis ipsam
                    illo deserunt, inventore ad ut exercitationem ea dolorum impedit obcaecati
                    voluptatibus nesciunt, expedita cumque, at qui necessitatibus. Maxime, minima.
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    );
};

export default Tabs;
