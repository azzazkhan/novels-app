import type { FC } from 'react';
import { Container } from 'components/common';
import classNames from 'classnames';

const Loading: FC = () => {
    return (
        <Container wrapperClassName="max-sm:max-w-full" className="max-sm:mx-0">
            <div className="flex w-full space-x-4 overflow-x-hidden h-76 lg:h-80">
                {Array.from({ length: 10 }).map((_, idx) => {
                    const [isFirst, isLast] = [idx === 0, idx === 9];

                    return (
                        <div
                            className={classNames({
                                'w-36 lg:w-44': true,
                                'max-sm:ml-[calc(2.5%+1rem)]': isFirst,
                                'max-sm:mr-[calc(2.5%+1rem)]': isLast,
                            })}
                            key={idx}
                        >
                            <div className="mb-2 rounded-lg h-52 w-36 lg:h-60 lg:w-44 skeleton" />

                            <div className="w-full h-6 rounded-md skeleton" />
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};

export default Loading;
