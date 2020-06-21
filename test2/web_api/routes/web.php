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

$router->get('/', function () use ($router) {
    return $router->app->version();
});
$router->group(['prefix' => 'api/v1'], function () use ($router) {
    $router->get('getAll', 'InsatagramController@getAll');
    $router->get('getID/{id}', 'InsatagramController@getID');
    $router->post('insertData', 'InsatagramController@addData');
    $router->put('updateData/{id}', 'InsatagramController@updateData');
    $router->delete('deleteData/{id}', 'InsatagramController@deleteData');
});