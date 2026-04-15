import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
    href: string;
    active?: boolean;
    children: ReactNode;
}

export default function NavLink({ href, active, children }: Props) {
    return (
        <Link
            href={href}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-indigo-400 dark:border-indigo-600 text-slate-900 dark:text-gray-100 focus:border-indigo-700'
                    : 'border-transparent text-slate-500 dark:text-gray-400 hover:text-slate-700 dark:hover:text-gray-300 hover:border-slate-300 dark:hover:border-gray-700 focus:text-slate-700 dark:focus:text-gray-300 focus:border-slate-300 dark:focus:border-gray-700')
            }
        >
            {children}
        </Link>
    );
}

