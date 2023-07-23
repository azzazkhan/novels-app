import { Container } from 'components/common';
import { getNovels } from './queries';
import Slider from './Slider';

const SliderWrapper: ServerComponent = async () => {
    const novels = await getNovels();

    return (
        <Container wrapperClassName="max-sm:max-w-full" className="max-sm:mx-0">
            <Slider novels={novels} />
        </Container>
    );
};

export default SliderWrapper;
