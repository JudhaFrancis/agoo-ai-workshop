<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\WorkshopRegistration;
use Razorpay\Api\Api;
use Exception;

class WorkshopRegistrationController extends Controller
{
    private $razorpay;

    public function __construct()
    {
        $this->razorpay = new Api(env('RAZORPAY_KEY'), env('RAZORPAY_SECRET'));
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:15',
            'address' => 'required|string',
            'occupation' => 'required|string'
        ]);

        try {
            $amount = 99; // ₹99
            
            $orderData = [
                'receipt'         => 'rcpt_' . uniqid(),
                'amount'          => $amount * 100, // in paise
                'currency'        => 'INR',
                'payment_capture' => 1
            ];

            $order = $this->razorpay->order->create($orderData);

            $registration = WorkshopRegistration::create([
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'address' => $request->address,
                'occupation' => $request->occupation,
                'amount' => $amount,
                'payment_status' => 'pending',
                'razorpay_order_id' => $order['id'],
                'audit_info' => [
                    'ip' => $request->ip(),
                    'user_agent' => $request->header('User-Agent'),
                    'created_at' => now()
                ]
            ]);

            return response()->json([
                'success' => true,
                'order_id' => $order['id'],
                'amount' => $amount * 100,
                'key' => env('RAZORPAY_KEY'),
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone
            ]);

        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function verifyPayment(Request $request)
    {
        $request->validate([
            'razorpay_order_id' => 'required',
            'razorpay_payment_id' => 'required',
            'razorpay_signature' => 'required'
        ]);

        try {
            $attributes = [
                'razorpay_order_id' => $request->razorpay_order_id,
                'razorpay_payment_id' => $request->razorpay_payment_id,
                'razorpay_signature' => $request->razorpay_signature
            ];

            $this->razorpay->utility->verifyPaymentSignature($attributes);

            $registration = WorkshopRegistration::where('razorpay_order_id', $request->razorpay_order_id)->first();
            
            if ($registration) {
                $registration->update([
                    'payment_status' => 'paid',
                    'razorpay_payment_id' => $request->razorpay_payment_id
                ]);

                return response()->json([
                    'success' => true,
                    'message' => 'Payment verified successfully.'
                ]);
            }

            return response()->json([
                'success' => false,
                'message' => 'Registration record not found.'
            ], 404);

        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Payment verification failed: ' . $e->getMessage()
            ], 400);
        }
    }

    public function getRecent()
    {
        try {
            $recent = \App\Models\WorkshopRegistration::where('payment_status', 'paid')
                ->latest()
                ->take(5)
                ->get()
                ->map(function($reg) {
                    // Extract first name
                    $firstName = explode(' ', trim($reg->name))[0];
                    
                    // Extract potential city from address (last part of comma separated list)
                    $parts = explode(',', $reg->address);
                    $city = trim(end($parts));
                    if (strlen($city) > 20) $city = 'India'; // Fallback if address is just text

                    return [
                        'name' => $firstName,
                        'city' => $city,
                        'time' => $reg->created_at->diffForHumans()
                    ];
                });

            return response()->json($recent);
        } catch (\Exception $e) {
            return response()->json([], 500);
        }
    }

    public function getStats()
    {
        try {
            $capacity = 50;
            $paidCount = \App\Models\WorkshopRegistration::where('payment_status', 'paid')->count();
            
            $seatsLeft = max($capacity - $paidCount, 0);
            $percentage = $capacity > 0 ? min(round(($paidCount / $capacity) * 100), 100) : 0;

            return response()->json([
                'total' => $paidCount,
                'capacity' => $capacity,
                'seats_left' => $seatsLeft,
                'percentage' => $percentage
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'total' => 0,
                'capacity' => 50,
                'seats_left' => 50,
                'percentage' => 0
            ], 500);
        }
    }
}
