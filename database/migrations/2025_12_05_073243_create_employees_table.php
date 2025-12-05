<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('EmployeeID')->unique();
            $table->string('Place_Work')->nullable();
            $table->string('Rotation')->nullable();
            $table->string('FirstName');
            $table->string('SecondName')->nullable();
            $table->string('LastName');
            $table->string('Gender')->nullable();
            $table->date('DateNaissance')->nullable();
            $table->string('JobTitle')->nullable();
            $table->string('JobGrade')->nullable();
            $table->string('Category')->nullable();
            $table->string('Department')->nullable();
            $table->string('WorkLocation')->nullable();
            $table->string('Nationality')->nullable();
            $table->string('LineManager')->nullable();
            $table->string('SiteID')->nullable();
            $table->string('Team')->nullable();
            $table->string('GANG')->nullable();
            $table->string('CC_NAME')->nullable();
            $table->string('Telephone')->nullable();
            $table->boolean('Actif')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
