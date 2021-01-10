<?php

    $email = $_POST['correo'];

    if($email === '' ){
        echo json_encode('Error');
    }
    else{
        echo json_encode('EMAIL EXITOSAMENTE');
    }
?>