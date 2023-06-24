'use client';

import { FC } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from 'components/common';
import novels from 'data/novels';
import classNames from 'classnames';
import Link from 'next/link';

const NewPublications: FC = () => {
    return (
        <Container className="mt-36">
            <h2 className="mb-4 text-3xl font-bold">New Publications</h2>

            <Swiper slidesPerView="auto" freeMode>
                {novels.map((novel, idx) => {
                    const { title, slug, image } = novel;

                    return (
                        <SwiperSlide className="!w-[auto]" key={idx}>
                            <Link
                                href={`/novels/${slug}`}
                                className={classNames('block', { 'ml-4': idx > 0 })}
                            >
                                <article className="w-44">
                                    <div className="mb-1 overflow-hidden rounded-lg h-60 w-44">
                                        <Image
                                            src={image}
                                            className="object-cover w-full h-full mb-2 transition-transform duration-500 transform hover:scale-105"
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
    );
};

export default NewPublications;
