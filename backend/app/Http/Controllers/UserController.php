<?php

namespace App\Http\Controllers;

use App\Services\UserServices;
use Illuminate\Http\Request;

class UserController
{
    protected $userServices;

    public function __construct(UserServices $userServices)
    {
        $this->userServices = $userServices;
    }

    public function index()
    {
        return $this->userServices->getUsers();
    }

    public function getUser($id)
    {
        return $this->userServices->getUser($id);
    }

    public function createUser(Request $request)
    {
        return $this->userServices->createUserService($request);
    }

    public function updateUser(Request $request, $id)
    {
        return $this->userServices->updateUserService($id, $request);
    }

    public function loginUser(Request $request)
    {
        return $this->userServices->loginUserService($request);
    }
}
