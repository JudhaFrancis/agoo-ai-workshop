# Frontend Documentation

## Technology Stack
- **Framework**: Vue 3 (Composition API)
- **Communication**: Inertia.js (Inertia Vue 3)
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Navigation**: Ziggy (Laravel routes in JS)

## Key Components
- **Layouts**: `AuthenticatedLayout.vue`, `GuestLayout.vue`
- **Header**: `Components/Header/Header.vue` (Handles navigation, search, and user menu)
- **Modals**: Custom implementation for Login/Register.

## State Management
- **Local State**: Vue `ref` and `computed` properties.
- **Global State**: Inertia `usePage()` for shared data (auth, settings, flash messages).

## Features
- **Loader UI**: Integrated into the header bottom border, synced with Inertia navigation events.
- **Search**: Debounced autocomplete for categories and products.
- **Responsive Design**: Mobile-first navigation drawer.
