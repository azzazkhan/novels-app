'use client';

import { FC, useEffect } from 'react';
import classNames from 'classnames';
import { useSeries } from 'hooks';
import SeriesLoading from './SeriesLoading';
import Series from './Series';
import ChapterLoading from './ChapterLoading';
import Chapter from './Chapter';

interface Props {
    novelSlug: string;
}

const NovelSeries: FC<Props> = ({ novelSlug }) => {
    const { series, status, nextPageUrl, paginationStatus, getInitialSeries, getMoreSeries } =
        useSeries();

    useEffect(() => {
        getInitialSeries();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex flex-col items-stretch mb-10 space-y-2">
            {status === 'loading' &&
                Array.from({ length: 3 }).map((_, idx) => {
                    return <SeriesLoading key={idx} />;
                })}
            {status === 'error' && (
                <div className="p-4 text-lg font-bold text-center text-red-500">
                    An unknown error occurred while loading novel chapters!
                </div>
            )}
            {status === 'success' && series.length === 0 && (
                <div className="p-4 text-lg font-bold text-center text-gray-500">
                    The author has not published any chapters yet :(
                </div>
            )}
            {status === 'success' &&
                series.length > 0 &&
                series.map(({ name, slug: seriesSlug, uuid, chapters, status }, seriesIdx) => {
                    return (
                        <Series name={name} index={seriesIdx} key={uuid}>
                            {status === 'loading' &&
                                Array.from({ length: 4 }).map((_, idx) => {
                                    return <ChapterLoading key={idx} />;
                                })}
                            {status === 'error' && (
                                <div className="col-span-2 p-4 text-lg font-bold text-center text-red-500">
                                    An unknown error occurred while loading chapters!
                                </div>
                            )}
                            {status === 'success' && chapters.length === 0 && (
                                <div className="col-span-2 p-4 text-lg font-bold text-center text-gray-500">
                                    The author has not published any chapters yet :(
                                </div>
                            )}
                            {status === 'success' &&
                                chapters.length > 0 &&
                                chapters.map((chapter, chapterIdx) => {
                                    const {
                                        name,
                                        uuid,
                                        number,
                                        created_at,
                                        slug: chapterSlug,
                                    } = chapter;
                                    return (
                                        <Chapter
                                            name={name}
                                            date={created_at}
                                            number={number}
                                            url={`/novels/${novelSlug}/series/${seriesSlug}/chapter/${chapterSlug}`}
                                            locked={!(seriesIdx === 0 && chapterIdx <= 4)}
                                            key={uuid}
                                        />
                                    );
                                })}
                        </Series>
                    );
                })}

            {/* Skeleton loader for loading more series (should be after series) */}
            {paginationStatus === 'loading' &&
                Array.from({ length: 3 }).map((_, idx) => {
                    return <SeriesLoading key={idx} />;
                })}
            <div
                className={classNames(
                    'flex items-center justify-center pt-2 opacity-0 invisible pointer-events-none',
                    {
                        '!opacity-100 !visible !pointer-events-auto':
                            status === 'success' &&
                            nextPageUrl &&
                            paginationStatus !== 'error' &&
                            paginationStatus !== 'loading',
                    }
                )}
            >
                <button
                    type="button"
                    onClick={getMoreSeries}
                    disabled={
                        !(
                            status === 'success' &&
                            nextPageUrl &&
                            paginationStatus !== 'error' &&
                            paginationStatus !== 'loading'
                        )
                    }
                    className="inline-flex items-center h-12 px-4 font-bold transition-colors rounded-lg hover:bg-gray-200"
                >
                    Load More
                </button>
            </div>
        </div>
    );
};

export default NovelSeries;
