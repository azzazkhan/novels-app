'use client';

import {
    faComment,
    faFont,
    faHeadphones,
    faLanguage,
    faListOl,
    faSliders,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useReader } from 'hooks';
import { FC, MouseEventHandler } from 'react';

const Controls: FC = () => {
    const { setOpened } = useReader();

    const handleAction: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();

        setOpened();
    };

    return (
        <div className="fixed right-0 flex flex-col overflow-hidden transform -translate-y-1/2 bg-white rounded-l-lg shadow top-1/2">
            <button
                type="button"
                onClick={handleAction}
                className="flex items-center justify-center w-12 h-12 text-xl text-gray-500 transition-colors hover:bg-primary hover:text-white"
            >
                <FontAwesomeIcon icon={faFont} className="max-h-5" />
            </button>
            <button
                type="button"
                onClick={handleAction}
                className="flex items-center justify-center w-12 h-12 text-xl text-gray-500 transition-colors hover:bg-primary hover:text-white"
            >
                <FontAwesomeIcon icon={faLanguage} className="max-h-5" />
            </button>
            <button
                type="button"
                onClick={handleAction}
                className="flex items-center justify-center w-12 h-12 text-xl text-gray-500 transition-colors hover:bg-primary hover:text-white"
            >
                <FontAwesomeIcon icon={faHeadphones} className="max-h-5" />
            </button>
            <button
                type="button"
                onClick={handleAction}
                className="flex items-center justify-center w-12 h-12 text-xl text-gray-500 transition-colors hover:bg-primary hover:text-white"
            >
                <FontAwesomeIcon icon={faSliders} className="max-h-5" />
            </button>
            <button
                type="button"
                onClick={handleAction}
                className="flex items-center justify-center w-12 h-12 text-xl text-gray-500 transition-colors hover:bg-primary hover:text-white"
            >
                <FontAwesomeIcon icon={faListOl} className="max-h-5" />
            </button>
            <button
                type="button"
                onClick={handleAction}
                className="flex items-center justify-center w-12 h-12 text-xl text-gray-500 transition-colors hover:bg-primary hover:text-white"
            >
                <FontAwesomeIcon icon={faComment} className="max-h-5" />
            </button>
        </div>
    );
};

export default Controls;
