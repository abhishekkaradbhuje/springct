<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * This function will return all available users in the system.
     */
    public function getUsers(Request $request) {
        $users = User::all()->toArray();

        foreach ($users as $key => $user) {
            $companies = DB::table('users_company')
                ->join('companies', 'users_company.compid', '=', 'companies.id')
                ->where('users_company.userid', '=', $user['id'])
                ->get()->toArray();
            $users[$key]['companies'] = $companies;
        }

        return response()->json(array(
            'code' => 200,
            'message' => 'Users list',
            'data' => $users
        ));
    }

    /**
     * This function will return a users information.
     */
    public function getUser(Request $request, $id) {
        $user = User::find($id);

        if($user) {
            return response()->json(array(
                'code' => 200,
                'message' => 'User information',
                'data' => $user
            ));
        }

        return response()->json(array(
            'code' => 404,
            'message' => 'User not found'
        ), 404);
    }

    public function deleteUser(Request $request, $id) {
        $user = User::find($id);

        if($user) {
            try {
                $user->delete();
                return response()->json(array(
                    'code' => 200,
                    'message' => 'User information',
                    'data' => $user
                ));
            } catch (Exception $e) {
                // Do nothing
            }
        }

        return response()->json(array(
            'code' => 404,
            'message' => 'Something went wrong.'
        ), 404);
    }

    public function addUser(Request $request) {
        $user = new User();
        $user->name = $request->get('name');
        $user->email = $request->get('email');
        $user->phone = $request->get('phone');
        $user->password = '1234';

        try {
            $user->save();

            return response()->json(array(
                'code' => 200,
                'message' => 'User Created',
                'data' => $user
            ));
        } catch (Exception $e) {
            return response()->json(array(
                'code' => 500,
                'message' => 'Something went wrong'
            ), 500);
        }
    }
}
