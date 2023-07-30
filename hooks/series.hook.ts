import { useContext } from 'react';
import { SeriesContext } from 'contexts';

export const useSeries = () => useContext(SeriesContext);
