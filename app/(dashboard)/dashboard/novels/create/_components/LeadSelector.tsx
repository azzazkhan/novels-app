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

const leads = {
    male: 'Male Lead',
    female: 'Female Lead',
};

type Lead = keyof typeof leads;

const LeadSelector: FC = () => {
    const [value, setValue] = useState<Lead>();

    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="lead">Lead</Label>
            <Select value={value} onValueChange={(value: Lead) => setValue(value)}>
                <SelectTrigger id="lead" className="w-full">
                    <SelectValue placeholder="Select Lead" />
                </SelectTrigger>
                <SelectContent>
                    {Object.entries(leads).map(([lead, label]) => {
                        return (
                            <SelectItem value={lead} key={lead}>
                                {label}
                            </SelectItem>
                        );
                    })}
                </SelectContent>
            </Select>
        </div>
    );
};

export default LeadSelector;
