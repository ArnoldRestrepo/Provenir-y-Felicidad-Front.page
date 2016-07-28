<?php  

    $destino = $_POST['direcciongeneral@porveniryfelicidad.org'];
    // $destino = $_POST['restrepo_arnold@outlook.com'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $comentario = $_POST['com'];

    $contenido = "Nombre: " . $nombre . "\nApellido: " .$apellido . "\ntelefono: " . $telefono . "\nCorreo: " . $email . "\nComentarios: " . $com;

    mail($destino, "Contacto", $contenido);
    header("Location:gracias.html");


?>