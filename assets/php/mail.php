<?php
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$notabot = false;
$yoursecret = "6LegT1kpAAAAALc1Pzq2vMqgUvqE1FqfpcDRbzwU";

$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=" . $yoursecret . "&response=" . $_POST['g-recaptcha-response'] . "&remoteip=" . $_SERVER['REMOTE_ADDR']);
$googleobj = json_decode($response);
$verified = $googleobj->success;
if ($verified) {
    $notabot = true;
}



$name = $_POST['name'];
$mail = $_POST['email'];
$phone = $_POST['phone'];
$company = $_POST['company'];
$location = $_POST['location'];
$time = $_POST['time'];
$language = $_POST['language'];
$details = $_POST['details'];
$random = rand();
$subject = "Ticket #: " . $random . "; " . $company . " (" . $name . ") " . $language;
$message = "Location :" . $location . "\nTime :" . $time . "\nContact :" . $phone . " or " . $mail . "\nDetails :" . $details;




$email = new PHPMailer();
$email->SetFrom($mail, $name, 0); //Name is optional
$email->Subject   = $subject;
$email->Body      = $message;
$email->AddAddress( 'austaciouscoder@gmail.com' );
$num_files = count($_FILES['file']['tmp_name']);
$filesize = 0;
for($i=0; $i < $num_files; $i++) { // This loop will upload all the files you have attached to your email.
    if(!is_uploaded_file($_FILES['file']['tmp_name'][$i]))
    {
        header("Location: contact.php?error=nofiles");
    }
    else {
        $filesize += $_FILES['file']['size'][$i];
        $file_name = $_FILES['file']['name'][$i];
        $file_tmp = $_FILES['file']['tmp_name'][$i];
//And attach it using attachment method of PHPmailer.

        $email->AddAttachment($file_tmp, $file_name);
    }



}


if ($filesize < 20*1024*1024) {
    if ($notabot) {
        if ($email->Send()) {

            header("Location: contact.php?error=none&ticket=" . $random);


        } else {
        header("Location: contact.php?error=failed");
        }
    } else {
            $error =  $googleobj->{'error-codes'};

               header("Location: contact.php?error=bot&errorcode=".$error);

    }
} else {
    header("Location: contact.php?error=size&size=" . $filesize);

}
