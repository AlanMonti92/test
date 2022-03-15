<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Dentist;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ControllerDentist extends Controller
{
    public function index()
    {
        $dentistas = Dentist::get();
        return Inertia::render('Index', ['dentistas' => $dentistas]);
    }
}
