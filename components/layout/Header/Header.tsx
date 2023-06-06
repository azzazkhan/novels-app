import type { FC } from 'react';
import Link from 'next/link';
import { faBarsStaggered, faCompass, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'components/common';
import { Settings } from './widgets/Settings';
import NavItem from './NavItem';
import Search from './widgets/Search';
import Profile from './widgets/Profile';

const Header: FC = () => {
    return (
        <header className="h-16 shadow-md">
            <Container className="flex items-center h-full space-x-20" wrapperClassName="h-full">
                <Link href="/" className="text-2xl font-bold text-primary">
                    {process.env.NEXT_PUBLIC_APP_NAME}
                </Link>

                <nav className="flex items-center justify-between flex-1">
                    <ul className="flex items-center space-x-2">
                        <NavItem href="/" icon={faCompass}>
                            Browse
                        </NavItem>
                        <NavItem href="/rankings" icon={faBarsStaggered}>
                            Rankings
                        </NavItem>
                        <NavItem href="/create" icon={faPenNib}>
                            Create
                        </NavItem>
                    </ul>

                    <ul className="flex items-center space-x-2.5">
                        <Search />
                        <Settings />
                        <Profile />
                    </ul>
                </nav>
            </Container>
        </header>
    );
};

export default Header;
