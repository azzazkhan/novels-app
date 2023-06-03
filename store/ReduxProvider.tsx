'use client';

import { FC, ReactNode } from 'react';
import { store } from '.';
import { Provider } from 'react-redux';

interface Props {
    children: ReactNode;
}

const ReduxProvider: FC<Props> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
