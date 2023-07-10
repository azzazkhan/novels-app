'use client';

import type { FC, ReactNode } from 'react';
import { SessionProvider as AuthSessionProvider } from 'next-auth/react';

interface Props {
    children?: ReactNode;
}

const SessionProvider: FC<Props> = ({ children }) => {
    return <AuthSessionProvider>{children}</AuthSessionProvider>;
};

export default SessionProvider;
