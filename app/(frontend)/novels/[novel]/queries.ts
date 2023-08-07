import type { Author, Category, Novel as NovelModel, Tag } from 'types/resources';
import { client } from 'lib/axios';
import { AxiosError } from 'axios';

export interface Novel extends NovelModel {
    author: Author;
    categories: Category[];
    tags: Tag[];
    chapters_count: number;
    likes_count: number;
}

export const getNovel = async (slug: string) => {
    try {
        const res = await client.get(`v1/novels/${slug}`);

        return res.data as Novel;
    } catch (err) {
        const error = err as AxiosError;

        if (error.response?.status === 404) return null;

        throw err;
    }
};
