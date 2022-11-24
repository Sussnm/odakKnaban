<?php
include "conectar.php";

$post = $_POST;



$nombreTarea = $post['nombreTarea'];
$prioridad = $post['prioridadTarea'];
$inicioTarea = $post['inicioTarea'];
$fechaTermino = $post['fechaTermino'];
$categoria = $post['categoriaTarea'];
$contenedor_id = $post['contenedor_id'];

// echo "INSERT INTO tareas (nombreTarea,fk_prioridad, inicioTarea,fechaTermino,fk_categoria, contenedor_id)
// VALUES ('".$nombreTarea."','".$prioridad."', '".$inicioTarea."','".$fechaTermino."','".$categoria."','".$contenedor_id."' )  ";

 $respuesta = mysqli_query($conexion, "INSERT INTO tareas (nombreTarea,fk_prioridad, inicioTarea,fechaTermino,fk_categoria, contenedor_id)
                                         VALUES ('".$nombreTarea."','".$prioridad."', '".$inicioTarea."','".$fechaTermino."','".$categoria."','".$contenedor_id."' )  ");

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
