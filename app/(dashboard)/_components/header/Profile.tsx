'use client';

import { FC } from 'react';
import { Avatar, AvatarImage } from 'components/ui/avatar';
import { Button } from 'components/ui/button';
import { useAuth } from 'hooks';

import avatar from 'assets/icons/avatar.jpg';

const Profile: FC = () => {
    const { loading, user } = useAuth();

    return (
        <Button variant="ghost" size="icon-md" shape="rounded">
            <Avatar className="w-6 h-6">
                {loading && <div className="w-11 h-11 skeleton" />}
                {!loading && user && (
                    <AvatarImage src={user.profile.avatar || avatar.src} alt={user.name} />
                )}
            </Avatar>
        </Button>
    );
};

export default Profile;
