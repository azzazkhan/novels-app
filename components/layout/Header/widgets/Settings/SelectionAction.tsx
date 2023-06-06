import type { FC, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

interface Props {
    label: string;
    checked: boolean;
    children?: ReactNode;
}

const SelectionAction: FC<Props> = ({ label, checked, children }) => {
    return (
        <div className="flex justify-between py-2.5 hover:bg-gray-50 transition-colors px-5 select-none cursor-pointer space-x-2">
            <div className="flex flex-col">
                <span>{label}</span>
                {children && <p className="text-xs text-gray-500">{children}</p>}
            </div>

            <div
                className={classNames(
                    'relative h-5 w-5 justify-center rounded-full transform flex-shrink-0 flex-grow-0 mt-0.5',
                    {
                        'bg-gray-200 invisible': !checked,
                        'bg-primary visible flex animate-[pop_300ms_ease]': checked,
                    }
                )}
            >
                <FontAwesomeIcon
                    icon={faCheck}
                    className="absolute h-3 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                />
            </div>
        </div>
    );
};

export default SelectionAction;
