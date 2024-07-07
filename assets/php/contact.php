<?php
$email= $_POST['email'];
$message= $_POST['message'];

$to = "abacustranslation@gmail.com";
$subject = $_POST['subject'];

// The following text will be sent
// Name = user entered name
// Email = user entered email
// Message = user entered message
$txt ="Email = "
    . $email . "\r\n Message =" . $message;

$headers = "From: noreply@xyz.com";
if($email != NULL) {
    mail($to, $subject, $txt, $headers);
}

// Redirect to
header("Location:/index.html");
