import { Button } from 'components/ui/button';
import { PlusCircle, Search } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

const NotFound: FC = () => {
    return (
        <div className="flex items-center mt-6 text-center border rounded-lg h-96 dark:border-gray-700">
            <div className="flex flex-col w-full max-w-sm px-4 mx-auto">
                <div className="p-3 mx-auto text-blue-500 bg-blue-100 rounded-full dark:text-blue-600 dark:bg-blue-500/10">
                    <Search className="w-6 h-6" />
                </div>
                <h1 className="mt-3 text-lg text-gray-800 dark:text-white">No novels found</h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Your search &quot;Protagonist&quot; did not match any novels. Please try again
                    or create/add a new novel.
                </p>
                <div className="flex items-center mx-auto mt-4 gap-x-3">
                    <Button variant="secondary">Clear Search</Button>

                    <Button variant="primary" size="sm" asChild>
                        <Link href="/dashboard/novels/create">
                            <PlusCircle className="w-5 h-5" />
                            <span>Add Novel</span>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
