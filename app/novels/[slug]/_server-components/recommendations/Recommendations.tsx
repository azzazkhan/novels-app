import type { FC } from 'react';
import classNames from 'classnames';
import Loader from './Loader';

interface Props {
    className?: ClassName;
}

const Recommendations: FC<Props> = ({ className }) => {
    return (
        <div className={classNames(className)}>
            <h2 className="mb-4 text-xl font-bold md:text-2xl">You should also try</h2>

            <Loader />
        </div>
    );
};

export default Recommendations;
