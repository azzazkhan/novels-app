'use client';

import { FC, MouseEvent, useEffect, useState } from 'react';
import { Input } from 'components/ui/input';
import { Label } from 'components/ui/label';
import { slugify } from 'utils';

const Tags: FC = () => {
    const [value, setValue] = useState<string>('');

    const [tags, setTags] = useState<string[]>([]);

    const handleTagClick = (tagIdx: number) => (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (tagIdx < 0 || tagIdx > tags.length - 1) return;

        setTags((current) => current.filter((_, idx) => idx !== tagIdx));
    };

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        // Set value to empty if user is just typing spaces
        if (value.match(/^\s{1,}/)) return setValue('');

        // Create a clone of value so we don't mutate the original one
        let text = value.concat('');

        // Only allow alpha-numeric, dashes and spaces, remove other characters
        if (value.match(/[^A-z0-9-\s]/)) text = text.replace(/[^A-z0-9-\s]/, '');

        // Split all tags based on spaces
        if (text.includes(' ')) {
            const delimiters = text
                .split(' ') // Split input string into multiple tags
                // Convert the input string into URL friendly name
                .map((v) => (v ? slugify(v) : ''))
                // Remove empty strings and duplicate tags
                .filter((v) => !!v && !tags.find((tag) => tag === v));

            if (delimiters.length > 0) {
                setTags((current) => current.concat(delimiters));
                setValue('');
                // eslint-disable-next-line consistent-return
                return;
            }
        }

        text !== value && setValue(text);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="tags">Tags</Label>
            <Input
                type="text"
                id="tags"
                className="text-sm"
                value={value}
                onChange={(event) => setValue(event.target.value)}
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

            <p className="text-sm text-gray-500">
                Enter tag name and hit space, please not tags can only contain letters, numbers and
                hyphens.
            </p>
        </div>
    );
};

export default Tags;
