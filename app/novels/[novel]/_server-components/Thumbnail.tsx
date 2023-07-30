import { FC } from 'react';
import Link from 'next/link';
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
                <Link
                    href={`/browser?type=${type}`}
                    className="absolute inline-flex items-center h-6 px-2.5 font-bold text-white uppercase bg-black rounded-full text-xxs top-2 left-2 select-none transition-colors hover:bg-gray-800"
                >
                    {itemType}
                </Link>
            )}

            {/* Ranking */}
            {rank && (
                <Link
                    href="/rankings"
                    className="absolute inline-flex items-center h-6 px-2.5 font-bold text-white uppercase bg-violet-900 rounded-full text-xxs top-2 right-2 select-none transition-colors hover:bg-violet-800"
                >
                    #{rank} Ranked
                </Link>
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
