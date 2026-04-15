'use client';

import axios from '@/lib/axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const csrf = () => axios.get('/sanctum/csrf-cookie');

    const login = async (args: any) => {
        await csrf();
        try {
            await axios.post('/login', args);
            await fetchUser();
            router.push('/');
        } catch (error: any) {
            throw error;
        }
    };

    const register = async (args: any) => {
        await csrf();
        try {
            await axios.post('/register', args);
            await fetchUser();
            router.push('/');
        } catch (error: any) {
            throw error;
        }
    };

    const logout = async () => {
        try {
            await axios.post('/logout');
            setUser(null);
            router.push('/login');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    const fetchUser = async () => {
        try {
            const res = await axios.get('/api/user');
            setUser(res.data);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return {
        user,
        csrf,
        login,
        register,
        logout,
        loading,
    };
};
