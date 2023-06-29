import { FC, ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props {
    background: StaticImageData;
    title: string;
    content: ReactNode;
    children?: ReactNode;
}

const SlideItem: FC<Props> = ({ background, title, content, children }) => {
    return (
        <div className="max-sm:max-w-[95%] max-sm:mx-auto h-full max-sm:px-4">
            <div className="relative w-full h-full p-4 pb-8 overflow-hidden shadow cursor-pointer select-none sm:p-6 sm:pb-10 md:pt-8 md:pb-12 lg:pt-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl md:rounded-2xl">
                <Image
                    src={background}
                    fill
                    className="top-0 left-0 h-full w-full absolute object-cover object-center z-[-1]"
                    placeholder="blur"
                    alt={title}
                />

                <div className="flex flex-col items-start justify-end h-full md:max-w-lg lg:max-w-xl 2xl:max-w-3xl">
                    <h2 className="mb-1 text-xl font-bold text-white md:text-3xl sm:text-2xl font-special xl:text-4xl 2xl:text-5xl md:mb-2">
                        {title}
                    </h2>

                    {content && (
                        <p className="text-sm text-gray-100 line-clamp-3 md:text-base xl:text-lg">
                            {content}
                        </p>
                    )}
                </div>
                <div className="flex items-center justify-center">{children}</div>
            </div>
        </div>
    );
};

export default SlideItem;
