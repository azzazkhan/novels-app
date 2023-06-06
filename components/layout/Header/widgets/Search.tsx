'use client';

import { FC } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppSelector } from 'hooks';
import classNames from 'classnames';

interface Props {
    className?: ClassName;
    inputClassName?: ClassName;
}

const Search: FC<Props> = ({ className, inputClassName }) => {
    const searchQuery = useAppSelector((state) => state.search.query);

    return (
        <li className={classNames(className)}>
            <div
                className={classNames(
                    'h-10 pl-5 pr-2.5 flex items-center rounded-full border bg-white w-52 xl:w-64 space-x-2.5 transition-colors hover:bg-gray-50 cursor-pointer select-none mr-1 overflow-hidden',
                    { 'border-gray-200': !searchQuery },
                    { 'border-gray-300': searchQuery },
                    inputClassName
                )}
            >
                <FontAwesomeIcon icon={faSearch} className="h-3.5 text-gray-400" />
                {!searchQuery && <span className="text-gray-400 text-sm mt-0.5">Search</span>}
                {searchQuery && (
                    <span className="text-gray-900 text-sm mt-0.5 whitespace-nowrap max-w-full overflow-hidden truncate">
                        {searchQuery}
                    </span>
                )}
            </div>
        </li>
    );
};

export default Search;
