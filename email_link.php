<?php

// $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
// $name  = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
// $url   = filter_var($_POST['url'], FILTER_SANITIZE_STRING);

$email = 'matthew@matthewmcvickar.com';
$name  = 'Matthew McVickar';
$url   = 'asdfghjklqwertyuiop';

$to      = $email;
$headers = 'From: PBS NewsHour <donotreply@pbsnewshour.com>';
$subject = 'Your PBS NewsHour Ad Lib';
$message = 'Hello ' . $name . ',

Thank you for creating an Ad Lib! Here\'s a link to your Ad so you don\'t lose track:

https://secure1354.hostgator.com/~ocupoppy/pbsadlibs/?adlib_data=' . $url . '

Whenever you\'re ready, go ahead and make another Ad Lib!

http://pbsnewshour.com/adlibs

Thanks,
PBS NewsHour';

// Mail it
mail($to, $subject, $message, $headers);

?>