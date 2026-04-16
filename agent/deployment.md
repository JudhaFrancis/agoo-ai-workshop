# Deployment & Local Setup

## Requirements
- **PHP 8.2+**
- **Node.js 18+**
- **Composer**
- **NPM**
- **XAMPP** (or equivalent MySQL server)

## Local Development Setup

### 1. Backend (Laravel)
```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```
*Note: Ensure `RAZORPAY_KEY` and `RAZORPAY_SECRET` are correctly set in `.env`.*

### 2. Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```
*Note: Configure `NEXT_PUBLIC_API_URL` in `.env.local` (default: http://localhost:8000/api).*

## Production Deployment
- Build frontend: `npm run build`
- Deploy Laravel: Standard LAMP/LEMP stack with `public` directory as root.
- Ensure SSL certificates are active for secure Razorpay transitions.
- High-performance mode: Next.js is configured for Turbopack optimization.
