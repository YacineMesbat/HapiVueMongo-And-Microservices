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

use App\Crime;

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/crimes[/{id}]', 'CrimeController@show');
$router->post('/crimes', 'CrimeController@create');
$router->patch('/crimes/{id}', 'CrimeController@update');
$router->delete('/crimes/{id}', 'CrimeController@delete');