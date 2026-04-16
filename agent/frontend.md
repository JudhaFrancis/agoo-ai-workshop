# Frontend Documentation - Next.js 16 (Turbopack)

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **HTTP Client**: Axios

## Design System
The "Agoo AI Workshop" landing page follows a "Standard" premium professional redesign:
- **Navigation**: Persistent glassmorphic header with smooth-scroll section tracking.
- **Components**: Reusable UI library (Button, Badge, Card, Select) with accessible Headless UI integrations.
- **Registration**: Two-column responsive modal featuring a sidebar summary and a streamlined conversion form.

## Payment Flow (Razorpay)
1. **Initiate**: `RegistrationModal` calls `/api/workshop/register`.
2. **Checkout**: Opens standard Razorpay checkout interface (₹100).
3. **Verify**: Upon success, calls `/api/workshop/verify-payment`.
4. **Feedback**: Real-time animated toast notifications for success/error states.

## Environment Config
The frontend uses `.env.local` to define `NEXT_PUBLIC_API_URL`, allowing for seamless migration between local development and production API endpoints.
