import React from 'react';
import { Metadata } from 'next';
import LoginForm from './LoginForm';

// meta
export const metadata: Metadata = {
    title: 'Login',
};

export default function LoginPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-12">
            <LoginForm animated={true} />
        </div>
    );
}
