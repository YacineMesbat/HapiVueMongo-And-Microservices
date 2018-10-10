<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Crime;

class CrimeController extends Controller
{
    public function show(Request $request, $id = null)
    {
        if (isset($id))
            return response()->json(['Crime' => Crime::findOrFail($id)]);
        else if (isset($request->$query)) {
            
        } else
            return response()->json(['Crimes' => Crime::paginate(25)]);
    }

    public function delete($id)
    {
        Crime::findOrFail($id)->delete();
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'compnos'                   => 'required|integer|unique',
            'naturecode'                => 'sometimes|string|max:100',
            'shooting'                  => 'sometimes|string|max:100',
            'reportingarea'             => 'sometimes|numeric',
            'incident_type_description' => 'sometimes|string|max:200',
            'reptdistrict'              => 'sometimes|string|max:100',
            'fromdate'                  => 'sometimes|date',
            'streetname'                => 'sometimes|string|max:100',
            'xstreetname'               => 'sometimes|string|max:100',
            'main_crimecode'            => 'sometimes|string|max:15',
            'domestic'                  => 'sometimes|string|max:10',
            'weapontype'                => 'sometimes|string|max:100',
            'shift'                     => 'sometimes|string|max:50',
            'day_week'                  => 'sometimes|string|max:50',
            'month'                     => 'sometimes|integer|max:12',
            'year'                      => 'sometimes|integer',
            'ucrpart'                   => 'sometimes|string|max:20',
            'x'                         => 'sometimes|numeric',
            'y'                         => 'sometimes|numeric',
            'location'                  => 'sometimes|string|max:100'
        ]);

        return response()->json(['Crime' => Crime::create($request->only([
            "compnos", "naturecode", "incident_type_description", "main_crimecode", "reptdistrict",
            "reportingarea", "fromdate", "weapontype", "shooting", "domestic", "shift", "year", 
            "month", "day_week", "ucrpart", "x", "y", "streetname", "xstreetname", "location"
        ]))], 201);
    }

    public function update(Request $request, $id)
    {   
        $this->validate($request, [
            'naturecode'                => 'sometimes|string|max:100',
            'shooting'                  => 'sometimes|string|max:100',
            'reportingarea'             => 'sometimes|numeric',
            'incident_type_description' => 'sometimes|string|max:200',
            'reptdistrict'              => 'sometimes|string|max:100',
            'fromdate'                  => 'sometimes|date',
            'streetname'                => 'sometimes|string|max:100',
            'xstreetname'               => 'sometimes|string|max:100',
            'main_crimecode'            => 'sometimes|string|max:15',
            'domestic'                  => 'sometimes|string|max:10',
            'weapontype'                => 'sometimes|string|max:100',
            'shift'                     => 'sometimes|string|max:50',
            'day_week'                  => 'sometimes|string|max:50',
            'month'                     => 'sometimes|integer|max:12',
            'year'                      => 'sometimes|integer',
            'ucrpart'                   => 'sometimes|string|max:20',
            'x'                         => 'sometimes|numeric',
            'y'                         => 'sometimes|numeric',
            'location'                  => 'sometimes|string|max:100'
        ]);

        $crime = Crime::findOrFail($id);

        $crime->update($request->only([
            "naturecode", "incident_type_description", "main_crimecode", "reptdistrict",
            "reportingarea", "fromdate", "weapontype", "shooting", "domestic", "shift", "year", 
            "month", "day_week", "ucrpart", "x", "y", "streetname", "xstreetname", "location"
        ]));

        return response()->json(['Crime' => $crime], 201);
    }
}
