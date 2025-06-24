<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('login');
})->name("login");

Route::get('/dashboard', function () {
    return Inertia::render('dashboard');
})->name("dashboard");


Route::get('/course', function () {
    return Inertia::render('course');
})->name("course");


// require __DIR__.'/settings.php';
// require __DIR__.'/auth.php';
