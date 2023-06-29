import type { FC } from 'react';
import Page from 'components/common/Page';
import HeroSlider from './_hero/HeroSlider';
import NewPublications from './NewPublications';
import Collections from './Collections';
import Categories from './Categories';
import Rankings from './_rankings/Rankings';

const Home: FC = () => {
    return (
        <Page>
            <HeroSlider />
            <NewPublications className="mt-24" />
            <Collections className="mt-24" />
            <Categories className="mt-24" />
            <Rankings className="mt-24" />
        </Page>
    );
};

export default Home;
