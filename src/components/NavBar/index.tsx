import Link from 'next/link';
import { GiSelfLove } from 'react-icons/gi';

const links = [
    // { label: 'Home', href: '/' },
    { label: 'Matches', href: '/matches' },
    { label: 'Lists', href: '/lists' },
    { label: 'Messages', href: '/messages' },
];

export default function TopNav() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-linear-to-r from-pink-400 via-red-400 to-pink-600">
            <Link href="/" className="text-xl font-bold flex">
                <GiSelfLove size={40} className="text-gray-200" />
                <div className="font-bold text-3xl pl-0.5">
                    <span className="text-gray-200">MatchMe</span>
                </div>
            </Link>
            <div className="flex items-center gap-6 text-lg uppercase data-[active=true]:text-yellow-200">
                {links.map(({ label, href }) => (
                    <Link
                        key={href}
                        href={href}
                        className="text.sm transition-colors hover:text-primary"
                    >
                        {label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
