<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Laravel\Socialite\Facades\Socialite;

class SocialAuthController extends Controller
{
    protected $providers = ['google', 'facebook', 'github']; // Add supported providers

    public function redirect($provider)
    {
        if (!in_array($provider, $this->providers)) {
            return redirect()->route('login')->with('error', 'Invalid provider');
        }
        Log::info('in the redirect method');
        return Socialite::driver($provider)->redirect();
    }

    public function callback($provider)
    {
        try {
            if (!in_array($provider, $this->providers)) {
                return redirect()->route('login')->with('error', 'Invalid provider');
            }
            $socialUser = Socialite::driver($provider)->user();
            $dbUser= User::where('email',$socialUser->email)->first();
            if($dbUser){
                Auth::login($dbUser);
                return redirect()->route('dashboard');
            }else{
                if ($provider === 'google') {
                    $name = $socialUser->name;
                } else {
                    $name = $socialUser->name;
                }
                Log::info('we in here nigga');
                $user = User::create(
                    [
                        'name' => $name,
                        'email' =>  $socialUser->email,
                        'avatar' => $socialUser->avatar,
                        'phone_number' => '+2348137742342',
                        'provider' => $provider,
                        'provider_id' => $socialUser->id,
                        "provider_token" => $socialUser->token,
                        'email_verified_at' => now(),
                    ]
                );
                Auth::login($user);
                return redirect()->route('dashboard');
            }
        } catch (\Exception $e) {
            return redirect()->route('login')->with('error', 'Authentication failed. Please try again.');
        }


    }
}
