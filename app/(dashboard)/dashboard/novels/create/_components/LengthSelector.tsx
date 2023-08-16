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

const lengths = {
    novel: 'Male Lead',
    'short-stories': 'Short Stories',
    'super-short-stores': 'Super Short Stories',
};

type Length = keyof typeof lengths;

const LengthSelector: FC = () => {
    const [value, setValue] = useState<Length>();

    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="length">Length</Label>
            <Select value={value} onValueChange={(value: Length) => setValue(value)}>
                <SelectTrigger id="length" className="w-full">
                    <SelectValue placeholder="Select Lead" />
                </SelectTrigger>
                <SelectContent>
                    {Object.entries(lengths).map(([length, label]) => {
                        return (
                            <SelectItem value={length} key={length}>
                                {label}
                            </SelectItem>
                        );
                    })}
                </SelectContent>
            </Select>
        </div>
    );
};

export default LengthSelector;
