import { Fragment } from 'react';
import { notFound } from 'next/navigation';
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
import { Container, Page } from 'components/common';
import { Thumbnail } from './_components';
import { getNovel } from './queries';
// import badges from './awards';

import badge6 from 'assets/icons/badge-6.png';
import badge3 from 'assets/icons/badge-3.png';

interface Params extends Record<string, string> {
    slug: string;
}

const NovelDetails: ServerComponent<object, Params> = async ({ params: { slug } }) => {
    const novel = await getNovel(slug);

    if (!novel) return notFound();

    /**
     * 1. Name (Done)
     * 2. Alt Name (Done)
     * 3. Author (Done)
     * 4. Likes (Done)
     * 5. Views (Done)
     * 8. Rank (Done)
     * 7. Actions (Library / Read)
     * 8. Chapter count (Done)
     * 9. Report button
     * 8. Rating (Done)
     */

    return (
        <Page>
            <Container className="grid lg:grid-cols-12">
                <div className="lg:col-span-3">
                    <Thumbnail image={novel.thumbnail} title={novel.title} type="novel" rank={1} />

                    {/* <div className="flex flex-col mt-6 space-y-2">
                        <h4 className="text-2xl font-bold">Awards & Power-ups</h4>
                        <div className="grid grid-cols-5 gap-x-2 gap-y-4">
                            {badges.map(({ icon, title }, idx) => {
                                return (
                                    <button
                                        type="button"
                                        className="flex items-center justify-center transition-colors duration-300 rounded-lg aspect-square hover:bg-gray-100"
                                        key={idx}
                                        title={title}
                                    >
                                        <Image
                                            src={icon}
                                            className="object-contain w-3/4 aspect-square"
                                            alt={title}
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </div> */}
                </div>
                <div className="flex flex-col justify-between lg:pl-20 lg:col-span-9">
                    <div>
                        <h1 className="text-4xl font-bold">{novel.title}</h1>
                        {novel.alt_title && (
                            <h2 className="mt-1 text-xl text-gray-700">({novel.alt_title})</h2>
                        )}

                        {/* Categories */}
                        <div className="flex items-center mt-2 mb-4 space-x-2 text-sm text-gray-500 select-none">
                            {novel.categories.map(({ id, name, slug }, idx) => {
                                return (
                                    <Fragment key={id}>
                                        <Link
                                            href={`/categories/${slug}`}
                                            className="cursor-pointer hover:underline"
                                        >
                                            {name}
                                        </Link>
                                        {idx < novel.categories.length - 1 && (
                                            <span className="block w-0.5 h-0.5 bg-gray-500 rounded-full " />
                                        )}
                                    </Fragment>
                                );
                            })}
                        </div>

                        {/* Author */}
                        <div className="flex items-center mb-4 space-x-2">
                            <span className="text-gray-500">Author</span>
                            <Link
                                href={`/authors/${novel.author.slug}`}
                                className="text-primary hover:underline underline-offset-2"
                            >
                                <span>{novel.author.name}</span>{' '}
                                {novel.author.alt_name && (
                                    <span className="text-sm">({novel.author.alt_name})</span>
                                )}
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
                            <div className="flex items-center mb-4 mr-6 space-x-2 text-gray-500">
                                <FontAwesomeIcon
                                    icon={novel.completed ? faCircleCheck : faCircleNotch}
                                />
                                <Link
                                    href={`/novels?status=${
                                        novel.completed ? 'completed' : 'ongoing'
                                    }`}
                                    className="text-sm hover:underline underline-offset-1"
                                >
                                    {novel.completed ? 'Completed' : 'Ongoing'}
                                </Link>
                            </div>

                            {/* Chapters count */}
                            <div className="flex items-center mb-4 mr-6 space-x-2 text-gray-500">
                                <FontAwesomeIcon icon={faBookOpen} />
                                <span className="text-sm">5,241 Chapters</span>
                            </div>

                            {/* Views */}
                            <div className="flex items-center mb-4 mr-6 space-x-2 text-gray-500">
                                <FontAwesomeIcon icon={faEye} />
                                <span className="text-sm">4.8M Views</span>
                            </div>
                            {/* Likes */}
                            <div className="flex items-center mb-4 mr-6 space-x-2 text-gray-500">
                                <FontAwesomeIcon icon={faHeart} />
                                <span className="text-sm">1.2K Likes</span>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                                {Array.from({ length: 4 }).map((_, idx) => {
                                    return (
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="text-xl text-amber-500"
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
                    <div className="flex items-center mt-10 space-x-2">
                        <button
                            type="button"
                            className="inline-flex items-center h-12 px-6 font-bold text-white transition-colors bg-blue-500 rounded-full hover:bg-blue-600"
                        >
                            Start Reading
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center h-12 px-6 space-x-2 font-bold text-gray-500 transition-colors rounded-full hover:bg-gray-200 hover:text-black"
                        >
                            <FontAwesomeIcon icon={faPlus} />
                            <span>Add to Library</span>
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center h-12 px-6 space-x-2 font-bold text-red-500 transition-colors rounded-full hover:bg-red-100"
                        >
                            <FontAwesomeIcon icon={faHeart} />
                            <span>Like</span>
                        </button>
                    </div>
                </div>
            </Container>
        </Page>
    );
};

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default NovelDetails;
