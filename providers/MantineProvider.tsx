'use client';

import type { FC, ReactNode } from 'react';
import { MantineProvider as Provider } from '@mantine/core';

interface Props {
    children?: ReactNode;
}

const MantineProvider: FC<Props> = ({ children }) => {
    return <Provider>{children}</Provider>;
};

export default MantineProvider;
