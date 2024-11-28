<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DriverController extends Controller
{
    public function index()
    {
        $drivers = Driver::with('licensePlate')->get();
        return Inertia::render('Drivers/Show', ['drivers' => $drivers]);
    }
}
