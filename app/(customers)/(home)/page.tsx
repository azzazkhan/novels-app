import type { FC } from 'react';
import Page from 'components/common/Page';
import HeroSlider from './_hero/HeroSlider';
import NewPublications from './NewPublications';
import Collections from './Collections';

const Home: FC = () => {
    return (
        <Page>
            <HeroSlider />
            <NewPublications className="mt-24" />
            <Collections className="mt-24" />
        </Page>
    );
};

export default Home;
