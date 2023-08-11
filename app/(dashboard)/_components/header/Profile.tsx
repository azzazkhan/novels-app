'use client';

import { FC } from 'react';
import { Avatar, AvatarImage } from 'components/ui/avatar';
import { useAuth } from 'hooks';
import avatar from 'assets/icons/avatar.jpg';

const Profile: FC = () => {
    const { loading, user } = useAuth();

    return (
        <Avatar>
            {loading && <div className="w-11 h-11 skeleton" />}
            {!loading && user && (
                <AvatarImage src={user.profile.avatar || avatar.src} alt={user.name} />
            )}
        </Avatar>
    );
};

export default Profile;
