import type { Novel } from 'types/resources';
import { client } from 'lib/axios';

export const getNovels = async () => {
    const res = await client.get('v1/novels?limit=5');

    const result: PaginatedResponse<Novel[]> = res.data;

    return result.data;
};
