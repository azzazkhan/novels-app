'use client';

import { FC, AnchorHTMLAttributes, MouseEventHandler, useCallback } from 'react';
import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isValidPath } from 'utils';

interface Props
    extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps | 'className'>,
        Omit<LinkProps, 'href'> {
    className?: ClassName;
    icon?: IconProp;
    href?: LinkProps['href'];
}

const NavItem: FC<Props> = ({ href = '#', icon, className, children, ...props }) => {
    const pathname = usePathname();
    const path = typeof href === 'string' ? href : href.href || '';

    const active = isValidPath(path) ? pathname?.startsWith(path) : false;

    const handleNavigation: MouseEventHandler<HTMLAnchorElement> = useCallback(
        (event) => {
            // Prevent navigation if no URL is provided
            // eslint-disable-next-line no-script-url
            if (!href || href === '#' || href === 'javascript:void(0)') event.preventDefault();

            // If `onClick` event handler was provided, then trigger it
            props.onClick && props.onClick(event);
        },
        [href, props]
    );

    return (
        <li>
            <Link
                href={href}
                onClick={handleNavigation}
                className={classNames(
                    'flex items-center justify-center p-2.5',
                    { 'text-gray-700 font-medium hover:text-primary transition-colors': !active },
                    { 'text-primary font-bold': active },
                    className
                )}
            >
                {icon && <FontAwesomeIcon className="inline-block h-4 mr-2" icon={icon} />}
                {children}
            </Link>
        </li>
    );
};

export default NavItem;
