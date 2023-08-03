'use client';

import { FC, useEffect } from 'react';
import classNames from 'classnames';
import { useEventListener } from '@mantine/hooks';
import { useReader } from 'hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {
    FontFace,
    FontSize,
    LineHeight,
    ParagraphSpacing,
    PlaybackSpeed,
    SpeechLanguage,
    Theme,
    TranslationLanguage,
} from './controls';

const Nav: FC = () => {
    const { opened, setOpened } = useReader();

    useEffect(() => {
        document.body.style.overflowY = opened ? 'hidden' : 'auto';
    }, [opened]);

    const ref = useEventListener('click', (event) => {
        // Continue if only overlay was clicked, not any of its children
        if (event.target !== ref.current) return;

        event.stopPropagation(); // Prevent from bubbling up the DOM tree
        event.preventDefault(); // Prevent any redirects
        setOpened(false);
    });

    return (
        <div
            className={classNames({
                'z-10 fixed right-0 flex justify-end w-full h-full transition-all duration-500 bg-black/20 top-16 backdrop-blur-md':
                    true,
                'visible opacity-100': opened,
                'invisible opacity-0': !opened,
            })}
            ref={ref}
        >
            <div
                className={classNames({
                    'w-full h-full p-4 bg-white shadow sm:max-w-sm transition transform duration-300 overflow-y-auto':
                        true,
                    'translate-x-full': !opened,
                    'translate-x-0': opened,
                })}
            >
                <button
                    type="button"
                    onClick={() => setOpened(false)}
                    className="inline-flex items-center justify-center h-10 px-4 space-x-2 rounded-lg md:space-x-3 max-md:bg-gray-100 hover:bg-gray-200"
                >
                    <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
                    <span className="font-bold">Go Back</span>
                </button>

                <div className="flex flex-col mt-4 space-y-2">
                    <FontFace />
                    <FontSize />
                    <ParagraphSpacing />
                    <LineHeight />
                    <Theme />
                    <TranslationLanguage />
                    <SpeechLanguage />
                    <PlaybackSpeed />
                </div>
            </div>
        </div>
    );
};

export default Nav;
