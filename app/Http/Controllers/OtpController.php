<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class OtpController extends Controller
{
    public function verify(Request $request)
{
    $request->validate([
        'phone_number' => 'required',
        'otp' => 'required|digits:6',
    ]);

    $user = User::where('phone_number', $request->phone_number)->first();

    if (!$user) {
        return back()->withErrors(['phone' => 'User not found.']);
    }

    $storedOtp = Cache::get('otp_' . $user->id);
    Log::info($request->otp. 'and cache otp is' . $storedOtp);
    if ($storedOtp && $storedOtp == $request->otp) {
        // OTP is valid; log the user in
        Auth::login($user);

        // Clear the OTP
        Cache::forget('otp_' . $user->id);

        return redirect()->route('dashboard');
    }

    return back()->withErrors(['otp' => 'Invalid or expired OTP.']);
}
}
