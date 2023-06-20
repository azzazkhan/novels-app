'use client';

import type { FC } from 'react';
import { MantineProvider as Provider, MantineProviderProps as Props } from '@mantine/core';

const MantineProvider: FC<Props> = ({ children }) => {
    return <Provider>{children}</Provider>;
};

export default MantineProvider;
