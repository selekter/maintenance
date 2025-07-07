<?php

namespace App\Http\Controllers;

use App\Models\LicensePlate;
use App\Models\ReportRepair;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $licensePlate = LicensePlate::whereHas('report', function ($query) {
            $query->where('status', 0);
        })->with(['report' => function ($query) {
            return $query->where('status', 0);
        }, 'driver'])->get();
        return Inertia::render('Reports/Show', ['licensePlate' => $licensePlate]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $licensePlate = LicensePlate::with('driver')->get();
        return Inertia::render('Reports/Create', ['license_plates' => $licensePlate]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'plate' => 'nullable|string',
            'report' => 'nullable|string',
            'service' => 'array',
            'service.*' => 'string',
        ]);

        $servicesToInsert = [];
        foreach ($data['service'] as $service) {
            $servicesToInsert[] = [
                'license_plate_id' => $data['plate'],
                'repair' => $service,
                'created_at' => now(),
                'updated_at' => now()
            ];
        };
        if ($request['other'] !== null) {
            array_push(
                $servicesToInsert,
                [
                    'license_plate_id' => $request->plate,
                    'repair' => $request->other,
                    'created_at' => now(),
                    'updated_at' => now()
                ]
            );
        }

        // dd($servicesToInsert);
        ReportRepair::insert($servicesToInsert);

        return redirect()->route('report.index');
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
    public function edit(int $id)
    {
        $licensePlate = LicensePlate::with(['report' => function ($query) {
            $query->where('status', 0);
        }])->find($id);
        return Inertia::render('Reports/Update', ['licensePlate' => $licensePlate]);
    }

    public function updateStat(int $id)
    {
        try {
            $report = ReportRepair::where('id', $id)->first();
            if (!$report) {
                dd('Error');
            }
            $report->status = 1;
            $report->save();
        } catch (\Exception $e) {
            dd($e);
        }
    }

    public function editDestroy(int $id)
    {
        try {
            $report = ReportRepair::where('id', $id);
            if (!$report) {
                dd('Error');
            }

            $report->delete();
        } catch (\Exception $e) {
            dd($e);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id) {}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $report = ReportRepair::where('license_plate_id', $id);
            if (!$report) {
                dd('Error');
            }

            $report->delete();
        } catch (\Exception $e) {
            dd($e);
        }
    }
}
