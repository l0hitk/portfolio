<?php
$name=$_POST['name'];
$mail=$_POST['email'];
$sub=$_POST['subject'];
$mess=$_POST['message'];

$email_from='update@github.io'
$email_subject='New Form Request'
$email_body="User Name: $name.\n".
            "User Email: $mail.\n".
            "User Subject: $sub.\n".
            "User Message: $mess.\n"; 

$to ='lohit.k2307@gmail.com';

$headers="From: $email_from \r\n";

$headers .="Reply-To: $mail \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: contact.html");

?>