import Link from 'next/link';
import { GiBanana } from 'react-icons/gi';

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
            <p className="text-md text-gray-600">
                The page you are looking for does not exist :(
            </p>
            <Link
                href="/"
                className="bg-accent-soft px-4 py-2 transition-colors"
            >
                <GiBanana className="mr-2 inline" />
                Go Back Home
            </Link>
        </div>
    );
}
