<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    //
    use HasFactory;
    protected $fillable = [
        'EmployeeID', 'Place_Work',
        'Rotation', 'FirstName',
        'SecondName', 'LastName', 'Gender',
        'DateNaissance', 'JobTitle',
        'JobGrade', 'Category',
        'Department', 'WorkLocation',
        'Nationality', 'LineManager',
        'SiteID', 'Team',
        'GANG', 'CC_NAME', 'Telephone', 'Actif',
    ];
}
