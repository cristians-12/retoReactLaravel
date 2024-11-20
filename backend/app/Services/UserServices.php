<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
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
        $validator = Validator::make(
            $data,
            [
                'name' => 'required|string|max:100',
                'email' => 'unique:users|string|email|required|max:100',
                'password' => 'string|required|min:8'
            ]
        );

        if ($validator->fails()) {
            $errors = $validator->errors()->all();

            ;
            return response()->json(
                [
                    'success' => false,
                    'message' => implode(' ', $errors)
                ]
            );
        }

        $user = User::create([
            'name' => ucfirst(strtolower($data['name'])),
            'email' => $data['email'],
            'password' => Hash::make($data['password'])
        ]);

        // $token = JWTAuth::fromUser($user);
        $token = $user->createToken('auth_token')->plainTextToken;


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
        if (Auth::attempt(['email' => $data['email'], 'password' => $data['password']])) {
            $user = Auth::user();  // Obtener el usuario autenticado
            // $token = JWTAuth::fromUser($user);  // Crear un token JWT

            $token = $data->user()->createToken('auth_token')->plainTextToken;

            return response()->json(['auth_token' => $token, 'user' => $user, 'success' => true, 'message' => 'Successful login!'])->cookie(
                'auth_token',
                $token,
                60,        // Tiempo de expiración en minutos
                '/',       // Ruta de la cookie
                null,      // Dominio
                false,      // `secure`
                false,      // `httpOnly`
                false,     // Sin cifrado directo
                'Lax'     // Política SameSite
            );
        }
        return response()->json(['message' => 'Invalid credentials, make sure your credentials match', 'success' => false], 401);
    }

}
