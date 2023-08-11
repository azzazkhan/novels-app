'use client';

import { FC } from 'react';
import { Button } from 'components/ui/button';
import { Bell } from 'lucide-react';

const Notifications: FC = () => {
    return (
        <Button variant="outline" size="icon">
            <Bell className="w-4.5 h-4.5" />
        </Button>
    );
};

export default Notifications;
