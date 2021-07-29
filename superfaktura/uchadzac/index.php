<?php

/**
 * Tato cast sluzi iba na testovacie ucely.
 * Nie je potrebne ju posielat upravenu.
 */

require __DIR__ . '/models/db.php';
require __DIR__ . '/controllers/controller.php';
require __DIR__ . '/controllers/employees_controller.php';


$_SERVER = [
    'REQUEST_METHOD' => 'POST',
];
$_POST = [
    'employees' => [
        [
            'gender' => 'female',
            'name' => 'Alice',
            'birthday' => '1970-01-01',
        ],
        [
            'gender' => 'male',
            'name' => 'Bob',
            'birthday' => '1980-01-01',
        ],
    ],
];
(new EmployeesController())->addEmployees();

