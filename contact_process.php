<?php
	include('conection.php');

	//Validar recepcion de datos
	if (!empty($_POST['description'])){											
		
		//Recibir datos
		$description = $_POST['description'];												//Recibo formulario
		$name = $_POST['name'];
		$email = $_POST['email'];
		$price = $_POST['price'];

		//Validar datos


		//Guardar a la BD
		$sql = "INSERT INTO contact (description, name, email, price) VALUES ('$description', '$name', '$email', '$price')"; //Creo sentencia sql

		//use exec() because no results are returned
		$conn->exec($sql);														//Inserto secuencia sql a la base de datos

		//Redireccionar
		header('Location: contact.php');											//Redirecciono (No se puede redireccionar si antes hacemos un echo o si hay algo de html)
	}
	else{
		echo "No hay datos enviados";
	}
?>