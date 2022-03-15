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
        $data = Dentist::all();
        return Inertia::render('Index', ['data' => $data]);
    }
}
