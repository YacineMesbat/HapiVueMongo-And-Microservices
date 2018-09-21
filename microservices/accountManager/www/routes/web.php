<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;


$router->get('/infos', function () use ($router) {
    return response()->json(['env' => app()->environment(), 'version' => env('APP_VERSION'), 'framework' => $router->app->version()]);
});

$router->get('/', function () use ($router) {
    throw new UnauthorizedHttpException("");
});