import { FC } from 'react';

const Thumbnail: FC = () => {
    return (
        <div className="flex flex-col space-y-1">
            <h4 className="font-semibold">Novel Thumbnail</h4>
            <div className="flex flex-col items-center justify-center px-4 py-10 transition-colors border-2 border-gray-300 border-dashed rounded-lg cursor-pointer select-none hover:bg-blue-100 group dark:border-gray-600 dark:hover:bg-blue-600/10">
                <p className="text-sm group-hover:text-blue-900 dark:group-hover:text-gray-100">
                    Upload a file or drag and drop
                </p>
                <p className="text-xs text-gray-500">PNG, JPG or WEBP upto 5 MB</p>
            </div>
        </div>
    );
};

export default Thumbnail;
