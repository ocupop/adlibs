<?php

// App URLs on the server and on Facebook.
$APP_URL = 'https://www.pbs.org/newshour/adlibs/';
$FB_APP_URL = 'http://apps.facebook.com/admaker/';

// Set Facebook app ID depending on server.
if ($_SERVER["SERVER_NAME"] == 'localhost')                                  { $APP_ENVIRONMENT = 'dev';        $FB_APP_ID = '461888813829980'; }
if ($_SERVER["SERVER_NAME"] == 'secure1354.hostgator.com')                   { $APP_ENVIRONMENT = 'staging';    $FB_APP_ID = '158858627586241'; }
if ($_SERVER["SERVER_NAME"] == 'ec2-107-22-167-218.compute-1.amazonaws.com') { $APP_ENVIRONMENT = 'production'; $FB_APP_ID = '331797950244138'; }

?>