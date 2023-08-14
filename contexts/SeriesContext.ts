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
            chapters: Omit<Chapter, 'content'>[];
        }
    >;
    status?: AsyncStatus;
    paginationStatus?: AsyncStatus;
    nextPageUrl?: string;

    getInitialSeries: (force?: boolean, limit?: number) => void;
    getMoreSeries: () => void;
    getChapters: (seriesIndex: number, force?: boolean, limit?: number) => void;
    getMoreChapters: (seriesIndex: number) => void;
}

export const SeriesContext = createContext<SeriesContextValue>({
    series: [],
    getChapters: () => {},
    getInitialSeries: () => {},
    getMoreChapters: () => {},
    getMoreSeries: () => {},
});
