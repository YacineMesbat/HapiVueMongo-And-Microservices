<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;


class LoginController extends Controller
{
    public function login(Request $request)
    {
        $this->validate($request, [
            'password'      => 'required|string|min:6',
            'email'         => 'required|email'
        ]);

        $password = hash('sha512', $request->password . '4956b4af9f6dcaef1eb4b1fcb8fba69e7a7acdc491ea5b1f2864e');
        $user = User::where('email', $request->email)->where('password', $password)->first();

        if (!$user)
            return response()->json(['error' => "Invalid Credentials"], 401);
        else
            $user->makeVisible('confirmed');

        if (!$user->confirmed)
            return response()->json(['error' => "User must be confirmed"], 401);
        else
            $user->makeHidden('confirmed');

        $secret = env('JWT_SECRET_KEY');
        $header = json_encode(['alg' => 'HS256', 'typ' => 'JWT']);
        $payload = json_encode(['sub' => $user->email, 'role' => $user->role, 'exp' => time()]);

        $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
        $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));

        $signature = hash_hmac('sha256', "{$base64UrlHeader}.{$base64UrlPayload}", $secret, true);
        $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));

        return response()->json([
            'token' => "{$base64UrlHeader}.{$base64UrlPayload}.{$base64UrlSignature}",
            'user' => $user->only(["role", 'first_name', 'last_name'])
        ], 200);
    }
}
