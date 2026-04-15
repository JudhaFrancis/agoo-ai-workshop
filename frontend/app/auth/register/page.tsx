'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import TextInput from '@/components/Forms/TextInput';
import InputLabel from '@/components/Forms/InputLabel';
import InputError from '@/components/Forms/InputError';
import { MotionPrimaryButton } from '@/components/Buttons/PrimaryButton';
import { motion } from 'framer-motion';

export default function RegisterPage() {
    const { register } = useAuth();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const [errors, setErrors] = useState<any>({});
    const [processing, setProcessing] = useState(false);

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});

        try {
            await register(data);
        } catch (error: any) {
            if (error.response?.data?.errors) {
                setErrors(error.response.data.errors);
            }
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-6 transition-colors duration-500">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md"
            >
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
                    <div className="mb-8 text-center">
                        <Link href="/" className="inline-block">
                            <div className="p-3 bg-indigo-600 rounded-xl text-white shadow-lg shadow-indigo-600/20">
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                        </Link>
                        <h2 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white">Create account</h2>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">Join us and start your fresh project today</p>
                    </div>

                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <InputLabel htmlFor="name" value="Name" />
                            <TextInput
                                id="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                                required
                                isFocused={true}
                                autoComplete="name"
                            />
                            <InputError message={errors.name?.[0]} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                                required
                                autoComplete="username"
                            />
                            <InputError message={errors.email?.[0]} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                onChange={(e) => setData({ ...data, password: e.target.value })}
                                required
                                autoComplete="new-password"
                            />
                            <InputError message={errors.password?.[0]} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                onChange={(e) => setData({ ...data, password_confirmation: e.target.value })}
                                required
                                autoComplete="new-password"
                            />
                            <InputError message={errors.password_confirmation?.[0]} className="mt-2" />
                        </div>

                        <div className="pt-2">
                            <MotionPrimaryButton
                                className="w-full py-3 text-sm rounded-xl justify-center bg-indigo-600 hover:bg-indigo-700"
                                disabled={processing}
                            >
                                {processing ? 'Creating account...' : 'Create account'}
                            </MotionPrimaryButton>
                        </div>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Already have an account?{' '}
                            <Link href="/auth/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
