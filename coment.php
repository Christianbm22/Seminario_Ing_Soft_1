<?php
	include('conection.php');

	//Validar recepcion de datos
	if (!empty($_POST['name'])){											
		
		//Recibir datos											//Recibo formulario
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];

		//Validar datos


		//Guardar a la BD
		$sql = "INSERT INTO coments (name, email, message) VALUES ('$name', '$email', '$message')"; //Creo sentencia sql

		//use exec() because no results are returned
		$conn->exec($sql);														//Inserto secuencia sql a la base de datos

		//Redireccionar
		header('Location: index.php');											//Redirecciono (No se puede redireccionar si antes hacemos un echo o si hay algo de html)
	}
	else{
		echo "No hay datos enviados";
	}
?>