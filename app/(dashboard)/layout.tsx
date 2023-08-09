import type { FC, ReactNode } from 'react';
import { ThemeProvider } from 'providers';

import 'styles/global.css';

interface Props {
    children?: ReactNode;
}

const DashboardLayout: FC<Props> = ({ children }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    );
};

export default DashboardLayout;
