<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserServices
{
    public function getUsers()
    {
        return User::all();
    }

    public function getUser($id)
    {
        $user = User::find($id);
        if ($user)
            return response()->json(['success' => true, 'data' => $user], 202);
        return response()->json(['message' => 'No users found', 'success' => false], 404);
    }

    public function createUserService(Request $request)
    {
        $user = new User();
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = bcrypt($request->input('password'));
        $user->save();
        $token = JWTAuth::fromUser($user);
        return response()->json(['message' => 'User saved'])->cookie('token', $token, 60);
    }

    public function updateUserService($id, $request)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found', 'success' => false], 404);
        }
        if ($request->has('name')) {
            $user->name = $request->name;
        }
        if ($request->has('email')) {
            $user->email = $request->email;
        }
        if ($request->has('password')) {
            $user->password = bcrypt($request->password);
        }
        $user->save();

        return response()->json(['message' => 'User updated successfully', 'success' => true], 202);
    }

}
