<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employee>
 */
class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'EmployeeID' => $this->faker->unique()->numerify('1013-00####'),
            'Place_Work' => $this->faker->city(),
            'Rotation' => $this->faker->randomElement(['Day', 'Night', 'Off']),
            'FirstName' => $this->faker->firstName(),
            'SecondName' => $this->faker->optional()->firstName(),
            'LastName' => $this->faker->lastName(),
            'Gender' => $this->faker->randomElement(['Male', 'Female']),
            'DateNaissance' => $this->faker->optional()->date(),
            'JobTitle' => $this->faker->jobTitle(),
            'JobGrade' => $this->faker->randomElement(['A', 'B', 'C', 'D']),
            'Category' => $this->faker->randomElement(['Full-time', 'Part-time', 'Contractor']),
            'Department' => $this->faker->word(),
            'WorkLocation' => $this->faker->city(),
            'Nationality' => $this->faker->country(),
            'LineManager' => $this->faker->name(),
            'SiteID' => $this->faker->randomElement(['Kakula', 'Kansoko', 'smelter']),
            'Team' => $this->faker->word(),
            'GANG' => $this->faker->word(),
            'CC_NAME' => $this->faker->word(),
            'Telephone' => $this->faker->phoneNumber(),
            'Actif' => $this->faker->randomElement(['Active', 'Inactive']),
        ];
    }
}
