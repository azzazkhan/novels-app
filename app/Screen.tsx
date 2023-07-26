'use client';

import { useViewportSize } from '@mantine/hooks';
import { FC } from 'react';

const Screen: FC = () => {
    const { height, width } = useViewportSize();

    const breakpoint = (() => {
        if (width >= 1536) return '2XL';
        if (width >= 1280) return 'XL';
        if (width >= 1024) return 'LG';
        if (width >= 768) return 'MD';
        if (width >= 640) return 'SM';
        return 'XS';
    })();

    return (
        <div className="fixed top-0 right-0 z-[100] bg-gray-950/70 text-white inline-flex items-center h-10 px-6 rounded-bl-xl select-none space-x-2">
            <span>
                {width} &times; {height}
            </span>
            <span className="text-sm">({breakpoint})</span>
        </div>
    );
};

export default Screen;
