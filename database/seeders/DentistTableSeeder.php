<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Dentist;

class DentistTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Dentist::factory()->count(25)->create();
    }
}
