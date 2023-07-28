import type { FC } from 'react';
import type { Novel } from 'types/resources';
import classNames from 'classnames';

interface Props {
    summary?: Novel['summary'];
    className?: ClassName;
}

const Summary: FC<Props> = ({ summary, className }) => {
    if (!summary) return null;

    return (
        <div className={classNames('flex flex-col space-y-4', className)}>
            <div className="flex items-center space-x-6">
                <h4 className="text-2xl font-bold text-gray-800">Summary</h4>
                <div className="flex-1 h-px bg-gray-300" />
            </div>
            <div className="p-6 bg-gray-100 rounded-2xl">{summary}</div>
        </div>
    );
};

export default Summary;
