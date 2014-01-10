<?php

// Facebook App URL.
$FB_APP_URL = 'http://apps.facebook.com/admaker/';

// Set app URL and Facebook app ID depending on server.
if ($_SERVER["SERVER_NAME"] == 'localhost') {
  $APP_URL = 'http://localhost/adlibs';
  $APP_ENVIRONMENT = 'dev';
  $FB_APP_ID = '461888813829980';
} else if ($_SERVER["SERVER_NAME"] == 'secure1354.hostgator.com') {
  $APP_URL = 'https://secure1354.hostgator.com/~ocupoppy/pbsadlibs';
  $APP_ENVIRONMENT = 'staging';
  $FB_APP_ID = '158858627586241';
} else {
  $APP_URL = 'https://www.pbs.org/newshour/adlibs';
  $APP_ENVIRONMENT = 'production';
  $FB_APP_ID = '331797950244138';
}

?>