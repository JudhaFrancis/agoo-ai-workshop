<template>
  <div :class="['space-y-1.5', className]">
    <label v-if="label" class="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">{{ label }}</label>
    <Listbox :modelValue="value" @update:modelValue="$emit('update:value', $event)">
      <div class="relative">
        <ListboxButton class="relative w-full bg-slate-50 border-2 border-slate-100 focus:border-violet-600 rounded-2xl py-3.5 pl-6 pr-10 text-left outline-none transition-all font-medium text-slate-900 group">
          <span class="block truncate">{{ value }}</span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
            <ChevronDown class="h-5 w-5 text-slate-400 group-data-[open]:rotate-180 transition-transform duration-300" />
          </span>
        </ListboxButton>
        <transition
          leave-active-class="transition ease-in duration-100"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions class="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-2xl bg-white p-1 text-base shadow-2xl ring-1 ring-black/5 focus:outline-none sm:text-sm">
            <ListboxOption
              v-for="(option, idx) in options"
              :key="idx"
              :value="option"
              v-slot="{ active, selected }"
              as="template"
            >
              <li :class="[
                'group relative cursor-pointer select-none py-3 pl-10 pr-4 rounded-xl text-slate-600 transition-colors',
                active ? 'bg-violet-50 text-violet-700' : ''
              ]">
                <span :class="['block truncate font-medium', selected ? 'font-black text-violet-700' : '']">
                  {{ option }}
                </span>
                <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-violet-600">
                  <Check class="h-4 w-4" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup>
import { 
  Listbox, 
  ListboxButton, 
  ListboxOption, 
  ListboxOptions 
} from '@headlessui/vue';
import { ChevronDown, Check } from 'lucide-vue-next';

defineProps({
  label: String,
  options: {
    type: Array,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  }
});

defineEmits(['update:value']);
</script>
