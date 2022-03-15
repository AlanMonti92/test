<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Factory;
use App\Models\Pais;
use App\Models\Dentista;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            Pais::class,
            Dentista::class,
        ]); 
        
        Dentista::factory()->count(25)->create();
        Pais::factory()->count(25)->create(); 
        
    }
}
