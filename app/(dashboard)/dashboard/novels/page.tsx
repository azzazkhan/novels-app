import { Button } from 'components/ui/button';
import { PlusCircle, Search } from 'lucide-react';
import { FC, Fragment } from 'react';

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
                    <Button variant="primary">
                        <PlusCircle className="w-5 h-5" />
                        <span>Add Novel</span>
                    </Button>
                </div>
            </div>

            <div className="mt-6 md:flex md:items-center md:justify-between">
                <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                    <button
                        type="button"
                        className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300"
                    >
                        View all
                    </button>

                    <button
                        type="button"
                        className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                    >
                        Approved
                    </button>

                    <button
                        type="button"
                        className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                    >
                        Pending
                    </button>

                    <button
                        type="button"
                        className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                    >
                        Rejected
                    </button>
                </div>

                <div className="relative flex items-center mt-4 md:mt-0">
                    <span className="absolute">
                        <Search className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600" />
                    </span>

                    <input
                        type="text"
                        value="Protagonist"
                        placeholder="Search novels"
                        className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:border-gray-300 dark:focus:border-gray-500"
                    />
                </div>
            </div>

            <div className="flex items-center mt-6 text-center border rounded-lg h-96 dark:border-gray-700">
                <div className="flex flex-col w-full max-w-sm px-4 mx-auto">
                    <div className="p-3 mx-auto text-blue-500 bg-blue-100 rounded-full dark:text-blue-600 dark:bg-blue-500/10">
                        <Search className="w-6 h-6" />
                    </div>
                    <h1 className="mt-3 text-lg text-gray-800 dark:text-white">No novels found</h1>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Your search &quot;Protagonist&quot; did not match any novels. Please try
                        again or create/add a new novel.
                    </p>
                    <div className="flex items-center mt-4 sm:mx-auto gap-x-3">
                        <button
                            type="button"
                            className="w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
                        >
                            Clear Search
                        </button>

                        <button
                            type="button"
                            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
                        >
                            <PlusCircle className="w-5 h-5" />

                            <span>Add novel</span>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Novels;
