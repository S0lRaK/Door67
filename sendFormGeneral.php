<?php 
	$name = $_GET['name'];
	$email = $_GET['email'];
	$subject = $_GET['subject'];
	$mesaje = $_GET['mesaje'];
	mail("jordisanchez00@gmail.com", $subject, $mesaje, $email);
?>