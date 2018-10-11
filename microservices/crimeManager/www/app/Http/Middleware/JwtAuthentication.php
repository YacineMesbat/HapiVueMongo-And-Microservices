<?php

namespace App\Http\Middleware;

use Closure;

class JwtAuthentication
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($jwt = $request->bearerToken()) {
            list($header, $claims, $signature) = explode('.', $jwt);

            $valid_signature = hash_hmac('sha256', "{$header}.{$claims}", env('JWT_SECRET_KEY'), true);
            $valid_signature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($valid_signature));
            
            if ($signature == $valid_signature) {
                $header     = json_decode(str_replace(['-', '_', ''], ['+', '/', '='], base64_decode($header)));
                $claims     = json_decode(str_replace(['-', '_', ''], ['+', '/', '='], base64_decode($claims)));

                if ($claims->exp + 1800 > time())
                    return $next($request);
                else
                    return response()->json(['error' => "Expired Token", 'code' => 401], 401);
            } else
                return response()->json(['error' => "Invalid Token", 'code' => 401], 401);
        } else
            return response()->json(['error' => "Unhautorized", 'code' => 401], 401);
    }
}
