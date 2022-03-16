<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dentist extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'surname','gender','email','country_id'
    ];

    public function scopeFilter($query, $filter)
    {
        $query->when($filter ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->orWhere('name', 'like', '%'.$search.'%')
                    ->orWhere('surname', 'like', '%'.$search.'%')
                    ->orWhere('gender', 'like', '%'.$search.'%')
                    ->orWhere('email', 'like', '%'.$search.'%');
            });
        });
    }

    public function country(){
        return $this->belongsTo('App\Models\Country');
    }
}
