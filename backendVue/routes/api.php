<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::controller(UserController::class)->group(function () {
    Route::get('/users', 'index');
    Route::get('/users/{id}', 'getUser');
    Route::post('/users', 'createUser');
    Route::put('/users/{id}', 'updateUser');
});
