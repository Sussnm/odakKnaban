<?php
include "conectar.php";

$post = $_POST;



$titulo = $post['titulo'];


 $respuesta = mysqli_query($conexion, "INSERT INTO contenedores (titulo) VALUES ('".$titulo."')  ");

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
