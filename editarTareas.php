<?php
include "conectar.php";

$json = file_get_contents ('php//input');
$params = json_decode($json);


$nombre = $params-> nombre;
$fecha = $params-> fecha;
$prioridad = $params-> prioridad;
$categoria = $params-> categoria;


$respuesta = mysqli_query($conexion, "UPDATE  tareas SET nombre= '$nombre ',fecha= '$fecha' ,prioridad= '$prioridad' , categoria= '$categoria') VALUES (`$nombre`,`$fecha` ,`$prioridad` , `$categoria`)  ");

if ($respuesta){
    http_response_code(201);
    $mensaje ['status'] = "Creado Ok";


}else {
    http_response_code(422);
    $mensaje ['status'] = "ERROR";

}

echo json_encode($mensaje);
echo mysqli_error($conexion);

?>