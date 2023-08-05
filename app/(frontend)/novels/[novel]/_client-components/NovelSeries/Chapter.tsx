import type { FC } from 'react';
import Link from 'next/link';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import moment from 'moment';

interface Props {
    name: string;
    url: string;
    number: number | string;
    date: string;
    locked: boolean;
}

const Chapter: FC<Props> = ({ name, url, number, date, locked }) => {
    return (
        <Link
            href={url}
            className={classNames({
                'flex items-center justify-between px-4 py-3  rounded-xl space-x-2.5': true,
                'pointer-events-none': locked,
                'transition-colors hover:bg-gray-200': !locked,
            })}
            prefetch={false}
        >
            <div className="flex flex-col flex-1">
                <h2 className="text-lg font-bold line-clamp-1">
                    Chapter {number}: {name}
                </h2>
                <span className="text-sm text-gray-500">{moment(date).fromNow()}</span>
            </div>
            <div
                className={classNames(
                    'flex items-center justify-center flex-grow-0 flex-shrink-0 w-8 h-8 border border-gray-400 rounded-full',
                    {
                        invisible: !locked,
                    }
                )}
            >
                <LockClosedIcon className="w-5 h-5 text-gray-400" />
            </div>
        </Link>
    );
};

export default Chapter;
