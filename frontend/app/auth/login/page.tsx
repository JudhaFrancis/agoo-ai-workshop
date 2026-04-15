'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import TextInput from '@/components/Forms/TextInput';
import InputLabel from '@/components/Forms/InputLabel';
import InputError from '@/components/Forms/InputError';
import Checkbox from '@/components/Forms/Checkbox';
import { MotionPrimaryButton } from '@/components/Buttons/PrimaryButton';
import { motion } from 'framer-motion';

export default function LoginPage() {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [errors, setErrors] = useState<any>({});
    const [processing, setProcessing] = useState(false);

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});

        try {
            await login({
                email,
                password,
                remember: remember ? 'on' : '',
            });
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
                        <h2 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white">Welcome back</h2>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">Please enter your details to sign in</p>
                    </div>

                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                value={email}
                                className="mt-1 block w-full"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                isFocused={true}
                                autoComplete="username"
                            />
                            <InputError message={errors.email?.[0]} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                value={password}
                                className="mt-1 block w-full"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                autoComplete="current-password"
                            />
                            <InputError message={errors.password?.[0]} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={remember}
                                    onChange={(e) => setRemember(e.target.checked)}
                                />
                                <span className="ms-2 text-sm text-slate-600 dark:text-slate-400">Remember me</span>
                            </label>

                            <Link
                                href="/password.request"
                                className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        <MotionPrimaryButton
                            className="w-full py-3 text-sm rounded-xl justify-center bg-indigo-600 hover:bg-indigo-700"
                            disabled={processing}
                        >
                            {processing ? 'Signing in...' : 'Sign in'}
                        </MotionPrimaryButton>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Don't have an account?{' '}
                            <Link href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
