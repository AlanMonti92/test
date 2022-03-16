<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Dentist;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ControllerDentist extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Dentistas/Index', [
            'filters' => $request->search,
            'dentistas' => Dentist::with('country')->filter($request->search)->paginate(5)
        ]);
    }
}
