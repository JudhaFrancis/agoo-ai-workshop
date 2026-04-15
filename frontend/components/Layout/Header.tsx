'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ApplicationLogo from '@/components/Common/ApplicationLogo';
import { Dropdown, DropdownLink } from '@/components/Overlays/Dropdown';
import NavLink from './NavLink';
import { usePathname } from 'next/navigation';

export default function Header({ user }: { user?: any }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navClasses = `sticky top-0 w-full z-50 transition-all duration-300 bg-white dark:bg-slate-900 ${
        isScrolled
            ? 'border-b border-gray-100 dark:border-slate-800 shadow-sm'
            : 'border-transparent'
    }`;

    return (
        <nav className={navClasses}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 justify-between items-center">
                    <div className="flex items-center">
                        <div className="flex shrink-0 items-center">
                            <Link href="/">
                                <ApplicationLogo className="block h-10 w-auto fill-current text-indigo-600" />
                            </Link>
                        </div>

                        <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex items-center">
                            <NavLink href="/" active={pathname === '/'}>
                                Home
                            </NavLink>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        {user ? (
                            <Dropdown
                                trigger={
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                                    >
                                        {user.name}
                                        <svg
                                            className="ml-2 -mr-0.5 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                }
                            >
                                <DropdownLink href="/profile">Profile</DropdownLink>
                                <DropdownLink href="/logout" method="post" as="button">
                                    Log Out
                                </DropdownLink>
                            </Dropdown>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href="/register"
                                    className="ml-4 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

