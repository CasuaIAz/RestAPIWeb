<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdvertisementController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();});
Route::post('/advertisements', 'App\Http\Controllers\AdvertisementController@create');
Route::get('/advertisements', 'App\Http\Controllers\AdvertisementController@showAll');
Route::get('/advertisements/{id}', 'App\Http\Controllers\AdvertisementController@showOne');
Route::delete('/advertisements/{id}', 'App\Http\Controllers\AdvertisementController@deleteOne');
