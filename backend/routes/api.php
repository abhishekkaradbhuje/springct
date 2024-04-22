<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\CompanyController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users', [UserController::class, 'getUsers']);
Route::get('/user/{id}', [UserController::class, 'getUser']);
Route::post('/user', [UserController::class, 'addUser']);
Route::delete('/user/{id}', [UserController::class, 'removeUser']);
Route::put('/user/{id}', [UserController::class, 'updateUser']);

Route::get('/companies', [CompanyController::class, 'getCompanies']);
Route::get('/company/{id}', [CompanyController::class, 'getCompany']);
Route::post('/company', [CompanyController::class, 'addCompany']);
Route::delete('/company/{id}', [CompanyController::class, 'removeCompany']);
Route::put('/company/{id}', [CompanyController::class, 'updateCompany']);

Route::get('/user/{userid}/companies', [CompanyController::class, 'getUsersCompanies']);
Route::put('/user/{userid}/company/{compid}', [CompanyController::class, 'addUserInCompany']);
Route::delete('user/{userid}/company/{compid}', [CompanyController::class, 'removeUserFromCompany']);