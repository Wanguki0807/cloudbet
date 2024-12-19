import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-on-surface-2 justify-center">
            <div className="h-full w-full overflow-hidden">
                {children}
            </div>
        </div>
    );
}
