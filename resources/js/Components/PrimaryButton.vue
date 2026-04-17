<template>
    <button
        v-if="!motion"
        :class="['inline-flex items-center rounded-md border border-transparent bg-slate-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-slate-700 focus:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-slate-900', className]"
    >
        <slot />
    </button>
    <button
        v-else
        v-motion
        :hovered="{ scale: 1.02 }"
        :tapped="{ scale: 0.98 }"
        :class="['inline-flex items-center rounded-md border border-transparent bg-slate-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-slate-700 focus:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-slate-900', className]"
    >
        <slot />
    </button>
</template>

<script setup>
defineProps({
    className: {
        type: String,
        default: '',
    },
    motion: {
        type: Boolean,
        default: false,
    }
});
</script>
