import { FC, Fragment } from 'react';
import { Thumbnail, NovelTypeTiles } from './_components';
import { Label } from 'components/ui/label';
import { Input } from 'components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from 'components/ui/select';

const CreateNovel: FC = () => {
    return (
        <Fragment>
            <div className="mb-10">
                <div className="flex items-center gap-x-3">
                    <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                        Create Novel
                    </h2>
                </div>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                    Publish new novel on {process.env.NEXT_PUBLIC_APP_NAME} and start earning.
                </p>
            </div>
            <div className="grid grid-cols-12 gap-10 h-96">
                <div className="flex flex-col col-span-7 space-y-6 dark:bg-red-900/10">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input type="text" id="name" placeholder="Enter novel name" />
                    </div>

                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="abbreviation">Abbreviation</Label>
                        <Input
                            type="text"
                            id="abbreviation"
                            placeholder="Enter novel abbreviation"
                        />
                    </div>

                    <NovelTypeTiles />

                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="abbreviation">Genre</Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Genre" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="col-span-1" />
                <div className="col-span-4">
                    <Thumbnail />
                </div>
            </div>
        </Fragment>
    );
};

export default CreateNovel;
