import AwardWinningSlider from './AwardWinningSlider';
import { getNovels } from './queries';

const AwardWinningSliderWrapper: ServerComponent = async () => {
    const novels = await getNovels();

    return <AwardWinningSlider novels={novels} />;
};

export default AwardWinningSliderWrapper;
