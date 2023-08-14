'use client';

import { createContext } from 'react';

type Theme = 'dark' | 'light';

export interface ThemeContextValue {
    theme: Theme;
    setTheme: (theme?: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
    theme: 'light',
    setTheme: () => {},
});
