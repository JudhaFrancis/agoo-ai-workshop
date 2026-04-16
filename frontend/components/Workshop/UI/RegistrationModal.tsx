'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, MapPin, Loader2, CheckCircle2, AlertCircle, ShieldCheck, Clock, Calendar, Sparkles } from 'lucide-react';
import axios from 'axios';
import { Button, Badge, Select } from './index';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
  onError: (message: string) => void;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const RegistrationModal = ({ isOpen, onClose, onSuccess, onError }: RegistrationModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    occupation: 'Professional (Work)'
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validate = () => {
    const newErrors: any = {};
    if (!formData.name) newErrors.name = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email address is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.address) newErrors.address = 'Complete address is required';
    return newErrors;
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev: any) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const response = await axios.post(`${API_URL}/workshop/register`, formData);
      const order = response.data;

      if (!order.success) throw new Error(order.message || 'Failed to create order');

      const options = {
        key: order.key,
        amount: order.amount,
        currency: 'INR',
        name: 'Agoo Technology',
        description: 'AI in Daily Work Workshop Registration',
        order_id: order.order_id,
        handler: async function (response: any) {
          try {
            const verifyRes = await axios.post(`${API_URL}/workshop/verify-payment`, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            });

            if (verifyRes.data.success) {
              onSuccess('Registration Successful! Welcome to the Agoo AI Workshop.');
              onClose();
            } else {
              throw new Error('Payment verification failed');
            }
          } catch (err: any) {
            onError(err.response?.data?.message || 'Payment verification failed');
          }
        },
        prefill: {
          name: order.name,
          email: order.email,
          contact: order.phone
        },
        theme: { color: '#7c3aed' },
        modal: { ondismiss: () => setIsLoading(false) }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      
    } catch (err: any) {
      onError(err.response?.data?.message || err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-4xl relative z-10 bg-white md:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row md:max-h-[90vh]"
          >
            {/* Sidebar: Workshop Info */}
            <div className="w-full md:w-[320px] bg-slate-50 border-r border-slate-100 p-8 md:p-10 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-black text-slate-900 tracking-tighter uppercase text-sm">Agoo Workshop</span>
                </div>

                <div>
                  <Badge variant="violet" className="mb-3">LIMITED SEATS</Badge>
                  <h2 className="text-xl font-black text-slate-900 leading-tight">AI in Daily Work: From Basic to Pro</h2>
                </div>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                      <Calendar className="w-4 h-4 text-violet-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Date</p>
                      <p className="text-xs font-bold text-slate-700">April 21, 2026</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                      <Clock className="w-4 h-4 text-violet-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Duration</p>
                      <p className="text-xs font-bold text-slate-700">2 Hours Live</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                      <img src="/instructor.png" alt="Instructor" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Instructor</p>
                      <p className="text-xs font-bold text-slate-700">Karthik Ramesh</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-500 font-bold text-xs uppercase tracking-wider">Registration Fee</span>
                  <span className="text-xl font-black text-slate-900">₹100</span>
                </div>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Resources & Certificates Included</p>
              </div>
            </div>

            {/* Main Section: Form */}
            <div className="flex-1 p-8 md:p-10 relative overflow-y-auto">
              <button 
                onClick={onClose}
                className="absolute right-6 top-6 p-2 hover:bg-slate-50 rounded-full transition-all text-slate-300 hover:text-slate-900 z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-8">
                <h3 className="text-xl font-black text-slate-900 mb-1">Registration Details</h3>
                <p className="text-sm text-slate-500 font-medium">Information for your workshop certificate.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                    <input 
                      type="text" 
                      placeholder="e.g. Karthik Ramesh"
                      className={`w-full bg-transparent border-b-2 ${errors.name ? 'border-red-500' : 'border-slate-100'} focus:border-violet-600 py-2.5 pl-8 pr-4 outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300 text-sm`}
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                    />
                  </div>
                  {errors.name && <p className="text-[9px] text-red-500 font-black uppercase tracking-wider">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                      <input 
                        type="email" 
                        placeholder="karthik@agoo.in"
                        className={`w-full bg-transparent border-b-2 ${errors.email ? 'border-red-500' : 'border-slate-100'} focus:border-violet-600 py-2.5 pl-8 pr-4 outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300 text-sm`}
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                      />
                    </div>
                    {errors.email && <p className="text-[9px] text-red-500 font-black uppercase tracking-wider">{errors.email}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                      <input 
                        type="tel" 
                        placeholder="89034 89173"
                        className={`w-full bg-transparent border-b-2 ${errors.phone ? 'border-red-500' : 'border-slate-100'} focus:border-violet-600 py-2.5 pl-8 pr-4 outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300 text-sm`}
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                      />
                    </div>
                    {errors.phone && <p className="text-[9px] text-red-500 font-black uppercase tracking-wider">{errors.phone}</p>}
                  </div>
                </div>

                <Select 
                  label="Occupation"
                  options={["School Student", "College Student", "Professional (Work)", "Business Owner"]}
                  value={formData.occupation}
                  onChange={(val: string) => handleChange('occupation', val)}
                />

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Mailing Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-0 top-3 w-4 h-4 text-slate-300" />
                    <textarea 
                      placeholder="Complete address for your certificate..."
                      rows={2}
                      className={`w-full bg-transparent border-b-2 ${errors.address ? 'border-red-500' : 'border-slate-100'} focus:border-violet-600 py-2.5 pl-8 pr-4 outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300 text-sm resize-none`}
                      value={formData.address}
                      onChange={(e) => handleChange('address', e.target.value)}
                    />
                  </div>
                  {errors.address && <p className="text-[9px] text-red-500 font-black uppercase tracking-wider">{errors.address}</p>}
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full py-4 text-base rounded-2xl font-black shadow-xl shadow-violet-200"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Pay ₹100 & Register Now'
                    )}
                  </Button>
                  
                  <div className="mt-6 flex items-center justify-center gap-4 opacity-40 border-t border-slate-100 pt-6">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-[9px] font-black text-slate-900 uppercase tracking-widest">Secure SSL</span>
                    </div>
                    <div className="h-3 w-px bg-slate-200" />
                    <span className="text-[9px] font-black text-slate-900 uppercase tracking-widest">Razorpay Protected</span>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
