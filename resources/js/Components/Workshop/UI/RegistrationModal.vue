<template>
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 overflow-y-auto">
      <div 
        @click="$emit('close')"
        class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
      />
      
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-95 translate-y-4"
        enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100 translate-y-0"
        leave-to-class="opacity-0 scale-95 translate-y-4"
      >
        <div class="w-full max-w-4xl relative z-10 bg-white md:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row md:max-h-[90vh]">
          <!-- Sidebar: Workshop Info -->
          <div class="w-full md:w-[320px] bg-slate-50 border-r border-slate-100 p-8 md:p-10 flex flex-col justify-between overflow-y-auto">
            <div class="space-y-6">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                  <Sparkles class="w-4 h-4 text-white" />
                </div>
                <span class="font-black text-slate-900 tracking-tighter uppercase text-sm">Agoo Workshop</span>
              </div>

              <div>
                <Badge variant="violet" class="mb-3">LIMITED SEATS</Badge>
                <h2 class="text-xl font-black text-slate-900 leading-tight">AI in Daily Work: From Basic to Pro</h2>
              </div>
              
              <div class="space-y-5">
                <div class="flex items-start gap-4">
                  <div class="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                    <Calendar class="w-4 h-4 text-violet-600" />
                  </div>
                  <div>
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Date</p>
                    <p class="text-xs font-bold text-slate-700">April 21, 2026</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                    <Clock class="w-4 h-4 text-violet-600" />
                  </div>
                  <div>
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Duration</p>
                    <p class="text-xs font-bold text-slate-700">2 Hours Live</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                    <img src="/images/instructor.png" alt="Instructor" class="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Instructor</p>
                    <p class="text-xs font-bold text-slate-700">Karthik Ramesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-8 pt-6 border-t border-slate-200">
              <div class="flex items-center justify-between mb-1">
                <span class="text-slate-500 font-bold text-xs uppercase tracking-wider">Registration Fee</span>
                <span class="text-xl font-black text-slate-900">₹100</span>
              </div>
              <p class="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Resources & Certificates Included</p>
            </div>
          </div>

          <!-- Main Section: Form -->
          <div class="flex-1 p-8 md:p-10 relative overflow-y-auto">
            <button 
              @click="$emit('close')"
              class="absolute right-6 top-6 p-2 hover:bg-slate-50 rounded-full transition-all text-slate-300 hover:text-slate-900 z-20"
            >
              <X class="w-5 h-5" />
            </button>

            <div class="mb-8">
              <h3 class="text-xl font-black text-slate-900 mb-1">Registration Details</h3>
              <p class="text-sm text-slate-500 font-medium">Information for your workshop certificate.</p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="space-y-1.5">
                <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                <div class="relative">
                  <User class="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                  <input 
                    type="text" 
                    placeholder="e.g. Karthik Ramesh"
                    :class="['w-full bg-transparent border-b-2 focus:border-violet-600 py-2.5 pl-8 pr-4 outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300 text-sm', errors.name ? 'border-red-500' : 'border-slate-100']"
                    v-model="formData.name"
                  />
                </div>
                <p v-if="errors.name" class="text-[9px] text-red-500 font-black uppercase tracking-wider">{{ errors.name }}</p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-1.5">
                  <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
                  <div class="relative">
                    <Mail class="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                    <input 
                      type="email" 
                      placeholder="karthik@agoo.in"
                      :class="['w-full bg-transparent border-b-2 focus:border-violet-600 py-2.5 pl-8 pr-4 outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300 text-sm', errors.email ? 'border-red-500' : 'border-slate-100']"
                      v-model="formData.email"
                    />
                  </div>
                  <p v-if="errors.email" class="text-[9px] text-red-500 font-black uppercase tracking-wider">{{ errors.email }}</p>
                </div>

                <div class="space-y-1.5">
                  <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone</label>
                  <div class="relative">
                    <Phone class="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                    <input 
                      type="tel" 
                      placeholder="89034 89173"
                      :class="['w-full bg-transparent border-b-2 focus:border-violet-600 py-2.5 pl-8 pr-4 outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300 text-sm', errors.phone ? 'border-red-500' : 'border-slate-100']"
                      v-model="formData.phone"
                    />
                  </div>
                  <p v-if="errors.phone" class="text-[9px] text-red-500 font-black uppercase tracking-wider">{{ errors.phone }}</p>
                </div>
              </div>

              <CustomSelect 
                label="Occupation"
                :options="['School Student', 'College Student', 'Professional (Work)', 'Business Owner']"
                v-model:value="formData.occupation"
              />

              <div class="space-y-1.5">
                <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Mailing Address</label>
                <div class="relative">
                  <MapPin class="absolute left-0 top-3 w-4 h-4 text-slate-300" />
                  <textarea 
                    placeholder="Complete address for your certificate..."
                    rows="2"
                    :class="['w-full bg-transparent border-b-2 focus:border-violet-600 py-2.5 pl-8 pr-4 outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300 text-sm resize-none', errors.address ? 'border-red-500' : 'border-slate-100']"
                    v-model="formData.address"
                  />
                </div>
                <p v-if="errors.address" class="text-[9px] text-red-500 font-black uppercase tracking-wider">{{ errors.address }}</p>
              </div>

              <div class="pt-4">
                <Button 
                  type="submit" 
                  variant="primary" 
                  class="w-full py-4 text-base rounded-2xl font-black shadow-xl shadow-violet-200"
                  :disabled="isLoading"
                >
                  <template v-if="isLoading">
                    <Loader2 class="w-4 h-4 mr-2 animate-spin" />
                    Processing...
                  </template>
                  <template v-else>
                    Pay ₹100 & Register Now
                  </template>
                </Button>
                
                <div class="mt-6 flex items-center justify-center gap-4 opacity-40 border-t border-slate-100 pt-6">
                  <div class="flex items-center gap-1.5">
                    <ShieldCheck class="w-3.5 h-3.5 text-emerald-600" />
                    <span class="text-[9px] font-black text-slate-900 uppercase tracking-widest">Secure SSL</span>
                  </div>
                  <div class="h-3 w-px bg-slate-200" />
                  <span class="text-[9px] font-black text-slate-900 uppercase tracking-widest">Razorpay Protected</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue';
import { 
  X, User, Mail, Phone, MapPin, Loader2, Sparkles, Calendar, Clock, ShieldCheck 
} from 'lucide-vue-next';
import axios from 'axios';
import Button from './Button.vue';
import Badge from './Badge.vue';
import CustomSelect from './CustomSelect.vue';

const props = defineProps({
  isOpen: Boolean
});

const emit = defineEmits(['close', 'success', 'error']);

const formData = ref({
  name: '',
  email: '',
  phone: '',
  address: '',
  occupation: 'Professional (Work)'
});

const isLoading = ref(false);
const errors = ref({});

const API_URL = '/api'; // Using relative path for Laravel

// Lock background scroll when modal is open
watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
});

onUnmounted(() => {
  document.body.style.overflow = 'unset';
});

const validate = () => {
  const newErrors = {};
  if (!formData.value.name) newErrors.name = 'Full name is required';
  if (!formData.value.email) newErrors.email = 'Email address is required';
  else if (!/\S+@\S+\.\S+/.test(formData.value.email)) newErrors.email = 'Please enter a valid email';
  if (!formData.value.phone) newErrors.phone = 'Phone number is required';
  if (!formData.value.address) newErrors.address = 'Complete address is required';
  return newErrors;
};

const handleSubmit = async () => {
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    errors.value = validationErrors;
    return;
  }

  isLoading.value = true;
  errors.value = {};

  try {
    const response = await axios.post(`${API_URL}/workshop/register`, formData.value);
    const order = response.data;

    if (!order.success) throw new Error(order.message || 'Failed to create order');

    const options = {
      key: order.key,
      amount: order.amount,
      currency: 'INR',
      name: 'Agoo Technology',
      description: 'AI in Daily Work Workshop Registration',
      order_id: order.order_id,
      handler: async function (response) {
        try {
          const verifyRes = await axios.post(`${API_URL}/workshop/verify-payment`, {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature
          });

          if (verifyRes.data.success) {
            emit('success', 'Registration Successful! Welcome to the Agoo AI Workshop.');
            emit('close');
          } else {
            throw new Error('Payment verification failed');
          }
        } catch (err) {
          emit('error', err.response?.data?.message || 'Payment verification failed');
        }
      },
      prefill: {
        name: order.name,
        email: order.email,
        contact: order.phone
      },
      theme: { color: '#7c3aed' },
      modal: { ondismiss: () => isLoading.value = false }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
    
  } catch (err) {
    emit('error', err.response?.data?.message || err.message || 'Something went wrong');
  } finally {
    isLoading.value = false;
  }
};
</script>
