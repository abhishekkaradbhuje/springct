<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;
use Illuminate\Support\Facades\DB;

class CompanyController extends Controller
{
    /**
     * This function will return all available users in the system.
     */
    public function getCompanies(Request $request) {
        $companies = Company::all()->toArray();

        return response()->json(array(
            'code' => 200,
            'message' => 'All company list',
            'data' => $companies
        ));
    }

    /**
     * This function will return a users information.
     */
    public function getCompany(Request $request, $id) {
        $company = Company::find($id);

        if($company) {
            return response()->json(array(
                'code' => 200,
                'message' => 'Company information',
                'data' => $company
            ));
        }

        return response()->json(array(
            'code' => 404,
            'message' => 'Company not found'
        ), 404);
    }

    public function deleteCompany(Request $request, $id) {
        $company = Company::find($id);

        if($company) {
            try {
                $company->delete();
                return response()->json(array(
                    'code' => 200,
                    'message' => 'Company is deleted'
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

    public function addCompany(Request $request) {
        $company = new Company();
        $company->name = $request->post('name');
        $company->city = $request->post('city');

        try {
            $company->save();

            return response()->json(array(
                'code' => 200,
                'message' => 'Company Created',
                'data' => $company
            ));
        } catch (Exception $e) {
            return response()->json(array(
                'code' => 500,
                'message' => 'Something went wrong'
            ), 500);
        }
    }

    public function getUsersCompanies(Request $request, $userid) {
        $companies = DB::table('users_company')
                    ->where('userid', $userid)
                    ->get()->toArray();

        return response()->json(array(
            'code' => 200,
            'message' => 'All company list',
            'data' => $companies
        ));
    }

    public function addUserInCompany(Request $request, $userid, $compid) {
        $companies = DB::table('users_company')
                    ->where('userid', $userid)
                    ->where('compid', $compid)
                    ->get()->toArray();
        
        if(empty($companies)) {
            DB::table('users_company')
                ->insert([
                    'userid' => $userid,
                    'compid' => $compid
                ]);
            return response()->json(array(
                'code' => 200,
                'message' => 'Compnay is added in the users'
            ));
        }

        return response()->json(array(
            'code' => 200,
            'message' => 'User is already assigned to this company.'
        ));
    }

    public function removeUserFromCompany(Request $request, $userid, $compid) {
        $companies = DB::table('users_company')
                    ->where('userid', $userid)
                    ->where('compid', $compid)
                    ->get()->toArray();
        
        if(!empty($companies)) {
            DB::table('users_company')
                ->where('userid', $userid)
                ->where('compid', $compid)
                ->delete();
            return response()->json(array(
                'code' => 200,
                'message' => 'Compnay removed from users account'
            ));
        }

        return response()->json(array(
            'code' => 200,
            'message' => 'User is already assigned to this company.'
        ));
    }
}
