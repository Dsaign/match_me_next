'use client';

import { Card, Button, Input } from '@heroui/react';
import { GiLockedHeart } from 'react-icons/gi';
import { useForm } from 'react-hook-form';

type Props = {
    animated?: boolean;
};

export default function LoginForm({ animated = false }: Props) {
    const {
        register,
        handleSubmit,
        formState: { isValid, errors },
    } = useForm();
    const onSubmit: (data: any) => void = (data) => {
        console.log(data);
    };
    return (
        <Card
            className={`
                ${animated ? 'animate-fade-in' : ''} w-96 rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg`}
        >
            <Card.Header>
                <Card.Title className="flex flex-col items-center gap-2 justify-center text-2xl font-bold text-gray-400">
                    <div className="flex-row">
                        <GiLockedHeart className="mr-2 inline" />
                        Login
                    </div>
                    <div className="flex-row text-sm text-gray-500">
                        Welcome back to MatchMe!
                    </div>
                </Card.Title>
            </Card.Header>
            <Card.Content>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-2"
                >
                    <Input
                        type="email"
                        placeholder="Email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: 'Invalid email',
                            },
                        })}
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-pink-400 focus:border-pink-400 transition-all duration-300"
                    />
                    <span className="px-1 text-xs text-red-400">
                        {String(errors.email?.message ?? '')}
                    </span>
                    <Input
                        type="password"
                        placeholder="Password"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message:
                                    'Password must be at least 6 characters',
                            },
                        })}
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-pink-400 focus:border-pink-400 transition-all duration-300"
                    />
                    <span className="px-1 text-xs text-red-400">
                        {String(errors.password?.message ?? '')}
                    </span>
                    <Button
                        type="submit"
                        isDisabled={!isValid}
                        className="bg-pink-500 text-white hover:bg-pink-600 mx-auto w-full transition-colors duration-300 focus:ring-1 focus:ring-pink-400 focus:outline-none mt-4"
                    >
                        Login
                    </Button>
                </form>
            </Card.Content>
        </Card>
    );
}
