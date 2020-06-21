<?php

namespace App\Http\Controllers;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

use Illuminate\Http\Response;
use App\Item;

class InsatagramController extends Controller
{
    /**
     * Create a new controller for User.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function getAll()
    {
        $data = Item::all();
        return $this->responseSuccess($data);
        return $this->responseSuccess('Get All Data');
    }

    public function getID($id)
    {
        $data = Item::where('id', $id)->first();
        return $this->responseSuccess($data);
    }

    public function addData(Request $request)
    {
        $data = new Item();
        $data->title = $request->title;
        $data->description = $request->description;
        $data->image = $request->image;

        if ($data->save()) {
            return $this->responseSuccess($data);
        }
    }

    public function updateData(Request $request,$id)
    {
       
        $data = Item::where('id', $id)->first();
        $data->title = $request->title;
        $data->description = $request->description;
        $data->image = $request->image;

        if ($data->save()) {
        return $this->responseSuccess($data);
       }
    }

    public function deleteData($id)
    {
        $data = Item::where('id', $id)->delete();
        return $this->responseSuccess($data);
    }
    protected function responseSuccess($res)
    {
        return response()->json(["status" => "success", "data" => $res], 200)
            ->header("Access-Control-Allow-Origin", "*")
            ->header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    }
}