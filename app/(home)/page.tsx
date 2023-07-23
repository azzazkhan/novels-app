import type { FC } from 'react';
import { Page } from 'components/common';
import HeroSlider from './_components/hero-slider';
import NewPublications from './_components/new-publications';
import AwardWinning from './_components/award-winning';
import Categories from './Categories';
import Rankings from './_rankings/Rankings';

const Home: FC = () => {
    return (
        <Page>
            <HeroSlider />
            <NewPublications className="mt-24" />
            <AwardWinning className="mt-24" />
            <Categories className="mt-24" />
            <Rankings className="mt-24" />
        </Page>
    );
};

export default Home;
