<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Crime;

class CrimeController extends Controller
{
    public function show($id = null)
    {
        if (isset($id))
            return response()->json(['Crime' => Crime::findOrFail($id)]);
        else
            return response()->json(['Crimes' =>Crime::paginate(25)]);
    }

    public function delete($id)
    {
        Crime::findOrFail($id)->delete();
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'compnos'                   => 'required|integer',
            'REPORTINGAREA'             => 'sometimes|string|max:20',
            'INCIDENT_TYPE_DESCRIPTION' => 'sometimes|string|max:200',
            'REPTDISTRICT'              => 'sometimes|string|max:100',
            'FROMDATE'                  => 'sometimes|date',
            'TODATE'                    => 'sometimes|date',
            'STREETNAME'                => 'sometimes|string|max:100',
            'XSTREETNAME'               => 'sometimes|string|max:100',
            'WEAPONTYPE'                => 'sometimes|string|max:100',
            'BUILDINGTYPE'              => 'sometimes|string|max:100',
            'PLACEOFENTRY'              => 'sometimes|string|max:100',
            'PERPETRATORSNOS'           => 'sometimes|integer|between:-32768,32767',
            'SUSPECTTRANSPORTATION'     => 'sometimes|string|max:100',
            'VICTIMACTIVITY'            => 'sometimes|string|max:300',
            'UNUSUALACTIONS'            => 'sometimes|string|max:300',
            'WEATHER'                   => 'sometimes|string|max:100',
            'NEIGHBORHOOD'              => 'sometimes|string|max:100',
            'LIGHTING'                  => 'sometimes|string|max:100',
            'CLEARANCESTATUSDESC'       => 'sometimes|string|max:100',
            'MAIN_CRIMECODE'            => 'sometimes|string|max:15',
            'ROBBERY_TYPE'              => 'sometimes|string|max:25',
            'ROBBERY_ATTEMP'            => 'sometimes|string|max:10',
            'BURGLARY_TIME'             => 'sometimes|string|max:10',
            'DOMESTIC'                  => 'sometimes|string|max:10',
            'WEAPON_TYPE'               => 'sometimes|string|max:100',
            'SHIFT'                     => 'sometimes|string|max:50',
            'DAY_WEEK'                  => 'sometimes|string|max:50',
            'UCRPART'                   => 'sometimes|string|max:20',
            'X'                         => 'sometimes|numeric',
            'Y'                         => 'sometimes|numeric',
            'GREPORTING'                => 'sometimes|string|max:50',
            'GSECTOR'                   => 'sometimes|string|max:50',
            'GBEAT'                     => 'sometimes|string|max:40',
            'GDISTRICT'                 => 'sometimes|string|max:10',
            'GDISTRICT_PRE2009'         => 'sometimes|string|max:10',
            'COMPUTEDCRIMECODE'         => 'sometimes|string|max:20',
            'COMPUTEDCRIMECODEDESC'     => 'sometimes|string|max:255'
        ]);

        return response(User::create([
            $request->only([
                'compnos', 'REPORTINGAREA', 'INCIDENT_TYPE_DESCRIPTION', 'REPTDISTRICT', 'FROMDATE',
                'TODATE', 'STREETNAME', 'XSTREETNAME', 'WEAPONTYPE', 'BUILDINGTYPE', 'PLACEOFENTRY',
                'PERPETRATORSNOS', 'SUSPECTTRANSPORTATION', 'VICTIMACTIVITY', 'UNUSUALACTIONS',
                'WEATHER', 'NEIGHBORHOOD', 'LIGHTING', 'CLEARANCESTATUSDESC', 'MAIN_CRIMECODE',
                'ROBBERY_TYPE', 'ROBBERY_ATTEMP', 'BURGLARY_TIME', 'DOMESTIC','WEAPON_TYPE',
                'SHIFT', 'DAY_WEEK', 'UCRPART', 'X', 'Y', 'GREPORTING', 'GSECTOR', 'GBEAT',
                'GDISTRICT', 'GDISTRICT_PRE2009', 'COMPUTEDCRIMECODE', 'COMPUTEDCRIMECODEDESC'
            ])
        ]), 201);
    }
}
