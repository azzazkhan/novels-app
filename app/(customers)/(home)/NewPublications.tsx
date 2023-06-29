'use client';

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from 'components/common';
import classNames from 'classnames';
import novels from 'data/novels';

import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/pagination';

interface Props {
    className?: ClassName;
}

const NewPublications: FC<Props> = ({ className }) => {
    return (
        <div className={classNames(className)}>
            <Container>
                <h2 className="mb-4 text-3xl font-bold">New Publications</h2>
            </Container>

            <Container wrapperClassName="max-sm:max-w-full" className="max-sm:mx-0">
                <Swiper
                    slidesPerView="auto"
                    className="select-none h-76 lg:h-80"
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet bg-black !rounded-full opacity-40',
                        bulletActiveClass:
                            'swiper-pagination-bullet-active !bg-primary !opacity-100',
                    }}
                    modules={[Pagination]}
                    freeMode
                >
                    {novels.map((novel, idx) => {
                        const { title, slug, image } = novel;
                        const [isFirst, isLast] = [idx === 0, idx === novels.length - 1];

                        return (
                            <SwiperSlide
                                className={classNames('!w-[auto]', {
                                    'max-sm:ml-[calc(2.5%+1rem)]': isFirst,
                                    'max-sm:mr-[calc(2.5%+1rem)]': isLast,
                                })}
                                key={idx}
                            >
                                <Link
                                    href={`/novels/${slug}`}
                                    className={classNames('block', { 'ml-4': idx > 0 })}
                                >
                                    <article className="w-36 lg:w-44">
                                        <div className="mb-1 overflow-hidden rounded-lg h-52 w-36 lg:h-60 lg:w-44">
                                            <Image
                                                src={image}
                                                className="object-cover w-full h-full mb-2 transition-transform duration-500 transform hover:scale-105"
                                                loading="lazy"
                                                placeholder="blur"
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
            </Container>
        </div>
    );
};

export default NewPublications;
