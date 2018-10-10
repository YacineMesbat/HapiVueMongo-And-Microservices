<?php
    return [
        'default' => 'mongodb',
        'connections' => [
            'mongodb' => [ 
                'driver' => 'mongodb',
                'host' => env('DB_HOST', 'mongo'),
                'port' => env('DB_PORT', 27017),
                'database' => env('DB_DATABASE'),
                'username' => env('DB_USERNAME'),
                'password' => env('DB_PASSWORD'),
                'options' => [
                    'database' => 'admin'
                ]
            ],
        ],
        'migrations' => 'migrations',
    ];