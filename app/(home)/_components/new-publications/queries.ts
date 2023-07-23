import type { Novel } from 'types/resources';
import { client } from 'lib/axios';

export const getNovels = async () => {
    const res = await client.get('v1/novels?filter=new-publications&limit=10');

    const result: PaginatedResponse<Novel[]> = res.data;

    return result.data;
};
