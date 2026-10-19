'use client';

import ButtonLink from '@/components/ButtonLink';
import Link from 'next/link';
import { GiSelfLove } from 'react-icons/gi';
import { usePathname } from 'next/navigation';

const links = [
    { label: 'Matches', href: '/matches' },
    { label: 'Lists', href: '/lists' },
    { label: 'Messages', href: '/messages' },
];

const navButtonClassName =
    'bg-transparent border-2 text-white transition-colors duration-300 hover:bg-pink-700';

export default function TopNav() {
    const pathname = usePathname();
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-linear-to-r from-pink-400 via-red-400 to-pink-600">
            <Link href="/" className="flex justify-start text-xl font-bold">
                <GiSelfLove size={40} className="text-gray-200" />
                <div className="font-bold text-3xl pl-0.5">
                    <span className="text-gray-200">MatchMe</span>
                </div>
            </Link>
            <div className="text-white flex justify-center gap-4 text-lg uppercase data-[active=true]:text-blue-200">
                {links.map(({ label, href }) => {
                    const isActive =
                        pathname === href || pathname.startsWith(`${href}/`);
                    return (
                        <Link
                            key={href}
                            href={href}
                            data-active={isActive}
                            aria-current={isActive ? 'page' : undefined}
                            className="text.sm transition-colors hover:text-primary data-[active=true]:text-amber-200"
                        >
                            {label}
                        </Link>
                    );
                })}
            </div>
            <div className="flex justify-end items-right gap-4">
                <ButtonLink href="/login" className={navButtonClassName}>
                    Login
                </ButtonLink>
                <ButtonLink href="/register" className={navButtonClassName}>
                    Register
                </ButtonLink>
            </div>
        </nav>
    );
}
