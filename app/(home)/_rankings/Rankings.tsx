import { Fragment, type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';
import { Container } from 'components/common';
import novels from 'data/novels';
import Image from 'next/image';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface Props
    extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'className'> {
    className?: ClassName;
}

const Rankings: FC<Props> = (props) => {
    return (
        <Container {...props}>
            <h2 className="mb-4 text-2xl md:text-3xl font-bold">Rankings</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {['Most Viewed', 'Most Liked', 'User Rated'].map((title, stackIdx) => {
                    return (
                        <div key={stackIdx}>
                            <h3 className="rank-title">{title}</h3>
                            <div className="flex flex-col space-y-6 md:space-y-4 mx-4">
                                {novels.slice(0, 5).map((novel, idx) => {
                                    const { title, image, slug } = novel;
                                    const color = {
                                        'text-rose-500': idx === 0,
                                        'text-amber-500': idx === 1,
                                        'text-emerald-500': idx === 2,
                                        'text-gray-700': idx > 2,
                                    };

                                    return (
                                        <div
                                            className="flex justify-between items-stretch"
                                            key={idx}
                                        >
                                            <Link
                                                href={`/novels/${slug}`}
                                                title={`Read ${title}`}
                                                className="flex-shrink-0"
                                            >
                                                <Image
                                                    src={image}
                                                    className="h-22 w-16 rounded-lg object-cover"
                                                    alt={title}
                                                />
                                            </Link>
                                            <span
                                                className={classNames(
                                                    'text-2xl w-[2ch] flex-shrink-0 font-bold mt-2 ml-2 mr-0',
                                                    color
                                                )}
                                            >
                                                {idx + 1}
                                            </span>
                                            <div className="flex-1 overflow-hidden">
                                                <Link
                                                    href={`/novels/${slug}`}
                                                    title={`Read ${title}`}
                                                    className="text-lg font-bold w-full whitespace-nowrap truncate hover:underline block"
                                                >
                                                    {title}
                                                </Link>

                                                {/* Views counts */}
                                                {stackIdx === 0 && (
                                                    <div className="flex items-center space-x-2">
                                                        <FontAwesomeIcon
                                                            icon={faEye}
                                                            className="text-blue-500"
                                                        />
                                                        <span className="text-sm text-gray-700 mt-0.5">
                                                            485K Likes
                                                        </span>
                                                    </div>
                                                )}

                                                {/* Reactions counts */}
                                                {stackIdx === 1 && (
                                                    <div className="flex items-center space-x-2">
                                                        <FontAwesomeIcon
                                                            icon={faHeart}
                                                            className="text-rose-500"
                                                        />
                                                        <span className="text-sm text-gray-700 mt-0.5">
                                                            485K Likes
                                                        </span>
                                                    </div>
                                                )}

                                                {/* Rating stars and count */}
                                                {stackIdx === 2 && (
                                                    <Fragment>
                                                        <div className="flex items-center mt-1 space-x-px">
                                                            {Array.from({
                                                                length: 5,
                                                            }).map((_, idx) => {
                                                                return (
                                                                    <FontAwesomeIcon
                                                                        icon={faStar}
                                                                        className="text-xs text-amber-500"
                                                                        key={idx}
                                                                    />
                                                                );
                                                            })}
                                                        </div>
                                                        <p className="text-gray-700 text-sm mt-2">
                                                            48K Reviews
                                                        </p>
                                                    </Fragment>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};

export default Rankings;
