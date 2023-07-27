import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import classNames from 'classnames';
import { prefixAssetPath } from 'utils';

interface Props {
    type: 'comic' | 'novel';
    rank?: number;
    title: string;
    image: StaticImageData | string;
    className?: ClassName;
}

const Thumbnail: FC<Props> = ({ image, title, type, rank, className }) => {
    const itemType = (() => {
        if (type === 'comic') return 'Comic';
        if (type === 'novel') return 'Novel';

        return null;
    })();

    return (
        <div
            className={classNames(
                'w-full h-64 md:h-auto md:aspect-[10/13] shadow rounded-2xl overflow-hidden relative',
                className
            )}
        >
            {/* Type Novel/Comic */}
            {itemType && (
                <span className="absolute inline-flex items-center h-6 px-2.5 font-bold text-white uppercase bg-black rounded-full text-xxs top-2 left-2">
                    {itemType}
                </span>
            )}

            {/* Ranking */}
            {rank && (
                <span className="absolute inline-flex items-center h-6 px-2.5 font-bold text-white uppercase bg-violet-900 rounded-full text-xxs top-2 right-2">
                    #{rank} Ranked
                </span>
            )}

            <Image
                src={typeof image === 'string' ? prefixAssetPath(image) : image}
                height={280}
                width={364}
                className="object-cover w-full h-full"
                alt={title}
            />
        </div>
    );
};

export default Thumbnail;
