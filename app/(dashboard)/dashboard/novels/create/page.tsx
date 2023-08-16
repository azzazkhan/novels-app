import { FC, Fragment } from 'react';
import {
    Thumbnail,
    NovelTypeTiles,
    GenreSelector,
    LeadSelector,
    LengthSelector,
    LanguageSelector,
    WarningSelector,
    CategorySelector,
    Tags,
} from './_components';
import { Label } from 'components/ui/label';
import { Input } from 'components/ui/input';

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
                <div className="flex flex-col col-span-7 space-y-6">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            type="text"
                            id="name"
                            className="text-sm"
                            placeholder="Enter novel name"
                        />
                    </div>

                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="abbreviation">Abbreviation</Label>
                        <Input
                            type="text"
                            id="abbreviation"
                            className="text-sm"
                            placeholder="Enter novel abbreviation"
                        />
                    </div>

                    <NovelTypeTiles />

                    <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
                        <GenreSelector />
                        <LeadSelector />
                        <LengthSelector />
                        <LanguageSelector />
                    </div>

                    <CategorySelector />

                    <Tags />
                </div>
                <div className="col-span-1" />
                <div className="flex flex-col col-span-4 space-y-6">
                    <Thumbnail />

                    <WarningSelector />
                </div>
            </div>
        </Fragment>
    );
};

export default CreateNovel;
