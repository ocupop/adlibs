<?php

require_once('settings.php');

$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$name  = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$url   = filter_var($_POST['url'], FILTER_SANITIZE_STRING);

$to      = $email;
$headers = 'From: PBS NewsHour <donotreply@pbsnewshour.com>';
$subject = 'Your PBS NewsHour Ad Lib';
$message = 'Hello ' . $name . ',

Thank you for creating an Ad Lib! Here\'s a link to your Ad so you don\'t lose track:

' . $FB_APP_URL . '?adlib_data=' . $url . '

Whenever you\'re ready, go ahead and make another Ad Lib!

' . $FB_APP_URL . '

Thanks,
PBS NewsHour';

// Mail it
mail($to, $subject, $message, $headers);

?>