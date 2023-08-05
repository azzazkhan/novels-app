import { FC, Suspense } from 'react';
import { Container } from 'components/common';
import classNames from 'classnames';
import SliderWrapper from './SliderWrapper';
import Loading from './Loading';

interface Props {
    className?: ClassName;
}

const NewPublications: FC<Props> = ({ className }) => {
    return (
        <div className={classNames(className)}>
            <Container>
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">New Publications</h2>
            </Container>

            <Suspense fallback={<Loading />}>
                <SliderWrapper />
            </Suspense>
        </div>
    );
};

export default NewPublications;
