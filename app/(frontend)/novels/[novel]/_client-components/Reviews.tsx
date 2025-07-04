import type { FC } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faReply, faStar } from '@fortawesome/free-solid-svg-icons';
import reviews from '../_server-components/reviews';

interface Props {
    className?: ClassName;
    type: 'comic' | 'novel';
}

const Reviews: FC<Props> = ({ className, type }) => {
    const itemType = (() => {
        if (type === 'comic') return 'Comic';
        if (type === 'novel') return 'Novel';

        return null;
    })();

    return (
        <div className={classNames('flex flex-col', className)}>
            <div className="flex items-center mb-4 space-x-6">
                <h4 className="text-2xl font-bold text-gray-800">Reviews</h4>
                <div className="flex-1 h-px bg-gray-300" />
            </div>
            <div className="grid mb-8 gap-y-10 sm:grid-cols-12 gap-x-4 md:grid-cols-1 md:gap-x-10 lg:grid-cols-12">
                {/* Review groups (bars) */}
                <div className="sm:col-span-7 md:col-span-1 lg:col-span-7">
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1 text-xl">
                            <FontAwesomeIcon icon={faStar} className="text-amber-400" />
                            <FontAwesomeIcon icon={faStar} className="text-amber-400" />
                            <FontAwesomeIcon icon={faStar} className="text-amber-400" />
                            <FontAwesomeIcon icon={faStar} className="text-amber-400" />
                            <FontAwesomeIcon icon={faStar} className="text-black/20" />
                        </div>
                        <span className="text-sm">Based on 5786 reviews</span>
                    </div>

                    <div className="flex flex-col max-w-sm mt-6 space-y-2">
                        {[63, 10, 6, 12, 9].map((ratio, idx) => {
                            return (
                                <div className="flex items-center space-x-4" key={idx}>
                                    <div className="flex items-center space-x-2">
                                        <span className="block">{idx + 1}</span>
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="text-lg transform -translate-y-px fas fa-star text-amber-400"
                                        />
                                    </div>
                                    <div className="relative flex-1 h-3 bg-gray-200 border border-gray-300 rounded-full">
                                        <div
                                            className="absolute h-3 transform -translate-y-1/2 rounded-full top-1/2 -left-px bg-amber-400"
                                            style={{ width: `calc(${ratio}% + 1px)` }}
                                        />
                                    </div>
                                    <span className="w-10 text-sm">{ratio}%</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Write review section */}
                <div className="flex flex-col items-center justify-center text-center sm:col-span-5 md:col-span-1 lg:col-span-5">
                    <h3 className="mb-1 text-xl font-semibold">Share your thoughts</h3>
                    <p className="text-sm text-gray-700">
                        If you&apos;ve read this <span className="lowercase">{itemType}</span>, then
                        share your thoughts with other readers
                    </p>
                    <button
                        type="button"
                        className="inline-flex text-primary font-bold text-sm h-10 px-3.5 rounded-full items-center transition-colors hover:bg-blue-100 mt-2.5"
                    >
                        Write a Review
                    </button>
                </div>
            </div>

            {/* User reviews */}
            <div className="space-y-4">
                {reviews.map(({ author, content, date, stars }, idx) => {
                    return (
                        <div className="flex max-w-xl space-x-4" key={idx}>
                            <div className="flex-grow-0 flex-shrink-0 bg-gray-200 border border-gray-300 rounded-full h-11 w-11" />
                            <div className="flex-1">
                                <h5 className="font-medium">{author}</h5>
                                <span className="text-sm text-gray-700">{date}</span>
                                <div className="flex items-center mt-1 space-x-1">
                                    <div className="flex items-center space-x-0.5">
                                        {Array.from({ length: stars }).map((_, idx) => {
                                            return (
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="text-amber-400"
                                                    key={idx}
                                                />
                                            );
                                        })}
                                        {Array.from({ length: 5 - stars }).map((_, idx) => {
                                            return (
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    className="text-black/20"
                                                    key={idx}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                                <p className="mt-2 text-sm text-gray-600">{content}</p>
                                <div className="flex flex-wrap items-center mt-1">
                                    <button
                                        type="button"
                                        className="inline-flex items-center space-x-1.5 h-7 rounded-lg text-gray-500 transition-colors text-xs px-3 hover:bg-gray-200 hover:text-black mb-2 mr-2"
                                    >
                                        <FontAwesomeIcon icon={faReply} />
                                        <span>Reply</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-flex items-center space-x-1.5 h-7 rounded-lg text-gray-500 transition-colors text-xs px-3 hover:bg-gray-200 hover:text-black mb-2 mr-2"
                                    >
                                        <FontAwesomeIcon icon={faFlag} />
                                        <span>Report</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Reviews;
