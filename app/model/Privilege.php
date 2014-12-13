<?php
/**
 * Created by PhpStorm.
 * User: Thomas
 * Date: 11/12/2014
 * Time: 5:26 PM
 */

namespace app\model;

use vhs\domain\Domain;
use vhs\domain\validations\ValidationResults;

class Privilege extends Domain {
    public static function getTable() { return 'privileges'; }
    public static function getPrimaryKeyColumn() { return 'id'; }
    public static function getColumns()
    {
        return array(
            'name',
            'code',
            'description',
            'icon',
            'enabled'
        );
    }

    public $name;
    public $code;
    public $description;
    public $icon;
    public $enabled;

    public function validate(ValidationResults &$results) {

    }



} 