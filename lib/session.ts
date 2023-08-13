import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from 'pages/api/auth/[...nextauth]';

export const redirectIfAuthenticated = async (callback?: string) => {
    const session = await getServerSession(authOptions);

    if (session) return redirect(callback || '/');

    return false;
};
