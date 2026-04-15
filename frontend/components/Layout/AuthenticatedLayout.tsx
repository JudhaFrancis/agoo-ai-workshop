'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useAuth } from '@/hooks/useAuth';

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuth();

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100">Loading...</div>;
    }

    if (!user) {
        // Redirection should be handled in useAuth or in the page
        return null;
    }

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
            <Header user={user} />

            <main className="flex-grow">
                {children}
            </main>

            <Footer />
        </div>
    );
}
