<?php

use App\Http\Controllers\NoteController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::controller(UserController::class)->group(function () {
    Route::get('/users', 'index');
    Route::get('/users/{id}', 'getUser');
    Route::post('/users', 'createUser');
    Route::put('/users/{id}', 'updateUser');
    Route::post('/users/login', 'loginUser');

});



Route::middleware('auth:sanctum')->group(function () {
    Route::controller(NoteController::class)->group(function () {
        Route::get('/notes', 'index');
        Route::post('/notes', 'userCreateNote');
        Route::get('/notes/user', 'getUserNote');
    });
});

