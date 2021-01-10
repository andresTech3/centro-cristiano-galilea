<?php
    $email = $_POST['correo'];

    if($email === ' ' || $email === '$'|| $email === '%'|| $email === '/'|| $email === '!'){
        echo json_encode('Error');
    }
    else{
        echo json_encode('EMAIL EXITOSAMENTE');
    }
?>