<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\SendOtp;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    use SendOtp;
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {

        // Authenticate the user
        $request->authenticate();
        // Generate and handle OTP
        $result = $this->handleOtp(Auth::user());

        if ($result['success']) {
            // Log out temporarily until OTP verification
            Auth::logout();

            // Redirect to OTP verification page
            return redirect()->route('auth.otp')->with('phone', $result['phone']);
        }

        // If OTP sending fails, return with error
        Auth::logout();
        return redirect()->back()->withErrors(['error' => $result['message']]);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }

    protected function handleOtp($user): array
{   Log::info($user);
    if (!$user->phone_number) {
        return [
            'success' => false,
            'message' => 'Phone number not found.',
        ];
    }

    try {
        // Generate a 6-digit OTP
        $otp = random_int(100000, 999999);

        // Store OTP in cache (expires in 5 minutes)
        Cache::put('otp_' . $user->id,$otp, now()->addMinutes(5));

        // Send OTP via SMS
        $this->sendOtp($user->phone_number, $otp);

        return [
            'success' => true,
            'phone' => $user->phone_number,
        ];
    } catch (\Exception $e) {
        return [
            'success' => false,
            'message' => 'Failed to send OTP. Please try again later.',
        ];
    }
}

}
