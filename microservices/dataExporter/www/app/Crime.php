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
        'compnos', 'REPORTINGAREA', 'INCIDENT_TYPE_DESCRIPTION', 'REPTDISTRICT', 'FROMDATE',
        'TODATE', 'STREETNAME', 'XSTREETNAME', 'WEAPONTYPE', 'BUILDINGTYPE', 'PLACEOFENTRY',
        'PERPETRATORSNOS', 'SUSPECTTRANSPORTATION', 'VICTIMACTIVITY', 'UNUSUALACTIONS',
        'WEATHER', 'NEIGHBORHOOD', 'LIGHTING', 'CLEARANCESTATUSDESC', 'MAIN_CRIMECODE',
        'ROBBERY_TYPE', 'ROBBERY_ATTEMP', 'BURGLARY_TIME', 'DOMESTIC','WEAPON_TYPE',
        'SHIFT', 'DAY_WEEK', 'UCRPART', 'X', 'Y', 'GREPORTING', 'GSECTOR', 'GBEAT',
        'GDISTRICT', 'GDISTRICT_PRE2009', 'COMPUTEDCRIMECODE', 'COMPUTEDCRIMECODEDESC'
    ];

    /**
     * Prevent Eloquent from adding fields created_at & updated_at
     *
     * @var string
     */
    public $timestamps = false;   
}
