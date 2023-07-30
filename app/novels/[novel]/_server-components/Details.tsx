import type { FC } from 'react';
import type { Author, Category, Novel } from 'types/resources';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBookOpen,
    faCircleCheck,
    faCircleNotch,
    faEye,
    faHeart,
    faPlus,
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { abbreviate } from 'utils';

import badge6 from 'assets/icons/badge-6.png';
import badge3 from 'assets/icons/badge-3.png';

interface Props {
    title: Novel['title'];
    alt_title: Novel['alt_title'];
    categories: Category[];
    author: Author;
    completed: boolean;
    views: number;
    chapters_count: number;
    likes_count: number;
    className?: ClassName;
}

const Details: FC<Props> = ({
    title,
    alt_title,
    categories,
    author,
    completed,
    views,
    chapters_count,
    likes_count,
    className,
}) => {
    return (
        <div className={classNames('flex flex-col justify-between', className)}>
            <div>
                <h1 className="text-2xl font-bold lg:text-3xl xl:text-4xl">
                    <span>{title}</span>
                    <span className="hidden sm:inline-block xl:hidden">&nbsp;</span>
                    <span className="hidden font-normal text-gray-700 sm:inline-block xl:hidden sm:text-base md:text-lg whitespace-nowrap">
                        ({alt_title})
                    </span>
                </h1>
                {alt_title && (
                    <h2 className="hidden mt-1 text-gray-700 sm:text-lg xl:text-xl xl:block">
                        ({alt_title})
                    </h2>
                )}

                {/* Categories */}
                <div className="flex flex-wrap items-center mt-4 mb-2 text-sm text-gray-500 select-none lg:mt-2">
                    {categories.map(({ id, name, slug }, idx) => {
                        return (
                            <div
                                className="flex items-center mb-2 mr-2 space-x-2 whitespace-nowrap"
                                key={id}
                            >
                                <Link
                                    href={`/categories/${slug}`}
                                    className="cursor-pointer whitespace-nowrap hover:underline"
                                >
                                    {name}
                                </Link>
                                {idx < categories.length - 1 && (
                                    <span className="block w-0.5 h-0.5 bg-gray-500 rounded-full " />
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Author */}
                <div className="flex items-center mb-4 space-x-2">
                    <span className="text-gray-500">Author</span>
                    <Link
                        href={`/authors/${author.slug}`}
                        className="text-primary hover:underline underline-offset-2"
                    >
                        <span>{author.name}</span>{' '}
                        {author.alt_name && <span className="text-sm">({author.alt_name})</span>}
                    </Link>

                    {/* Author awards */}
                    <div className="flex items-center space-x-1">
                        <Image
                            src={badge6}
                            className="w-6 h-6"
                            title="Became author of the month"
                            alt="Author of the month badge"
                        />
                        <Image
                            src={badge3}
                            className="w-6 h-6"
                            title={`${process.env.NEXT_PUBLIC_APP_NAME} exclusive author`}
                            alt={`${process.env.NEXT_PUBLIC_APP_NAME} exclusive author`}
                        />
                    </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap items-center">
                    {/* Completed/Ongoing */}
                    <div className="flex items-center mb-4 mr-6 space-x-2 text-gray-500 whitespace-nowrap">
                        <FontAwesomeIcon
                            icon={completed ? faCircleCheck : faCircleNotch}
                            className="max-h-[1.125rem] max-w-[1.125rem]"
                        />
                        <Link
                            href={`/novels?status=${completed ? 'completed' : 'ongoing'}`}
                            className="text-sm hover:underline underline-offset-1"
                        >
                            {completed ? 'Completed' : 'Ongoing'}
                        </Link>
                    </div>

                    {/* Chapters count */}
                    <div className="flex items-center mb-4 mr-6 space-x-2 text-gray-500 whitespace-nowrap">
                        <FontAwesomeIcon
                            icon={faBookOpen}
                            className="max-h-[1.125rem] max-w-[1.125rem]"
                        />
                        <span className="text-sm">{chapters_count} Chapters</span>
                    </div>

                    {/* Views */}
                    <div className="flex items-center mb-4 mr-6 space-x-2 text-gray-500 whitespace-nowrap">
                        <FontAwesomeIcon
                            icon={faEye}
                            className="max-h-[1.125rem] max-w-[1.125rem]"
                        />
                        <span className="text-sm">
                            <span className="uppercase">{abbreviate(views)}</span> Views
                        </span>
                    </div>
                    {/* Likes */}
                    <div className="flex items-center mb-4 mr-6 space-x-2 text-gray-500 whitespace-nowrap">
                        <FontAwesomeIcon
                            icon={faHeart}
                            className="max-h-[1.125rem] max-w-[1.125rem]"
                        />
                        <span className="text-sm">
                            <span className="uppercase">{abbreviate(likes_count)}</span> Likes
                        </span>
                    </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                        {Array.from({ length: 4 }).map((_, idx) => {
                            return (
                                <FontAwesomeIcon
                                    icon={faStar}
                                    className="text-xl text-amber-500 max-h-6 max-w-[1.5rem]"
                                    key={idx}
                                />
                            );
                        })}
                        <FontAwesomeIcon icon={faStar} className="text-xl text-gray-200" />
                    </div>
                    <div className="flex items-center space-x-1.5">
                        <span className="text-lg">4.9</span>
                        <span className="text-xs text-gray-500">(5786 Reviews)</span>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center mt-10">
                <button
                    type="button"
                    className="inline-flex items-center h-12 px-6 mb-2 mr-2 font-bold text-white transition-colors bg-blue-500 rounded-full hover:bg-blue-600 whitespace-nowrap"
                >
                    Start Reading
                </button>
                <button
                    type="button"
                    className="inline-flex items-center h-12 px-6 mb-2 mr-2 space-x-2 font-bold text-gray-500 transition-colors rounded-full hover:bg-gray-200 hover:text-black whitespace-nowrap"
                >
                    <FontAwesomeIcon icon={faPlus} />
                    <span>Add to Library</span>
                </button>
                <button
                    type="button"
                    className="inline-flex items-center h-12 px-6 mb-2 mr-2 space-x-2 font-bold text-red-500 transition-colors rounded-full hover:bg-red-100 whitespace-nowrap"
                >
                    <FontAwesomeIcon icon={faHeart} />
                    <span>Like</span>
                </button>
            </div>
        </div>
    );
};

export default Details;
