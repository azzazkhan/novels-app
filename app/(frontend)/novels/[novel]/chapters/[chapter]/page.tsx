import type { Author, Chapter as ChapterModel, Novel, Series } from 'types/resources';
import Link from 'next/link';
import classNames from 'classnames';
import { Container, Page } from 'components/common';
import { client } from 'lib/axios';
import { ReadingUtilsProvider } from 'providers';
import { Controls, Nav, Reader } from './_components';
import { lora, merriweather, roboto } from './fonts';

interface ChapterResponse extends ChapterModel {
    novel: Novel & { author: Author };
    series: Series;
}

interface Params extends Record<string, string> {
    novel: string;
    chapter: string;
}

const getChapter = async (novel: string, chapter: string) => {
    const res = await client.get(`v1/novels/${novel}/chapters/${chapter}?novel=true&series=true`);

    return res.data as ChapterResponse;
};

const Chapter: ServerComponent<object, Params> = async ({ params }) => {
    const { novel, series, ...chapter } = await getChapter(params.novel, params.chapter);

    // const axios = useAxios();
    // const [chapter, setChapter] = useState<ChapterModel>();
    // const [status, setStatus] = useState<AsyncState>();

    // useEffect(() => {
    //     // If we've already fetched the chapter or a request is already sent
    //     // then do not send another request
    //     if (chapter || status === 'loading') return;

    //     axios
    //         .get(`v1/novels/${params.novel}/chapters/${params.chapter}`)
    //         .then((res: AxiosResponse<ChapterModel>) => {
    //             setChapter(res.data);
    //             setStatus('success');
    //         })
    //         .catch((error: AxiosError) => {
    //             setStatus('error');
    //             console.error(error);
    //         });
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [params, axios]);

    return (
        <ReadingUtilsProvider>
            <Page
                className={classNames(
                    '!py-0 bg-gray-200 relative',
                    lora.variable,
                    merriweather.variable,
                    roboto.variable
                )}
            >
                <Nav />

                <Container className="max-lg:!mx-0" wrapperClassName="max-lg:!max-w-full">
                    <div className="relative flex flex-col max-w-screen-md px-6 py-10 mx-auto bg-white shadow-lg">
                        <Controls />
                        <Link
                            href={`/novels/${novel.slug}`}
                            className="text-2xl font-bold hover:text-primary focus:text-primary"
                        >
                            {novel.title}
                        </Link>
                        <h2 className="font-bold text-gray-500">
                            <span>Author: </span>
                            <span>&nbsp;</span>
                            <Link
                                href={`/authors/${novel.author.slug}`}
                                className="hover:underline"
                            >
                                <span>{novel.author.name}</span>
                                {novel.author.alt_name && (
                                    <span className="text-xs whitespace-nowrap">
                                        &nbsp;({novel.author.alt_name})
                                    </span>
                                )}
                            </Link>
                        </h2>

                        <div className="w-4/5 h-1 mx-auto my-10 bg-gray-100" />

                        <h1 className="mb-6 text-2xl font-bold">
                            <span>Chapter {chapter.number}: </span>
                            <span>{chapter.name}</span>
                        </h1>

                        <div>
                            <Reader content={chapter.content} />
                        </div>
                    </div>
                </Container>
            </Page>
        </ReadingUtilsProvider>
    );
};

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default Chapter;
