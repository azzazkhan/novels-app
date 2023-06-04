import type { FC, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

interface Props {
    checked: boolean;
    children?: ReactNode;
}

const SelectionAction: FC<Props> = ({ checked, children }) => {
    return (
        <div className="flex items-center justify-between py-2.5 hover:bg-gray-100 transition-colors px-5 select-none cursor-pointer">
            <span>{children}</span>

            <div
                className={classNames('h-5 w-5 items-center justify-center rounded-full', {
                    'bg-gray-200 hidden': !checked,
                    'bg-primary flex': checked,
                })}
            >
                <FontAwesomeIcon icon={faCheck} className="text-white h-3" />
            </div>
        </div>
    );
};

export default SelectionAction;
