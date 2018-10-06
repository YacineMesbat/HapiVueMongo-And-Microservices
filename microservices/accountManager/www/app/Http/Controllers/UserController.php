<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
    
    public function create(Request $request)
    {
        $this->validate($request, [
            'first_name'    => 'required|string|min:2',
            'last_name'     => 'required|string|min:2',
            'password'      => 'required|string|min:6',
            'role'          => 'required|string|in:agent,detective,chef',
            'email'         => 'required|email|unique:users'
        ]);

        return response(User::create([
            'first_name'    => $request->first_name,
            'last_name'     => $request->last_name,
            'password'      => app('hash')->make($request->password),
            'role'          => $request->role,
            'email'         => $request->email
        ]), 201);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'first_name'    => 'sometimes|string|min:2',
            'last_name'     => 'sometimes|string|min:2',
            'password'      => 'sometimes|string|min:6',
            'role'          => 'sometimes|string|in:agent,detective,chef',
            'email'         => 'sometimes|email|unique:users',
            'confirmed'     => 'sometimes|boolean'
        ]);

        $request->password = app('hash')->make($request->password);

        $user =  User::findOrFail($id);
        $user->update($request->only([
            'first_name',
            'last_name',
            'password',
            'role',
            'email',
            'confirmed'
        ]));

        return ($user);
    }
}