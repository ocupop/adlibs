<?php

// $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
// $name  = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
// $url   = filter_var($_POST['url'], FILTER_SANITIZE_STRING);

$email = 'matthew@matthewmcvickar.com';
$name  = 'Matthew McVickar';
$url   = 'http://ocupopdev.com/adlibs';

$to      = $email;
$headers = 'From: PBS NewsHour <donotreply@pbsnewshour.com>'
$subject = 'Your PBS NewsHour Ad Lib';
$message = 'Hello ' . $name . ',\n\n

Thank you for creating an Ad Lib! Here&rsquo;s a link to your Ad so you don&rsquo;t lose track:\n\n' .

'https://secure1354.hostgator.com/~ocupoppy/pbsadlibs/?adlib_data=' . $url . '\n\n

Thanks,
PBS NewsHour';

// Mail it
mail($to, $subject, $message, $headers);

?>