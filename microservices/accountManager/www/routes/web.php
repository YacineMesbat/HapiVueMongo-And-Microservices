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

$router->get('/infos', function () use ($router) {
    return response()->json(['environment' => app()->environment(), 'current_version' => env('APP_VERSION'), 'framework' => $router->app->version()]);
});

$router->get('/users[/{id}]', 'UserController@show');
$router->post('/users', 'UserController@create');
$router->patch('/users/{id}', 'UserController@update');
$router->delete('/users/{id}', 'UserController@delete');

$router->post('/login', 'LoginController@login');