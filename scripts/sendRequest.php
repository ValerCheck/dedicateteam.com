<?php	
	$name = $_POST['name'];
	$comp = $_POST['comp'];
	$spec = $_POST['spec'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	
	$to = 'klevalera@gmail.com';
	$subject = "Test";
	$message = 'FROM: ' . $name . ' Email: ' . $email;
	$headers = 'From: ' . $email . "\r\n";
	$headers .= "Content-type: text/plain; charset=utf-8\r\n";

	if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
		mail($to,$subject,$message,$headers);
		echo "Request was sent!";
	} else {
		echo "Invalid email. Please provide an correct an email.";
	}
?>