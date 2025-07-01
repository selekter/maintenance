<?php

namespace App\Http\Controllers;

use App\Models\LicensePlate;
use App\Models\ReportRepair;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MaintenanceHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $historyReport = ReportRepair::with('licensePlate')->where('status', 1)->orderBy('updated_at', 'DESC')->paginate();
        return Inertia::render('MaintenanceHistory/show', ['historyReport' => $historyReport]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    public function search(string $name)
    {
        return Inertia::render('MaintenanceHistory/Search', ['search'=>$name]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
