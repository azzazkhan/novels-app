import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { faBarsStaggered, faCompass, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'components/common';
import { Settings } from './widgets/Settings';
import NavItem from './NavItem';
import Search from './widgets/Search';
import avatar from 'assets/icons/avatar.jpg';

const Header: FC = () => {
    return (
        <header className="h-16 shadow-md">
            <Container className="flex space-x-20 items-center h-full" wrapperClassName="h-full">
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

                        <li>
                            <div className="flex items-center justify-center bg-gray-300 rounded-full h-10 w-10 overflow-hidden cursor-pointer">
                                <Image src={avatar} height={40} alt="Avatar" />
                            </div>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    );
};

export default Header;
