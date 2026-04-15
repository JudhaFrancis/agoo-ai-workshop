'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { MotionPrimaryButton } from '@/components/Buttons/PrimaryButton';

import { useAuth } from '@/hooks/useAuth';

export default function WelcomePage() {
    const { user, loading } = useAuth();

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
        </div>;
    }

    return (
        <div className="relative min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 overflow-hidden">
            <Header user={user} />

            <main className="flex-grow relative flex flex-col items-center justify-center selection:bg-indigo-500 selection:text-white px-6 py-12">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.1, 0.15, 0.1],
                            rotate: [0, 5, 0]
                        }}
                        transition={{ 
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
                    />
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1],
                            rotate: [0, -5, 0]
                        }}
                        transition={{ 
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                        className="absolute top-1/2 -right-24 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl"
                    />
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.15, 1],
                            opacity: [0.1, 0.15, 0.1]
                        }}
                        transition={{ 
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                        className="absolute -bottom-24 left-1/4 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl"
                    />
                </div>

                <div className="z-10 w-full max-w-4xl text-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8 flex justify-center"
                    >
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl shadow-indigo-500/10 border border-slate-100 dark:border-slate-700 transform hover:scale-105 transition-transform duration-300">
                            <svg className="w-16 h-16 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6"
                    >
                        Fresh <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">Start</span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        Welcome to your newly reset project, now powered by Next.js and Framer Motion. 
                        The core UI components have been ported and are ready for you to build something spectacular.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        {user ? (
                            <Link href="/profile">
                                <MotionPrimaryButton className="px-8 py-4 text-lg rounded-full">
                                    Dashboard
                                </MotionPrimaryButton>
                            </Link>
                        ) : (
                            <>
                                <Link href="/login">
                                    <MotionPrimaryButton className="px-8 py-4 text-lg rounded-full">
                                        Get Started
                                    </MotionPrimaryButton>
                                </Link>

                                <Link href="/register" className="px-8 py-4 text-lg font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    Register
                                </Link>
                            </>
                        )}
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

