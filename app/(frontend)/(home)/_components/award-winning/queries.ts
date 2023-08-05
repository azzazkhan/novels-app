import type { Author, Category, Novel } from 'types/resources';
import { client } from 'lib/axios';

export interface AwardedNovels extends Novel {
    author: Author;
    categories: Category[];
}

export const getNovels = async () => {
    const res = await client.get('v1/novels?filter=award-winning&limit=12');

    const result: PaginatedResponse<AwardedNovels[]> = res.data;

    return result.data;
};
