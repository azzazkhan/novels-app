'use client';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Novel } from 'types/resources';
import { prefixAssetPath } from 'utils';

import 'swiper/css';
import 'swiper/css/pagination';

interface Props {
    novels: Novel[];
}

const Slider: FC<Props> = ({ novels }) => {
    return (
        <Swiper
            slidesPerView="auto"
            className="overflow-hidden select-none h-76 lg:h-82"
            pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet bg-black !rounded-full opacity-40',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary !opacity-100',
            }}
            modules={[Pagination]}
        >
            {novels.map((novel, idx) => {
                const { title, slug, thumbnail } = novel;

                return (
                    <SwiperSlide key={novel.id} className="!w-auto">
                        <Link
                            href={`/novels/${slug}`}
                            className={classNames('block', { 'ml-4': idx > 0 })}
                        >
                            <article className="w-36 lg:w-44">
                                <div className="mb-1 overflow-hidden rounded-lg h-52 w-36 lg:h-60 lg:w-44">
                                    <Image
                                        src={prefixAssetPath(thumbnail)}
                                        className="object-cover w-full h-full mb-2 transition-transform duration-500 transform hover:scale-105"
                                        height={208}
                                        width={144}
                                        loading="lazy"
                                        alt={title}
                                    />
                                </div>

                                <h1 className="font-semibold line-clamp-2">{title}</h1>
                            </article>
                        </Link>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Slider;
