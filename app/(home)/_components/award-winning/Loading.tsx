import type { FC } from 'react';

const Loading: FC = () => {
    return (
        <div className="overflow-hidden h-192 sm:h-96">
            <div className="!h-176 sm:!h-88 max-sm:px-[calc(2.5%+1rem)]">
                <div className="grid w-full h-full grid-cols-1 gap-6 sm:grid-cols-2">
                    {Array.from({ length: 4 }).map((_, idx) => {
                        return (
                            <div className="flex items-center space-x-2 rounded-lg" key={idx}>
                                {/* Thumbnail */}
                                <div className="flex-shrink-0 block w-24 rounded-lg h-36 skeleton" />

                                {/* Content */}
                                <div className="flex flex-col flex-1 h-36">
                                    {/* Title */}
                                    <div className="block w-full h-5 rounded-md skeleton" />

                                    {/* Stars */}
                                    <div className="block h-5 mt-2 rounded-md w-14 skeleton" />

                                    {/* Author */}
                                    <div className="block h-5 mt-2 rounded-md w-36 skeleton" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Loading;
