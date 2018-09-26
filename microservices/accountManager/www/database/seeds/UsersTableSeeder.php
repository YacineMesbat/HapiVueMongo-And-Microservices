<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'first_name'    => 'John',
            'last_name'     => 'Doe',
            'email'         => 'john.doe@tweb.com',
            'confirmed'     => true,
            'role'          => 'chef',
            'password'      => app('hash')->make('hash'),
            'created_at'    => date('Y-m-d H:i:s'),
            'updated_at'    => date('Y-m-d H:i:s')
        ]);
    }
}
