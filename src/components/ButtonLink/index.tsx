'use client';

import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';

type InputLinkProps = {
    href: string;
    children: ReactNode;
    icon?: ReactNode | null;
    className?: string;
};

export default function InputLink({
    href,
    children,
    icon,
    className,
}: InputLinkProps) {
    const router = useRouter();
    return (
        <Button
            className={`gap-2 ${className ?? ''}`}
            onPress={() => router.push(href)}
        >
            {icon && <span className="inline-flex">{icon}</span>}
            {children}
        </Button>
    );
}
