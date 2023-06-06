'use client';

import type { FC, MouseEventHandler } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { toggleNavbar } from 'store/slices';
import classNames from 'classnames';

const Hamburger: FC = () => {
    const dispatch = useAppDispatch();
    const toggled = useAppSelector((state) => state.layout.navbarOpened);

    const handleToggle: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();

        dispatch(toggleNavbar());
    };

    // const [toggled, setToggled] = useState(false);

    return (
        <button
            type="button"
            onClick={handleToggle}
            className={classNames(
                'flex items-center justify-center w-12 h-12 text-2xl hover:bg-gray-100 rounded-full anicon lg:hidden flex-grow-0 flex-shrink-0',
                { toggled }
            )}
        >
            A
        </button>
    );
};

export default Hamburger;
