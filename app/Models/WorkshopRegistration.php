<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WorkshopRegistration extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'address',
        'occupation',
        'amount',
        'payment_status',
        'razorpay_order_id',
        'razorpay_payment_id',
        'audit_info'
    ];

    protected $casts = [
        'audit_info' => 'json',
        'amount' => 'decimal:2'
    ];
}
