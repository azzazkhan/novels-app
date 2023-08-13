import { ReactNode } from 'react';
import { redirectIfAuthenticated } from 'lib/session';

import background from 'assets/images/covers/shooting-stars-dark-sky-girl.png';

interface Props {
    children?: ReactNode;
}

const AuthLayout: ServerComponent<Props> = async ({ children }) => {
    const redirect = await redirectIfAuthenticated();

    if (redirect) return redirect;

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
