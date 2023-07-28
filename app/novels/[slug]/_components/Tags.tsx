import type { FC } from 'react';
import type { Tag } from 'types/resources';
import Link from 'next/link';
import classNames from 'classnames';

interface Props {
    tags: Tag[];
    className?: ClassName;
}

const Tags: FC<Props> = ({ tags, className }) => {
    if (!tags || tags.length === 0) return null;

    return (
        <div className={classNames('flex flex-col space-y-4', className)}>
            <div className="flex items-center space-x-6">
                <h4 className="text-2xl font-bold text-gray-800">Tags</h4>
                <div className="flex-1 h-px bg-gray-300" />
            </div>
            <div className="flex flex-wrap">
                {tags.map(({ id, name, slug }) => {
                    return (
                        <Link
                            href={`/tags/${slug}`}
                            key={id}
                            className="inline-flex items-center h-8 px-2 mb-1 mr-2 text-sm font-semibold text-red-500 transition-colors rounded-full 5 whitespace-nowrap hover:bg-red-50"
                        >
                            #{name}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Tags;
