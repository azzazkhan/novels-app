import { Fragment, type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react';
import { Container } from 'components/common';
import novels from 'data/novels';
import Image from 'next/image';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface Props
    extends Omit<
        DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        'className' | 'ref'
    > {
    className?: ClassName;
}

const Rankings: FC<Props> = (props) => {
    return (
        <Container {...props}>
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Rankings</h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {['Most Viewed', 'Most Liked', 'User Rated'].map((title, stackIdx) => {
                    return (
                        <div key={stackIdx}>
                            <h3 className="rank-title">{title}</h3>
                            <div className="flex flex-col mx-4 space-y-6 md:space-y-4">
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
                                            className="flex items-stretch justify-between"
                                            key={idx}
                                        >
                                            <Link
                                                href={`/novels/${slug}`}
                                                title={`Read ${title}`}
                                                className="flex-shrink-0"
                                            >
                                                <Image
                                                    src={image}
                                                    className="object-cover w-16 rounded-lg h-22"
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
                                                    className="block w-full text-lg font-bold truncate whitespace-nowrap hover:underline"
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
                                                        <p className="mt-2 text-sm text-gray-700">
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
