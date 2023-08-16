'use client';

import { FC, MouseEvent, useState } from 'react';
import { Input } from 'components/ui/input';
import { Label } from 'components/ui/label';

const Tags: FC = () => {
    const [tags, setTags] = useState<string[]>([
        'reincarnation',
        'sword-wielder',
        'fantasy',
        'male-lead',
        'slow-romance',
    ]);

    const handleTagClick = (tagIdx: number) => (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (tagIdx < 0 || tagIdx > tags.length - 1) return;

        setTags((current) => current.filter((_, idx) => idx !== tagIdx));
    };

    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="tags">Tags</Label>
            <Input
                type="text"
                id="tags"
                className="text-sm"
                placeholder="Enter tag and hit space"
            />
            <div className="flex flex-wrap">
                {tags.map((tag, idx) => {
                    return (
                        <button
                            type="button"
                            className="inline-flex items-center h-7 px-2.5 mb-1 mr-2 text-xs font-semibold text-red-600 transition-colors bg-red-100 rounded-full 5 whitespace-nowrap hover:bg-red-600 hover:text-white"
                            title={`Click to remove tag ${tag}`}
                            onClick={handleTagClick(idx)}
                            key={idx}
                        >
                            #{tag}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Tags;
