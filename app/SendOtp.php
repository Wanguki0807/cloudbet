<?php

namespace App;

use Illuminate\Support\Facades\Log;
use Twilio\Rest\Client;

trait SendOtp
{
    public function sendOtp($phoneNumber,$otp)
    {

        try {
            // Log OTP generation attempt
            Log::info("Generated OTP for {$phoneNumber}: {$otp}");

            // Fetch Twilio credentials from environment variables
            $twilioSid = env('TWILIO_SID');
            $twilioAuthToken = env('TWILIO_AUTH_TOKEN');
            $twilioPhone = env('TWILIO_PHONE_NUMBER');

            // Create a Twilio client instance
            $client = new Client($twilioSid, $twilioAuthToken);

            // Craft the OTP message
            $message = "Your OTP is $otp. It is valid for 5 minutes.";

            // Send the OTP via Twilio
            $client->messages->create($phoneNumber, [
                'from' => $twilioPhone,
                'body' => $message,
            ]);

            Log::info("OTP sent successfully to {$phoneNumber}");

        } catch (\Exception $e) {
            Log::error("Error sending OTP to {$phoneNumber}: " . $e->getMessage());
            throw new \Exception("Failed to send OTP. Please try again later.");
        }
    }

}
