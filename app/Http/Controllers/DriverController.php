<?php

namespace App\Http\Controllers;

use App\Models\LicensePlate;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DriverController extends Controller
{
    public function index()
    {
        $licensePlates = LicensePlate::with('driver')->get();
        return Inertia::render('Drivers/Show', ['licensePlates' => $licensePlates]);
    }
}
