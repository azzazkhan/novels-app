'use client';

import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import novels from 'data/novels';

interface Props
    extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'className'> {
    className?: ClassName;
}

const CollectionsSlider: FC<Props> = ({ className, ...props }) => {
    return (
        <div className={classNames('', className)} {...props}>
            <Swiper
                slidesPerView={1}
                className="h-192 sm:h-96"
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
                {Array.from({ length: 3 }).map((_, idx) => {
                    return (
                        <SwiperSlide
                            key={idx}
                            className="!h-176 sm:!h-88 max-sm:px-[calc(2.5%+1rem)]"
                        >
                            <div className="grid w-full h-full grid-cols-1 gap-6 sm:grid-cols-2">
                                {novels.slice(0, 4).map((novel, idx) => {
                                    const { title, slug, image, categories } = novel;
                                    const categorySlugs = Object.keys(categories).slice(0, 5);

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
                                                    src={image}
                                                    loading="lazy"
                                                    placeholder="blur"
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
                                                                className="text-sm text-amber-500"
                                                                key={idx}
                                                            />
                                                        );
                                                    })}
                                                </div>
                                                <span className="text-xs text-gray-700">
                                                    Written by{' '}
                                                    <Link
                                                        href="/authors/turtle-me"
                                                        className="font-bold hover:underline"
                                                        title="View author Turtle Me's profile"
                                                    >
                                                        TurtleMe (漫客文化)
                                                    </Link>
                                                </span>

                                                {categories && (
                                                    <div className="flex flex-wrap mt-2 text-xs">
                                                        {categorySlugs.map((slug, idx) => {
                                                            const name = categories[slug];

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
                                                                        categorySlugs.length -
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
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default CollectionsSlider;
