'use client';

import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { Pagination, Autoplay, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames';
import { Container } from 'components/common';
import SlideItem from './SlideItem';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/virtual';
import 'swiper/css/pagination';

import slides from './slides';

interface Props
    extends Omit<
        DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        'className' | 'children' | 'ref'
    > {
    className?: ClassName;
}

const HeroSlider: FC<Props> = ({ className, ...props }) => {
    return (
        <Container
            wrapperClassName="max-sm:max-w-full"
            className={classNames('max-sm:mx-0', className)}
            {...props}
        >
            <Swiper
                modules={[Autoplay, Virtual, Pagination]}
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet !bg-white !rounded-full opacity-40',
                    bulletActiveClass: 'swiper-pagination-bullet-active !w-6 !opacity-100',
                }}
                autoplay={{ delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                speed={700}
                className="relative overflow-x-hidden aspect-[16/7] sm:rounded-xl md:rounded-2xl min-h-[14rem] w-full"
                spaceBetween={50}
                slidesPerView={1}
                virtual={{ addSlidesAfter: 1, addSlidesBefore: 1 }}
                loop
            >
                {slides.map((slide, idx) => {
                    return (
                        <SwiperSlide key={idx} virtualIndex={idx}>
                            <SlideItem
                                background={slide.image}
                                title={slide.title}
                                content={slide.content}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Container>
    );
};

export default HeroSlider;
