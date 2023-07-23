import { FC, Suspense } from 'react';
import Image from 'next/image';
import { Container } from 'components/common';
import classNames from 'classnames';
import background from 'assets/images/illustrations/artist-drawing-manga.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import AwardWinningSliderWrapper from './AwardWinningSliderWrapper';
import Loading from './Loading';

interface Props {
    className?: ClassName;
}

const AwardWinning: FC<Props> = ({ className }) => {
    return (
        <Container
            wrapperClassName="max-sm:max-w-full"
            className={classNames(
                'grid grid-cols-1 gap-20 lg:grid-cols-5 lg:gap-x-10 xl:gap-x-20 xl:grid-cols-2 select-none max-sm:mx-0',
                className
            )}
        >
            <div className="relative overflow-hidden h-72 xl:h-96 md:h-80 md:mt-4 xl:mt-0 rounded-2xl bg-black/80 lg:col-span-2 xl:col-span-1 max-sm:max-w-[95%] max-sm:mx-4">
                <Image
                    src={background}
                    loading="lazy"
                    placeholder="blur"
                    className="absolute h-full w-full z-[-1] object-cover object-center"
                    alt="Writing Contest"
                />
                <div className="flex flex-col items-center justify-center w-full h-full p-6 space-y-6 text-white">
                    <div className="flex items-center space-x-1">
                        {Array.from({ length: 5 }).map((_, idx) => {
                            return (
                                <FontAwesomeIcon
                                    icon={faStar}
                                    className="text-2xl xl:text-3xl text-amber-500"
                                    key={idx}
                                />
                            );
                        })}
                    </div>
                    <div className="flex flex-col items-center space-y-1 text-center">
                        {/* text-4xl */}
                        <h3 className="text-2xl font-bold xl:text-3xl">Award Winning Novels</h3>
                        <p className="text-sm text-gray-100 md:text-base">
                            Our collection of award winning novels
                        </p>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-3 xl:col-span-1">
                <Suspense fallback={<Loading />}>
                    <AwardWinningSliderWrapper />
                </Suspense>
            </div>
        </Container>
    );
};

export default AwardWinning;
