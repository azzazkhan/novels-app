'use client';

import type { FC } from 'react';
import { useViewportSize } from '@mantine/hooks';

import styles from './Screen.module.css';

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
        <div className={styles.wrapper}>
            <span>
                {width} &times; {height}
            </span>
            <span className={styles.text}>({breakpoint})</span>
        </div>
    );
};

export default Screen;
