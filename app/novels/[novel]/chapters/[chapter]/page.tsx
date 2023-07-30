import { Page } from 'components/common';

const getChapter = (novel: string, chapter: string) => {};

interface Params extends Record<string, string> {
    novel: string;
    chapter: string;
}

const Chapter: ServerComponent<object, Params> = () => {
    return <Page>Chapter</Page>;
};

export default Chapter;
