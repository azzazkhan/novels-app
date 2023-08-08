import type { FC } from 'react';
import { Metadata } from 'next';
import { Card } from '../_server-components';
import Form from './Form';

const Login: FC = () => {
    return (
        <Card title={`Welcome to ${process.env.NEXT_PUBLIC_APP_NAME}`}>
            <Form />
        </Card>
    );
};

export const metadata: Metadata = {
    title: 'Sign up',
};

export default Login;
