<?php
  if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = 'daniel.guzdek.86@gmail.com';
    $headers = 'From: ' .$name. ' <' .$email. '>';
    $headers .= 'Content-Type: text/plain; charset=utf-8' . "\r\n";
  }
  
  if(mail($to, $subject, $message, $headers)) {
    echo "<h1>Sent Successfully. Thank you!</h1>";
  } else {
    echo "<h1>Something went wrong..</h1>";
  }
?> 