import type { FC } from 'react';

const Loading: FC = () => {
    return (
        <div className="flex w-full space-x-4 overflow-x-hidden h-76 lg:h-82">
            {Array.from({ length: 10 }).map((_, idx) => {
                return (
                    <div className="w-36 lg:w-44" key={idx}>
                        <div className="mb-2 rounded-lg h-52 w-36 lg:h-60 lg:w-44 skeleton" />

                        <div className="w-full h-6 rounded-md skeleton" />
                    </div>
                );
            })}
        </div>
    );
};

export default Loading;
