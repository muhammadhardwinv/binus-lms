<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/login', function () {
    return Inertia::render('login');
})->name("login");

Route::get('/dashboard', function () {
    return Inertia::render('dashboard');
})->name("page");



Route::get('/', function () {
    return Inertia::render('dashboard');
})->name("page");
// require __DIR__.'/settings.php';
// require __DIR__.'/auth.php';
