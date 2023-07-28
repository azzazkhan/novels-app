import React, { Suspense } from 'react';
import { getNovels } from './queries';
import Slider from './Slider';
import Loading from './Loading';

const Loader = async () => {
    const novels = await getNovels();

    return (
        <Suspense fallback={<Loading />}>
            <Slider novels={novels} />
        </Suspense>
    );
};

export default Loader;
