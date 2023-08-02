import { useContext } from 'react';
import { ReadingUtilsContext } from 'contexts';

export const useReader = () => useContext(ReadingUtilsContext);
