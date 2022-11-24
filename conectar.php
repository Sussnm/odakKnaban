<?php


header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Methods: OPTIONS,GET,PUT,POST,DELETE");
header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Headers: X-API-KEY,Origin, X-Requested-With, Content-Type, Accept, Access-Control-Requested-Method');
// header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Allow: GET, POST, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Max-Age: 1728000');
header('Content-length: 0');
header('Content-Type: application/json');

// $method = $_SERVER['REQUEST_METHOD'];


// if($method = "OPTIONS"){
//    die();

// }

$conexion = mysqli_connect("localhost", "root", "", "odak") or die ("could not connect to DB" )
?>