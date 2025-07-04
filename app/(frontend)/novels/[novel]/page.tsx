import { notFound } from 'next/navigation';
import Image from 'next/image';
import { SeriesProvider } from 'providers';
import { prefixAssetPath, prefixSitePath } from 'utils';
import { Container, Page } from 'components/common';
import { Details, Recommendations, Thumbnail } from './_server-components';
import { Tabs, NovelSeries } from './_client-components';
import { getNovel } from './queries';
import badges from './awards';

interface Params extends Record<string, string> {
    novel: string;
}

const NovelDetails: ServerComponent<object, Params> = async ({ params: { novel: slug } }) => {
    const novel = await getNovel(slug);

    if (!novel) return notFound();

    const { title, alt_title, author, categories, chapters_count, completed, likes_count, views } =
        novel;

    return (
        <Page>
            <Container className="grid md:grid-cols-12 lg:grid-cols-12 gap-y-10 md:gap-y-6">
                {/* Novel thumbnail */}
                <div className="md:col-span-4 lg:col-span-3">
                    <Thumbnail image={novel.thumbnail} title={novel.title} type="novel" rank={1} />
                </div>

                {/* Novel details */}
                <Details
                    {...{
                        title,
                        alt_title,
                        author,
                        categories,
                        chapters_count,
                        completed,
                        likes_count,
                        views,
                    }}
                    className="md:pl-10 xl:pl-20 md:col-span-8 lg:col-span-9"
                />

                {/* Novel awards and author support */}
                <div className="md:col-span-4 lg:col-span-3">
                    {/* Novel awards */}
                    <div className="flex flex-col space-y-2">
                        <h4 className="text-2xl font-bold">Awards & Power-ups</h4>
                        <div className="grid grid-cols-5 gap-x-2 gap-y-4">
                            {badges.map(({ icon, title }, idx) => {
                                return (
                                    <button
                                        type="button"
                                        className="flex items-center justify-center transition-colors duration-300 rounded-lg aspect-square hover:bg-gray-100 max-h-10"
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

                {/* Details and chapters */}
                <div className="max-w-full overflow-hidden md:col-span-8 lg:col-span-9 md:pl-10 xl:pl-20">
                    <SeriesProvider novelSlug={novel.slug}>
                        <Tabs
                            summary={novel.summary}
                            tags={novel.tags}
                            className="mb-8"
                            chapters={<NovelSeries novelSlug={slug} />}
                        />
                    </SeriesProvider>
                    <Recommendations className="max-w-full overflow-hidden" />
                </div>
            </Container>
        </Page>
    );
};

export const generateMetadata: MetadataFn<Params> = async ({ params: { novel: slug } }) => {
    const novel = await getNovel(slug);

    if (!novel) return {};

    return {
        title: novel.title,
        description: `Read ${novel.title} in your favorite language on ${process.env.NEXT_PUBLIC_APP_NAME}, the best web novels reading site!`,
        authors: [{ name: novel.author.name, url: prefixSitePath(`authors/${novel.author.slug}`) }],
        openGraph: {
            title: novel.title,
            description: `Read ${novel.title} in your favorite language on ${process.env.NEXT_PUBLIC_APP_NAME}, the best web novels reading site!`,
            images: [prefixAssetPath(novel.thumbnail)],
            type: 'book',
        },
    };
};

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default NovelDetails;
