<?php

namespace Database\Factories;

use App\Models\Country;
use App\Models\Dentist;
use Illuminate\Database\Eloquent\Factories\Factory;

class DentistFactory extends Factory
{

    protected $model = Dentist::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'gender' => $this->faker->randomElement(['male', 'female']),
            'surname' => $this->faker->lastName(),
            'email' => $this->faker->unique()->safeEmail(),
            'country_id' => Country::inRandomOrder()->value('id') ?: factory(Country::class),
        ];
    }
}
