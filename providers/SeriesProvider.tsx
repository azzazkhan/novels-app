'use client';

import { FC, ReactNode, useMemo, useState } from 'react';
import type { Chapter, Series } from 'types/resources';
import { AxiosError, AxiosResponse } from 'axios';
import { SeriesContext, SeriesContextValue as Context } from 'contexts';
import { useAxios } from 'hooks';

interface Props {
    novelSlug: string;
    children?: ReactNode;
}

const SeriesProvider: FC<Props> = ({ novelSlug, children }) => {
    const axios = useAxios();
    const [series, setSeries] = useState<Context['series']>([]);
    const [status, setStatus] = useState<Context['status']>();
    const [nextPageUrl, setNextPageUrl] = useState<string>();
    const [paginationStatus, setPaginationStatus] = useState<Context['paginationStatus']>();

    const getInitialSeries: Context['getInitialSeries'] = (force, limit = 20) => {
        // If we've already fetched series data or request is already sent then
        // do not initialize again
        if ((!force && series.length) || status === 'loading') return;

        setStatus('loading');
        axios
            .get(`v1/novels/${novelSlug}/series?limit=${limit}`)
            .then((res: AxiosResponse<PaginatedResponse<Series[]>>) => {
                const { data, next_page_url } = res.data;
                setSeries(() => data.map((series) => ({ ...series, chapters: [] })));
                setNextPageUrl(next_page_url);
                setStatus('success');
            })
            .catch((error: AxiosError) => {
                console.error(error);
                setStatus('error');
            });
    };

    const getMoreSeries: Context['getMoreSeries'] = () => {
        // We do not have further records or pagination request is already sent
        if (!nextPageUrl || paginationStatus === 'loading') return;

        setPaginationStatus('loading');
        axios
            .get(nextPageUrl)
            .then((res: AxiosResponse<PaginatedResponse<Series[]>>) => {
                const { data, next_page_url } = res.data;
                const series: Context['series'] = data.map((series) => ({
                    ...series,
                    chapters: [],
                }));
                setSeries((current) => [...current, ...series]);
                setNextPageUrl(next_page_url);
                setPaginationStatus('success');
            })
            .catch((error: AxiosError) => {
                console.error(error);
                setPaginationStatus('error');
            });
    };

    const getChapters: Context['getChapters'] = (seriesIndex: number, force, limit = 50) => {
        // If we've already fetched chapters data or request is already sent
        // then do not initialize again
        if (
            (!force && series[seriesIndex].chapters.length) ||
            series[seriesIndex].status === 'loading'
        )
            return;

        // Set the status of specified series to loading
        setSeries((current) => {
            return current.map(({ status, ...series }, idx) => {
                return { ...series, status: idx === seriesIndex ? 'loading' : status };
            });
        });

        axios
            .get(
                `v1/novels/${novelSlug}/series/${series[seriesIndex].slug}/chapters?limit=${limit}`
            )
            .then((res: AxiosResponse<PaginatedResponse<Omit<Chapter, 'content'>[]>>) => {
                const { data, next_page_url } = res.data;

                // Loop through all series and set the status and chapters of
                // specified series
                setSeries((current) => {
                    return current.map((series, idx) => {
                        if (idx !== seriesIndex) return series;

                        return {
                            ...series,
                            chapters: data,
                            nextPageUrl: next_page_url,
                            status: 'success',
                        };
                    });
                });
            })
            .catch((error: AxiosError) => {
                console.error(error);
                // Set the status of specified series to error
                setSeries((current) => {
                    return current.map(({ status, ...series }, idx) => {
                        return { ...series, status: idx === seriesIndex ? 'error' : status };
                    });
                });
            });
    };

    const getMoreChapters: Context['getMoreChapters'] = (seriesIndex: number) => {
        // No new records available or request is already sent
        if (!series[seriesIndex].nextPageUrl || series[seriesIndex].paginationStatus === 'loading')
            return;

        // Set the pagination status of specified series to loading
        setSeries((current) => {
            return current.map(({ paginationStatus, ...series }, idx) => {
                return {
                    ...series,
                    paginationStatus: idx === seriesIndex ? 'loading' : paginationStatus,
                };
            });
        });

        axios
            .get(series[seriesIndex].nextPageUrl!)
            .then((res: AxiosResponse<PaginatedResponse<Omit<Chapter, 'content'>[]>>) => {
                const { data, next_page_url } = res.data;

                // Loop through all series and set the pagination status and
                // append fetched chapters to the series
                setSeries((current) => {
                    return current.map((series, idx) => {
                        if (idx !== seriesIndex) return series;

                        return {
                            ...series,
                            chapters: [...series.chapters, ...data],
                            nextPageUrl: next_page_url,
                            paginationStatus: 'success',
                        };
                    });
                });
            })
            .catch((error: AxiosError) => {
                console.error(error);
                // Set the pagination status of specified series to error
                setSeries((current) => {
                    return current.map(({ status, ...series }, idx) => {
                        return { ...series, status: idx === seriesIndex ? 'error' : status };
                    });
                });
            });
    };

    const value: Context = useMemo(
        () => ({
            series,
            status,
            paginationStatus,
            nextPageUrl,
            getInitialSeries,
            getMoreSeries,
            getChapters,
            getMoreChapters,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [series, status, paginationStatus, nextPageUrl]
    );

    return <SeriesContext.Provider value={value}>{children}</SeriesContext.Provider>;
};

export default SeriesProvider;
