'use client';

import { faApple, faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { FC } from 'react';

interface Item {
    color: string;
    icon: FontAwesomeIconProps['icon'];
    title: string;
    iconColor?: string;
}

const items: Item[] = [
    { color: '#1877F2', icon: faFacebookF, title: 'Login with your Facebook acount' },
    { color: '#1DA1F2', icon: faTwitter, title: 'Login with your X account' },
    { color: '#EA4335', icon: faGoogle, title: 'Login with your Google account' },
    { color: '#000000', icon: faApple, title: 'Login with your Apple ID', iconColor: '#FFFFFF' },
];

interface Props {
    title?: string;
    className?: ClassName;
}

const SocialIcons: FC<Props> = ({ title = 'or continue with', className }) => {
    return (
        <div className={classNames(className)}>
            <div className="block py-4 text-center text-gray-400">{title}</div>

            <div className="grid grid-cols-4 gap-2 mx-4">
                {items.map(({ icon, color, title, iconColor }, idx) => {
                    return (
                        <button
                            type="button"
                            style={
                                {
                                    '--brand-color': color,
                                    '--text-color': iconColor || color,
                                } as any
                            }
                            className="h-10 text-white text-[var(--text-color)] flex items-center justify-center rounded-full transition-colors duration-300 hover:text-white hover:bg-[var(--brand-color)]"
                            title={title}
                            key={idx}
                        >
                            <FontAwesomeIcon icon={icon} className="max-h-4" />
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default SocialIcons;
