<?php
    include('config.php');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token'); 
    header('Content-Type: application/json; charset=utf-8');

    $respuesta = "";
    $post = json_decode(file_get_contents("php://input"), true);

    if($post['accion'] == 'Ingresar') {
        $sentencia = sprintf("INSERT INTO vehiculos_estacionados( placa, modelo, color, hora_ingreso) 
        values ('%s', '%s', '%s', '%s')", $post['placa'], $post['modelo'], $post['color'], $post['entrada']);
        $rs = mysqli_query($mysqli, $sentencia);
    
        if ($rs) {
            $respuesta = json_encode(array('estado' => true, 'mensaje' => 'Contacto Guardado'));
        } else {
            $respuesta = json_encode(array('estado' => false, 'mensaje' => 'Error al guardar contacto'));
        }
        echo $respuesta;
    }

    if($post['accion'] == 'consultar'){
        $sentencia = sprintf('select * from vehiculos_estacionados');
        $result = mysqli_query($mysqli, $sentencia);

        if(mysqli_num_rows($result) > 0){
            while($row = mysqli_fetch_array($result)){
                $datos[] = array(
                    'id_vehiculo' => $row['id_vehiculo'],
                    'modelo' => $row['modelo'],
                    'placa' => $row['placa'],
                    'horanentrada' => $row['hora_ingreso'],
                );
            }
            $respuesta = json_encode(array('estado' => true, 'datos' => $datos));
        }else{
            $respuesta = json_encode(array('estado' => false, 'mensaje' => 'No existen registros'));
        }
        echo $respuesta;
    }

    if($post['accion'] == 'dato_vehiculo') {
        $sentencia = sprintf("SELECT * FROM vehiculos_estacionados WHERE id_vehiculo = '%s'", $post['id_vehiculo']);
        $rs = mysqli_query($mysqli, $sentencia);  

        if (mysqli_num_rows($rs) > 0) {
            $row = mysqli_fetch_array($rs);
            $datos[0] = array(
                'placa' => $row['placa'], 
                'modelo' => $row['modelo'],
                'color' => $row['color'],
                'entrada' => $row['hora_ingreso'],
                'salida' => $row['hora_salida'],
            );
            $respuesta = json_encode(array('estado' => true, 'dato' => $datos));
        } else {
            $respuesta = json_encode(array('estado' => false, 'mensaje' => "No se pudo actualizar"));
        }
        echo $respuesta;
    }

    if($post['accion'] == 'a_vehiculo') {
        $sentencia = sprintf("UPDATE vehiculos_estacionados SET placa ='%s', modelo ='%s', color ='%s', hora_ingreso ='%s', hora_salida ='%s' WHERE id_vehiculo = '%s'",$post['placa'], $post['modelo'], $post['color'], $post['entrada'], $post['salida'], $post['id_vehiculo']);
        $rs = mysqli_query($mysqli, $sentencia);  

        if($rs) {
            $respuesta = json_encode(array('estado' => true, 'mensaje' => 'Actualizado'));
        } else {
            $respuesta = json_encode(array('estado' => false, 'mensaje' => 'Error al actualizar'));
        }
        echo $respuesta;
    }

?>