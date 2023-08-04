'use client';

import classNames from 'classnames';
import { useReader } from 'hooks';
import { FC } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

interface Props {
    content: string;
}

const Reader: FC<Props> = ({ content }) => {
    const { fontFace, fontSize, lineHeight, paragraphSpacing } = useReader();

    return (
        <div
            className={classNames({
                'font-sans': fontFace === 'nunito',
                'font-lora': fontFace === 'lora',
                'font-roboto': fontFace === 'roboto',
                'font-merriweather': fontFace === 'merriweather',
                'text-[14px]': fontSize === 14,
                'text-[16px]': fontSize === 16,
                'text-[18px]': fontSize === 18,
                'text-[20px]': fontSize === 20,
                'text-[22px]': fontSize === 22,
                'text-[24px]': fontSize === 24,
                'text-[26px]': fontSize === 26,
                'text-[28px]': fontSize === 28,
                'leading-none': lineHeight === 1,
                'leading-tight': lineHeight === 1.25,
                'leading-snug': lineHeight === 1.375,
                'leading-normal': lineHeight === 1.5,
                'leading-relaxed': lineHeight === 1.625,
                'leading-loose': lineHeight === 2,
                '[&>p]:mb-1.5': paragraphSpacing === 6,
                '[&>p]:mb-2': paragraphSpacing === 8,
                '[&>p]:mb-2.5': paragraphSpacing === 10,
                '[&>p]:mb-3.5': paragraphSpacing === 14,
                '[&>p]:mb-4': paragraphSpacing === 16,
                '[&>p]:mb-5': paragraphSpacing === 20,
            })}
        >
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default Reader;
