'use client';

import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { AwardedNovels } from './queries';
import { prefixAssetPath } from 'utils';

interface Props
    extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'className'> {
    className?: ClassName;
    novels: AwardedNovels[];
}

const AwardWinningSlider: FC<Props> = ({ novels, className, ...props }) => {
    const itemsPerSlide = 4;
    const slideCount = Math.ceil(novels.length / itemsPerSlide);

    return (
        <div className={classNames(className)} {...props}>
            <Swiper
                slidesPerView={1}
                className="overflow-hidden h-192 sm:h-96"
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet bg-black !rounded-full opacity-40',
                    bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary !opacity-100',
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                speed={700}
                spaceBetween={20}
            >
                {Array.from({ length: slideCount }).map((_, idx) => {
                    const startIdx = idx * itemsPerSlide;
                    const selectedNovels = novels.slice(startIdx, startIdx + itemsPerSlide);

                    return (
                        <SwiperSlide
                            key={idx}
                            className="!h-176 sm:!h-88 max-sm:px-[calc(2.5%+1rem)]"
                        >
                            <div className="grid w-full h-full grid-cols-1 gap-6 sm:grid-cols-2">
                                {selectedNovels.map((novel, idx) => {
                                    const { title, slug, thumbnail, author, categories } = novel;

                                    return (
                                        <article
                                            className="flex items-center space-x-2 rounded-lg"
                                            key={idx}
                                        >
                                            <Link
                                                href={`/novels/${slug}`}
                                                title={`Read ${title}`}
                                                className="flex-shrink-0 block w-24 h-36"
                                            >
                                                <Image
                                                    src={prefixAssetPath(thumbnail)}
                                                    loading="lazy"
                                                    height={144}
                                                    width={96}
                                                    className="object-cover object-center w-24 rounded-lg h-36"
                                                    alt={title}
                                                />
                                            </Link>
                                            <div className="flex flex-col h-36">
                                                <Link
                                                    href={`/novels/${slug}`}
                                                    title={`Read ${title}`}
                                                >
                                                    <h1 className="font-bold leading-5 line-clamp-2">
                                                        {title}
                                                    </h1>
                                                </Link>
                                                <div className="flex items-center my-1 space-x-px">
                                                    {Array.from({
                                                        length: 5,
                                                    }).map((_, idx) => {
                                                        return (
                                                            <FontAwesomeIcon
                                                                icon={faStar}
                                                                className="w-4 h-4 text-sm text-amber-500"
                                                                key={idx}
                                                            />
                                                        );
                                                    })}
                                                </div>
                                                <span className="text-xs text-gray-700">
                                                    Written by{' '}
                                                    <Link
                                                        href={`/authors/${author.slug}`}
                                                        className="font-bold hover:underline"
                                                        title="View author Turtle Me's profile"
                                                    >
                                                        {author.name}
                                                        {author.alt_name && (
                                                            <>
                                                                {' '}
                                                                <span className="whitespace-nowrap">
                                                                    ({author.alt_name})
                                                                </span>
                                                            </>
                                                        )}
                                                    </Link>
                                                </span>

                                                {categories && (
                                                    <div className="flex flex-wrap mt-2 text-xs">
                                                        {categories
                                                            .slice(0, 4)
                                                            .map(({ name, slug }, idx) => {
                                                                return (
                                                                    <span key={idx}>
                                                                        <Link
                                                                            href={`/categories/${slug}`}
                                                                            title={`View more novels in ${name} category`}
                                                                            className="font-medium hover:underline"
                                                                        >
                                                                            {name}
                                                                        </Link>
                                                                        {idx <
                                                                            categories.length -
                                                                                1 && <>,&nbsp;</>}
                                                                    </span>
                                                                );
                                                            })}
                                                    </div>
                                                )}
                                            </div>
                                        </article>
                                    );
                                })}

                                {/* Create empty columns to prevent col span leakage */}
                                {selectedNovels.length < itemsPerSlide &&
                                    Array.from({
                                        length: itemsPerSlide - selectedNovels.length,
                                    }).map((_, idx) => {
                                        return <div className="w-24 h-36" key={idx} />;
                                    })}
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default AwardWinningSlider;
