# Backend Documentation - Laravel 11

## Architecture
The backend is built with **Laravel 11**, focusing on a lean and secure API structure for the Workshop Registration system.

## Key Components

### Models
- **WorkshopRegistration**: Manages all registration data, including personal info, occupation, and payment metadata.
    - Fields: `name`, `email`, `phone`, `address`, `occupation`, `amount`, `payment_status`, `razorpay_order_id`, `razorpay_payment_id`, `audit_info`.

### Controllers
- **WorkshopRegistrationController**:
    - `register()`: Validates user data, creates a Razorpay Order (₹100), and initializes a pending registration record.
    - `verifyPayment()`: Cryptographically verifies the Razorpay signature and updates the record to `paid`.

## API Endpoints
- `POST /api/workshop/register`: Initiate a new registration.
- `POST /api/workshop/verify-payment`: Finalize transaction after successful checkout.

## Payment Integration
We utilize the high-level **Razorpay PHP SDK** for secure order creation and signature verification. Razorpay keys are managed via the `.env` file for security.

## Database Schema
The system uses a dedicated migration for `workshop_registrations` with robust indexing for fast lookups by `razorpay_order_id`.
