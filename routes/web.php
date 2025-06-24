<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('login');
})->name("login");

Route::get('/dashboard', function () {
    return Inertia::render('dashboard');
})->name("dashboard");


Route::get('/courses', function () {
    return Inertia::render('courses');
})->name("courses");


// require __DIR__.'/settings.php';
// require __DIR__.'/auth.php';
