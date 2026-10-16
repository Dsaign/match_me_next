'use client';

import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';

type InputLinkProps = {
    href: string;
    children: ReactNode;
    icon?: ReactNode | null;
};

export default function InputLink({ href, children, icon }: InputLinkProps) {
    const router = useRouter();
    return (
        <Button
            className="gap-2"
            variant="primary"
            onPress={() => router.push(href)}
        >
            {icon && <span className="inline-flex">{icon}</span>}
            {children}
        </Button>
    );
}
