'use client';

import { FC } from 'react';
import { Button } from 'components/ui/button';
import { Moon } from 'lucide-react';

const Notifications: FC = () => {
    return (
        <Button variant="ghost" size="icon-md" shape="rounded">
            <Moon className="w-4.5 h-4.5" />
        </Button>
    );
};

export default Notifications;
