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

const languages = {
    english: 'English',
    spanish: 'Spanish',
    bhasa: 'Bhasa (Indonesia)',
    filipino: 'Filipino',
    melayu: 'Melayu',
    vietnamese: 'Vietnamese',
    portuguese: 'Portuguese',
    french: 'French',
    hindi: 'Hindi',
    russian: 'Russian',
    swahili: 'Swahili',
    thai: 'Thai',
};

type Language = keyof typeof languages;

const LanguageSelector: FC = () => {
    const [value, setValue] = useState<Language>();

    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="language">Language</Label>
            <Select value={value} onValueChange={(value: Language) => setValue(value)}>
                <SelectTrigger id="language" className="w-full">
                    <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                    {Object.entries(languages).map(([language, label]) => {
                        return (
                            <SelectItem value={language} key={language}>
                                {label}
                            </SelectItem>
                        );
                    })}
                </SelectContent>
            </Select>
        </div>
    );
};

export default LanguageSelector;
