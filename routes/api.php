<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\WorkshopRegistrationController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/workshop/register', [WorkshopRegistrationController::class, 'register']);
Route::post('/workshop/verify-payment', [WorkshopRegistrationController::class, 'verifyPayment']);
Route::get('/workshop/recent', [WorkshopRegistrationController::class, 'getRecent']);
Route::get('/workshop/stats', [WorkshopRegistrationController::class, 'getStats']);
