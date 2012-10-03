<?php

$APP_URL = 'https://www.pbs.org/newshour/adlibs/';

$FB_APP_URL = 'http://apps.facebook.com/admaker';

// Set Facebook app ID depending on server.
if ($_SERVER["SERVER_NAME"] == 'localhost')
  $FB_APP_ID = '461888813829980';

if ($_SERVER["SERVER_NAME"] == 'secure1354.hostgator.com')
  $FB_APP_ID = '331797950244138';

?>