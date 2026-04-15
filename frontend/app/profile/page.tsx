'use client';

import React, { useState } from 'react';
import AuthenticatedLayout from '@/components/Layout/AuthenticatedLayout';
import { useAuth } from '@/hooks/useAuth';
import TextInput from '@/components/Forms/TextInput';
import InputLabel from '@/components/Forms/InputLabel';
import InputError from '@/components/Forms/InputError';
import { MotionPrimaryButton } from '@/components/Buttons/PrimaryButton';
import axios from '@/lib/axios';

export default function ProfilePage() {
    const { user } = useAuth();
    const [name, setName] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState<any>({});
    const [status, setStatus] = useState<string | null>(null);

    React.useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
    }, [user]);

    const submitProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});
        setStatus(null);

        try {
            await axios.patch('/profile', { name, email });
            setStatus('Profile updated successfully.');
        } catch (error: any) {
            if (error.response?.data?.errors) {
                setErrors(error.response.data.errors);
            }
        } finally {
            setProcessing(false);
        }
    };

    return (
        <AuthenticatedLayout>
            {/* Compact Hero Section */}
            <div className="relative bg-slate-900 py-12 md:py-16 overflow-hidden transition-colors duration-500">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 -left-4 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-0 -right-4 w-48 h-48 bg-violet-500/20 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-2xl md:text-3xl font-black text-white px-4">
                        Account Information
                    </h1>
                </div>
            </div>

            <div className="py-12">
                <div className="mx-auto max-w-4xl space-y-8 sm:px-6 lg:px-8 px-4">
                    {/* Profile Information Card */}
                    <div className="bg-white dark:bg-slate-800 overflow-hidden shadow-sm sm:rounded-2xl border border-slate-100 dark:border-slate-700 p-6 sm:p-10 transition-colors duration-500">
                        <header className="mb-6">
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Profile Information</h2>
                            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                                Update your account's profile information and email address.
                            </p>
                        </header>

                        <form onSubmit={submitProfile} className="max-w-xl space-y-6">
                            <div>
                                <InputLabel htmlFor="name" value="Name" />
                                <TextInput
                                    id="name"
                                    value={name}
                                    className="mt-1 block w-full"
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    autoComplete="name"
                                />
                                <InputError message={errors.name?.[0]} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="email" value="Email" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    value={email}
                                    className="mt-1 block w-full"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    autoComplete="username"
                                />
                                <InputError message={errors.email?.[0]} className="mt-2" />
                            </div>

                            <div className="flex items-center gap-4">
                                <MotionPrimaryButton disabled={processing} className="bg-indigo-600 hover:bg-indigo-700 rounded-xl">
                                    Save
                                </MotionPrimaryButton>

                                {status && (
                                    <p className="text-sm text-green-600 dark:text-green-400">
                                        Saved.
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

