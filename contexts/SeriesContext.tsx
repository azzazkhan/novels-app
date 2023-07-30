'use client';

import { createContext } from 'react';
import type { Chapter, Series } from 'types/resources';

type AsyncStatus = 'loading' | 'error' | 'success';
export interface SeriesContextValue {
    series: Array<
        Series & {
            status?: AsyncStatus;
            paginationStatus?: AsyncStatus;
            nextPageUrl?: string;
            chapters: Chapter[];
        }
    >;
    status?: AsyncStatus;
    paginationStatus?: AsyncStatus;

    getInitialSeries: (force?: boolean) => void;
    getMoreSeries: () => void;
    getChapters: (seriesIndex: number, force?: boolean) => void;
    getMoreChapters: (seriesIndex: number) => void;
}

export const SeriesContext = createContext<SeriesContextValue>({
    series: [],
    getChapters: () => {},
    getInitialSeries: () => {},
    getMoreChapters: () => {},
    getMoreSeries: () => {},
});
