import type { FC } from 'react';
import Page from 'components/common/Page';
import HeroSlider from './_hero/HeroSlider';
import NewPublications from './NewPublications';

const Home: FC = () => {
    return (
        <Page>
            <HeroSlider />
            <NewPublications />
        </Page>
    );
};

export default Home;
