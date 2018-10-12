<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Crime;

class CrimeController extends Controller
{
    private function get_filtered_crimes($filters)
    {
        $fields = [
            "compnos", "naturecode", "incident_type_description", "main_crimecode", "reptdistrict",
            "reportingarea", "fromdate", "weapontype", "shooting", "domestic", "shift", "year", 
            "month", "day_week", "ucrpart", "x", "y", "streetname", "xstreetname", "location"
        ];

        $numeric_fields = ["compnos", "reportingarea", "year", "month"];

        foreach ($filters as $key => $value) {
            if (!in_array($key, $fields) && $key != 'contain')
                abort(400, "Unauthorized filter " . $key);
            else if (in_array($key, $numeric_fields))
                $filters[$key] = $value == 'None' ? $value : floatval($value);
        }

        if (isset($filters['contain'])) {
            $contain = array();
            $contained_data = $filters['contain'];
            unset($filters['contain']);

            $query = Crime::where($filters)->where(function ($query) use ($contained_data, $fields) {
                $query->where('compnos', 'LIKE', "%". $contained_data ."%");

                foreach($fields as $key)
                    if ($key != 'contain' && $key != 'compnos')
                        $query->orWhere($key, 'LIKE', "%". $contained_data ."%");
            });

            return $query->paginate(25);
        }

        return Crime::where($filters)->paginate(25);
    }

    public function show(Request $request, $id = null)
    {
        if (isset($id))
            return response()->json(['Crime' => Crime::findOrFail($id)]);
        else if (isset($request->filters))
            return response()->json(['Crimes' => $this->get_filtered_crimes($request->filters)]);
        else
            return response()->json(['Crimes' => Crime::paginate(25)]);
    }

    public function delete(Request $request, $id)
    {
        if ($request->claims->role === 'chef')
            Crime::findOrFail($id)->delete();
        else
            return response()->json(['error' => "Access Forbidden", 'code' => 403], 403);
    }

    public function create(Request $request)
    {
        if (!in_array($request->claims->role, ['chef', 'detective']))
            return response()->json(['error' => "Access Forbidden", 'code' => 403], 403);

        $this->validate($request, [
            'compnos'                   => 'required|integer|unique:crimes,compnos',
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
        if (!in_array($request->claims->role, ['chef', 'detective']))
            return response()->json(['error' => "Access Forbidden", 'code' => 403], 403);

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

        return response()->json(['Crime' => $crime], 200);
    }
}
