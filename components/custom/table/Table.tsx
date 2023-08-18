import { FC, ReactNode } from 'react';
import Heading from './Heading';

interface Props {
    headings?: ReactNode[];
    editable?: boolean;
    children?: ReactNode;
}

const Table: FC<Props> = ({ headings, editable, children }) => {
    return (
        <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            {headings && headings.length > 0 && (
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                    <tr>
                                        {headings.map((content, idx) => {
                                            return <Heading key={idx}>{content}</Heading>;
                                        })}

                                        {editable && (
                                            <th scope="col" className="relative py-3.5 px-4">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        )}
                                    </tr>
                                </thead>
                            )}
                            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                {children}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;
