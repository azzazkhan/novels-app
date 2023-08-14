'use client';

import { useLocalStorage } from '@mantine/hooks';
import { ThemeContext, ThemeContextValue } from 'contexts';
import { FC, ReactNode, useCallback, useEffect, useMemo } from 'react';

interface Props {
    children?: ReactNode;
}

const ThemeProvider: FC<Props> = ({ children }) => {
    const [theme, setTheme] = useLocalStorage<ThemeContextValue['theme']>({
        key: 'theme',
        defaultValue: 'light',
        getInitialValueInEffect: true,
    });

    const updateTheme: ThemeContextValue['setTheme'] = useCallback(
        (theme) => {
            if (theme) setTheme(theme);
            else setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
        },
        [setTheme]
    );

    useEffect(() => {
        if (theme === 'light' && document.body.classList.contains('dark'))
            document.body.classList.remove('dark');
        else if (theme === 'dark' && !document.body.classList.contains('dark'))
            document.body.classList.add('dark');
    });

    const value: ThemeContextValue = useMemo(
        () => ({ theme, setTheme: updateTheme }),
        [theme, updateTheme]
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
