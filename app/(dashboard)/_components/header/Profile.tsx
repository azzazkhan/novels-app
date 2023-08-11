'use client';

import { FC } from 'react';
import { Button } from 'components/ui/button';
import { UserCircle2 } from 'lucide-react';

const Profile: FC = () => {
    return (
        <Button variant="outline" size="icon">
            <UserCircle2 className="w-4.5 h-4.5" />
        </Button>
    );
};

export default Profile;
