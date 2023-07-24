// import { notFound } from 'next/navigation';
// import { getNovel } from './queries';
import { Container, Page } from 'components/common';
import thumbnail from 'assets/images/novels/the-beginning-after-the-end.jpg';
import Image from 'next/image';
import { Fragment } from 'react';
import badges from './awards';

interface Params extends Record<string, string> {
    slug: string;
}

const NovelDetails: ServerComponent<object, Params> = async () => {
    const categories = ['Action', 'Comedy', 'Fantasy'];

    return (
        <Page>
            <Container className="grid grid-cols-12">
                <div className="col-span-3">
                    <Image
                        src={thumbnail}
                        className="object-cover w-full rounded-2xl aspect-[10/13]"
                        alt="The Beginning After The End"
                    />

                    <div className="flex flex-col mt-6 space-y-2">
                        <h4 className="text-2xl font-bold">Awards & Power-ups</h4>
                        <div className="grid grid-cols-5 gap-x-2 gap-y-4">
                            {badges.map(({ icon, title }, idx) => {
                                return (
                                    <button
                                        type="button"
                                        className="flex items-center justify-center transition-colors duration-300 rounded-lg aspect-square hover:bg-gray-200"
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
                <div className="col-span-9 px-20">
                    <div className="flex flex-wrap items-center">
                        <span className="inline-flex items-center h-8 px-4 mb-2 mr-2 text-sm text-center text-white transition-colors bg-blue-500 rounded-lg cursor-pointer select-none hover:bg-blue-600">
                            Ongoing
                        </span>
                    </div>
                    <h1 className="mt-2 text-4xl font-bold">The Beginning After the End</h1>
                    <div className="flex items-center mt-2 space-x-2 text-lg text-gray-500">
                        {categories.map((category, idx) => {
                            return (
                                <Fragment key={idx}>
                                    <span className="cursor-pointer select-none hover:underline underline-offset-4">
                                        {category}
                                    </span>
                                    {idx < categories.length - 1 && (
                                        <span className="block w-0.5 h-0.5 bg-gray-500 rounded-full " />
                                    )}
                                </Fragment>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </Page>
    );
};

export default NovelDetails;
