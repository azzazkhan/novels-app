import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

interface Props {
    title: string;
    header?: ReactNode;
    children?: ReactNode;
}

const Card: FC<Props> = ({ title, header, children }) => {
    return (
        <div className="bg-gray-900 xs:rounded-2xl md:rounded-3xl w-full xs:w-[400px] overflow-hidden xs:shadow-lg max-xs:flex-1">
            <div className="relative px-4 pt-16 pb-32 text-gray-100 xs:px-8 bg-primary">
                <Link
                    href="/"
                    role="button"
                    className="absolute flex items-center justify-center h-8 px-4 space-x-2 text-xs transition-all duration-300 rounded-full top-2 xs:top-4 left-2 xs:left-4 hover:bg-white/20 group"
                >
                    <FontAwesomeIcon icon={faChevronLeft} className="h-4 text-xs" />
                    <span className="block overflow-hidden text-xs font-semibold transition-all md:w-0 md:group-hover:w-20 md:group-focus:w-20 whitespace-nowrap">
                        Back to Home
                    </span>
                </Link>
                {title && <h1 className="text-3xl font-bold">{title}</h1>}
                {header}
            </div>

            <div>
                <div className="relative px-4 py-8 mx-4 bg-gray-800 border border-transparent shadow-xl xs:mx-8 bottom-20 rounded-2xl">
                    {children}
                </div>

                <div className="flex flex-col mx-4 mb-10 -mt-10 space-y-6 text-sm text-center text-gray-400 xs:mx-8">
                    <p>
                        Use of this website constitutes acceptance of{' '}
                        {process.env.NEXT_PUBLIC_APP_NAME}{' '}
                        <Link href="/terms" className="font-bold hover:underline">
                            terms and conditions
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy" className="font-bold hover:underline">
                            privacy policy
                        </Link>
                    </p>

                    <p>
                        Copyright &copy; {new Date().getFullYear()}{' '}
                        {process.env.NEXT_PUBLIC_APP_NAME} — All rights under copyrights reserved
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
