<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Advertisement;
use App\Http\Resources\Advertisement as AdvertisementResource;
use App\Http\Resources\AdvertisementCollection;

class AdvertisementController extends Controller
{
    public function create(Request $request)
    {
    	$request->validate([
    		'adName' => 'required|max:60',
    		'description' => 'required|max:10000',
    		'price' => 'required|max:15',
    	]);

    	$advertisement = Advertisement::create($request->all());

    	return (new AdvertisementResource($advertisement))
    		->response()
    		->setStatusCode(201);
    }

    public function showOne($id)
    {
    	return new AdvertisementResource(Advertisement::findOrFail($id));
    }

    public function showAll()
    {
    	return new AdvertisementCollection(Advertisement::all());
    }

    public function deleteOne($id)
    {
    	$advertisement = Advertisement::findOrFail($id);
    	$advertisement->delete();

    	return response()->json(null, 204);
    }
}
