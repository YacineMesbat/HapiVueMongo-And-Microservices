<?php

namespace App\Http\Controllers;
use App\User;

class UserController extends Controller
{
    public function show($id = null)
    {
        if (isset($id))
            return response()->json(['User' => User::findOrFail($id)]);
        else
            return response()->json(['Users' => User::all()]);
    }

    public function delete($id)
    {
        User::findOrFail($id)->delete();
    }
}