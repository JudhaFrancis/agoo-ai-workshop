import Link from 'next/link';
import ApplicationLogo from '@/components/Common/ApplicationLogo';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center md:order-2">
                    <Link href="/" className="text-slate-400 hover:text-indigo-600 transition-colors">
                        <span className="sr-only">Home</span>
                        <ApplicationLogo className="h-6 w-auto fill-current" />
                    </Link>
                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
                        &copy; {new Date().getFullYear()} Your New Project. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
