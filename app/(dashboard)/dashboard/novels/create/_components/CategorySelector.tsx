'use client';

import { FC, useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from 'components/ui/select';
import { Label } from 'components/ui/label';

const categories = {
    action: 'Action',
    comedy: 'Comedy',
    fantasy: 'Fantasy',
    adventure: 'Adventure',
    'martial-arts': 'Martial Arts',
    xuanhuan: 'Xuanhuan',
    'video-games': 'Video Games',
    harem: 'Harem',
    mature: 'Mature',
    mecha: 'Mecha',
    'sci-fi': 'Sci-Fi',
    supernatural: 'Supernatural',
    shounen: 'Shounen',
    'eastern-fantasy': 'Eastern Fantasy',
    romance: 'Romance',
};

type Category = keyof typeof categories;

const CategorySelector: FC = () => {
    const [value, setValue] = useState<Category>();

    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="category">Category</Label>
            <Select value={value} onValueChange={(value: Category) => setValue(value)}>
                <SelectTrigger id="category" className="w-full">
                    <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                    {Object.entries(categories).map(([category, label]) => {
                        return (
                            <SelectItem value={category} key={category}>
                                {label}
                            </SelectItem>
                        );
                    })}
                </SelectContent>
            </Select>
        </div>
    );
};

export default CategorySelector;
