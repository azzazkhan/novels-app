import { FC, ReactNode } from 'react';
import background from 'assets/images/covers/shooting-stars-dark-sky-girl.png';

interface Props {
    children?: ReactNode;
}

const AuthLayout: FC<Props> = ({ children }) => {
    return (
        <div
            className="w-full min-h-screen bg-fixed bg-center bg-cover"
            style={{ backgroundImage: `url('${background.src}')` }}
        >
            <div className="flex flex-col items-center justify-center min-h-screen xs:p-10 bg-black/20 backdrop-blur-sm">
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
