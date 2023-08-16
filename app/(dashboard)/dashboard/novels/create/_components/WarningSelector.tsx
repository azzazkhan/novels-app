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

const warnings = {
    'general-audience': 'General Audience',
    'parental-guidance': 'Parental Guidance Suggested',
    'strongly-cautioned': 'Parent Strongly Cautioned',
    restricted: 'Restricted',
    'adults-only': 'Adults Only',
};

type Warning = keyof typeof warnings;

const WarningSelector: FC = () => {
    const [value, setValue] = useState<Warning>();

    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="warning">Warnings</Label>
            <Select value={value} onValueChange={(value: Warning) => setValue(value)}>
                <SelectTrigger id="warning" className="w-full">
                    <SelectValue placeholder="Select Lead" />
                </SelectTrigger>
                <SelectContent>
                    {Object.entries(warnings).map(([warning, label]) => {
                        return (
                            <SelectItem value={warning} key={warning}>
                                {label}
                            </SelectItem>
                        );
                    })}
                </SelectContent>
            </Select>
        </div>
    );
};

export default WarningSelector;
