import { FC } from 'react';

const Loading: FC = () => {
    return (
        <li>
            <div className="relative items-center justify-center hidden w-10 h-10 rounded-full lg:flex skeleton" />
        </li>
    );
};

export default Loading;
