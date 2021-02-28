<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

//User Routes
Route::get('/', [HomeController::class, 'index'])->name('home');

//Admin routes
Route::get("/dashboard", [AdminController::class, 'dashboard'])->name('dashboard');

Route::get("/dashboard/new-post", [AdminController::class, 'createNewPost'])->name('new-post');
Route::post("/dashboard/new-post", [AdminController::class, 'saveNewPost']);

Route::get("/dashboard/post/{post}", [AdminController::class, 'editPost'])->name('edit-post');
Route::patch("/dashboard/post/{post}", [AdminController::class, 'updatePost']);

Route::delete("/dashboard/delete/{post}", [AdminController::class, 'destroyPost'])->name('destroy-post');

Route::get("dashboard/profile/{user}", [AdminController::class, 'showUser'])->name('view-profile');
Route::patch("dashboard/profile/{user}", [AdminController::class, 'updateUser'])->name('update-profile');