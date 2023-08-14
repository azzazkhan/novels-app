'use client';

import { Button } from 'components/ui/button';
import { useTheme } from 'hooks';
import { Moon, Sun } from 'lucide-react';
import { FC } from 'react';

const ThemeToggler: FC = () => {
    const { setTheme } = useTheme();

    return (
        <Button onClick={() => setTheme()} variant="ghost" size="icon-md" shape="rounded">
            <Sun className="h-4.5 w-4.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4.5 w-4.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
};

export default ThemeToggler;
