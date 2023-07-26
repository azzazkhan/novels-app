import { Fragment } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { prefixAssetPath } from 'utils';
import { Container, Page } from 'components/common';
import { getNovel } from './queries';
import badges from './awards';

import badge6 from 'assets/icons/badge-6.png';
import badge3 from 'assets/icons/badge-3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBookOpen,
    faCircleCheck,
    faCircleNotch,
    faEye,
    faHeart,
} from '@fortawesome/free-solid-svg-icons';

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
     * 4. Likes
     * 5. Views
     * 8. Rank
     * 7. Actions (Library / Read)
     * 8. Chapter count
     * 9. Report button
     * 8. Rating
     */

    return (
        <Page>
            <Container className="grid grid-cols-12">
                <div className="col-span-3">
                    <Image
                        src={prefixAssetPath(novel.thumbnail)}
                        height={280}
                        width={364}
                        className="object-cover w-full rounded-2xl aspect-[10/13] shadow"
                        alt={novel.title}
                    />

                    <div className="flex flex-col mt-6 space-y-2">
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
                    </div>
                </div>
                <div className="col-span-9 pl-20">
                    <h1 className="text-4xl font-bold">{novel.title}</h1>
                    {novel.alt_title && (
                        <h2 className="mt-1 text-xl text-gray-700">({novel.alt_title})</h2>
                    )}

                    {/* Ongoing, ranking tags */}
                    {/* <div className="flex flex-wrap items-center">
                        <span className="inline-flex items-center px-2.5 mb-2 mr-2 text-xs font-bold text-center text-white uppercase transition-colors bg-blue-500 rounded-full cursor-pointer select-none h-7 hover:bg-blue-600">
                            Ongoing
                        </span>
                    </div> */}

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
                    <div className="flex items-center mb-4 space-x-6">
                        {/* Completed/Ongoing */}
                        <div className="flex items-center space-x-2 text-gray-500">
                            <FontAwesomeIcon
                                icon={novel.completed ? faCircleCheck : faCircleNotch}
                            />
                            <span className="text-sm">
                                {novel.completed ? 'Completed' : 'Ongoing'}
                            </span>
                        </div>

                        <div className="flex items-center space-x-2 text-gray-500">
                            <FontAwesomeIcon icon={faBookOpen} />
                            <span className="text-sm">5,241 Chapters</span>
                        </div>

                        <div className="flex items-center space-x-2 text-gray-500">
                            <FontAwesomeIcon icon={faEye} />
                            <span className="text-sm">4.8M Views</span>
                        </div>

                        <div className="flex items-center space-x-2 text-gray-500">
                            <FontAwesomeIcon icon={faHeart} />
                            <span className="text-sm">1.2K Likes</span>
                        </div>
                    </div>
                </div>
            </Container>
        </Page>
    );
};

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default NovelDetails;
