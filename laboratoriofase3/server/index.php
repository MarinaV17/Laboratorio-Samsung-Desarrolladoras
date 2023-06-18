<?php
// Obtener datos del formulario
if ($_POST) {
    $nombre = $_POST['name'];
    $apellido_1 = $_POST['surname'];
    $apellido_2 = $_POST['secondSurname'];
    $login = $_POST['accountName'];
    $email = $_POST['email'];
    $contrasena = $_POST['password'];
}


// Validación de longitud de password
if (strlen($contrasena) < 4 || strlen($contrasena) > 8) {
    alert('La longitud de la contraseña debe ser entre 4 y 8 caracteres');
} else {
    $connection = crearConexionDB();

    $tableName = 'usuarios';

    if ($connection->connect_error) {
        die("Connection failed:" . $connection->connect_error);
    }

    // Check if user already exists
    $selectWithSameEmailQuery = "SELECT * FROM $tableName WHERE email='$email'";
    $result = mysqli_query($connection, $selectWithSameEmailQuery);
    if (mysqli_num_rows($result) > 0) {
        alert('El email ya está registrado');
    } else {
        //Insertar usuario
        $insertQuery = "INSERT INTO $tableName (nombre, apellido_1, apellido_2, email, login, contrasena) VALUES ('$nombre','$apellido_1','$apellido_2','$email', '$login', '$contrasena')";

        mysqli_query($connection, $insertQuery);

        // // Redirect to success.html 
        echo "<script type='text/javascript'>
        window.location.replace('http://localhost/laboratoriofase3/consulta.html');
        </script>";;
    }
    mysqli_close($connection);
}


function crearConexionDB(){
        //DDBB connection
        $config = parse_ini_file('.env');
        $servername = $config['DB_HOST'];
        $username = $config['DB_USER'];
        $contrasena = $config['DB_PASSWORD'];
        $dbname = $config['DB_NAME'];
        return new mysqli($servername, $username, $contrasena, $dbname);
}

function alert($msg) {
    echo "<script type='text/javascript'>alert('$msg');
    window.location.replace('http://localhost/laboratoriofase3/index.html');
    </script>";
  }

?>