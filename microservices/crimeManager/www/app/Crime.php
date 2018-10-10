<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;

class Crime extends Eloquent
{

    /**
     * Collection
     *
     * @var string
     */
    protected $collection = 'crimes';

    /**
     * Model primary Key
     *
     * @var string
     */
    protected $primaryKey = '_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        "compnos", "naturecode", "incident_type_description", "main_crimecode", "reptdistrict",
        "reportingarea", "fromdate", "weapontype", "shooting", "domestic", "shift", "year", 
        "month", "day_week", "ucrpart", "x", "y", "streetname", "xstreetname", "location"
    ];

    /**
     * Prevent Eloquent from adding fields created_at & updated_at
     *
     * @var string
     */
    public $timestamps = false;   
}
