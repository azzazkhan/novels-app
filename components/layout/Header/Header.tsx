import type { FC } from 'react';
import Link from 'next/link';
import { Container } from 'components/common';
import Nav from './Nav';
import Hamburger from './Hamburger';
import Search from './widgets/Search';

const Header: FC = () => {
    return (
        <header className="fixed top-0 z-50 w-full h-16 bg-white border-b border-gray-200">
            <Container
                className="flex items-center justify-between h-full space-x-4 lg:space-x-20 lg:justify-start"
                wrapperClassName="h-full"
            >
                <Link href="/" className="text-2xl font-bold text-primary">
                    {process.env.NEXT_PUBLIC_APP_NAME}
                </Link>

                <Search
                    className="flex-1 hidden list-none sm:block md:hidden"
                    inputClassName="w-full"
                />

                <Nav />

                <Hamburger />
            </Container>
        </header>
    );
};

export default Header;
