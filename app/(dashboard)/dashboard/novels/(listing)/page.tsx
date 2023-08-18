import { FC, Fragment } from 'react';
import Link from 'next/link';
import { PlusCircle, Search } from 'lucide-react';
import { Button } from 'components/ui/button';
import { Input } from 'components/ui/input';
import { Table, Cell } from 'components/custom/table';
import novels from 'data/novels';
import Image from 'next/image';

const Novels: FC = () => {
    return (
        <Fragment>
            <div className="flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-x-3">
                        <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                            Novels
                        </h2>

                        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-blue-600/10 dark:text-blue-400">
                            2 novels
                        </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                        These your published novels.
                    </p>
                </div>
                <div className="flex items-center mt-4 gap-x-3">
                    <Button asChild variant="primary">
                        <Link href="/dashboard/novels/create">
                            <PlusCircle className="w-5 h-5" />
                            <span>Add Novel</span>
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="mt-6 md:flex md:items-center md:justify-between">
                <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                    <Button size="sm" shape="flat" variant="grouped-active">
                        View All
                    </Button>
                    <Button size="sm" shape="flat" variant="grouped">
                        Approved
                    </Button>
                    <Button size="sm" shape="flat" variant="grouped">
                        Pending
                    </Button>
                    <Button size="sm" shape="flat" variant="grouped">
                        Rejected
                    </Button>
                </div>

                <div className="relative flex items-center mt-4 md:mt-0">
                    <span className="absolute">
                        <Search className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600" />
                    </span>

                    <Input
                        type="text"
                        value="Protagonist"
                        size="sm"
                        variant="icon"
                        placeholder="Search novels"
                    />
                </div>
            </div>

            <Table headings={['Image', 'Name', 'Status', 'Chapters', 'Earnings']}>
                {novels.map((novel, idx) => {
                    const { title, slug, image, completed } = novel;
                    const categories = Object.values(novel.categories);

                    return (
                        <tr key={idx}>
                            <Cell>
                                <Image
                                    src={image}
                                    className="block h-20 rounded-lg w-14"
                                    alt={title}
                                />
                            </Cell>
                            <Cell className="font-semibold">
                                <div className="flex flex-col space-y-2">
                                    <Link
                                        href={`/dashboard/novels/${slug}`}
                                        className="focus:underline hover:underline"
                                    >
                                        {title}
                                    </Link>
                                    {categories.length > 0 && (
                                        <div className="flex flex-wrap mt-2 text-xs">
                                            {categories.slice(0, 4).map((name, idx) => {
                                                return (
                                                    <span key={idx}>
                                                        {name}
                                                        {idx < categories.length - 1 && (
                                                            <>,&nbsp;</>
                                                        )}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            </Cell>
                            <Cell>
                                {completed && (
                                    <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                        Completed
                                    </div>
                                )}
                                {!completed && (
                                    <div className="inline px-3 py-1 text-sm font-normal rounded-full text-rose-500 gap-x-2 bg-rose-100/60 dark:bg-gray-800">
                                        Ongoing
                                    </div>
                                )}
                            </Cell>
                            <Cell>1,137</Cell>
                            <Cell>N/A</Cell>
                        </tr>
                    );
                })}
            </Table>

            {/* <NotFound /> */}
        </Fragment>
    );
};

export default Novels;
