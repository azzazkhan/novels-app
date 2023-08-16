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

const genres = {
    urban: 'Urban',
    fantasy: 'Fantasy',
    history: 'History',
    horror: 'Horror',
    'sci-fi': 'Sci-Fi',
    sports: 'Sports',
    games: 'Games',
    eastern: 'Eastern',
    realistic: 'Realistic',
    action: 'Action',
    war: 'War',
};

type Genre = keyof typeof genres;

const GenreSelector: FC = () => {
    const [value, setValue] = useState<Genre>();

    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="genre">Genre</Label>
            <Select value={value} onValueChange={(value: Genre) => setValue(value)}>
                <SelectTrigger id="genre" className="w-full">
                    <SelectValue placeholder="Select Genre" />
                </SelectTrigger>
                <SelectContent>
                    {Object.entries(genres).map(([genre, label]) => {
                        return (
                            <SelectItem value={genre} key={genre}>
                                {label}
                            </SelectItem>
                        );
                    })}
                </SelectContent>
            </Select>
        </div>
    );
};

export default GenreSelector;
