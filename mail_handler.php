<?php
  if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject']; 
	  $message = $_POST['message'];
    
    $body_msg = 'From: '.$name."\r\n";
    $body_msg .= 'Email: '.$email."\r\n";
    $body_msg .= 'Message: '.$message."\r\n";

    $email_server = "dantfnhdfy@s135.cyber-folks.pl";
	  $title_name = "Form data from www.danny-webdeveloper.pl";
	
    $to = 'danielguzdek@vp.pl';
	
    $headers = 'From: ' .$title_name. ' <' .$email_server. '>';
    $headers .= 'Content-Type: text/plain; charset=utf-8' . "\r\n";
  }

  if (mail($to, $subject, $body_msg, $headers)) { 
    echo "<script>alert('Thank you for the message. I will contact you shortly.');</script>";
    echo "<script type='text/javascript'>window.location.href='http://www.danny-webdeveloper.pl/'</script>"; } 
  else { 
    echo "<script>alert('The data entered into the form is incorrect. Please try again.');</script>";
    echo "<script type='text/javascript'>window.location.href='https://www.danny-webdeveloper.pl/pages/contact.html</script>"; }
?> 