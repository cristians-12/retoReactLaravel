<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
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

    public function createUserService($request)
    {
        $data = $request->all();
        // return response()->json(['data' => $data]);
        // return $request->input('name');
        // dd($data['email']);
        $user = new User();
        $user->name = ucfirst(strtolower($data['name']));
        $user->email = $data['email'];
        $user->password = bcrypt($data['password']);
        $user->save();

        $token = JWTAuth::fromUser($user);
        return response()->json(['message' => 'User saved', 'success' => true])->cookie('token', $token, 60);
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

    public function loginUserService($data)
    {
        if (empty($data['email']) || empty($data['password'])) {
            return response()->json(['message' => 'Email and password are required'], 400);
        }

        // Intentar autenticar al usuario con las credenciales
        if (Auth::attempt(['email' => $data['email'], 'password' => $data['password']])) {
            // Si la autenticación es exitosa, crear y devolver el token
            $user = Auth::user();  // Obtener el usuario autenticado
            $token = JWTAuth::fromUser($user);  // Crear un token JWT

            return response()->json(['token' => $token, 'user' => $user, 'success' => true, 'message' => 'Sucessful login!'])->cookie(
                'token',
                $token,
                60,
                '/',
                null,
                false,
                false,
                false,
                'none'
            );
        }

        // Si las credenciales no coinciden, devolver un error
        return response()->json(['message' => 'Invalid credentials, make sure your credentials match', 'success' => false], 401);
    }

}
