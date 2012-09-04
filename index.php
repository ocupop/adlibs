<!DOCTYPE HTML><?php if ($_SERVER["SERVER_NAME"] == 'localhost') { $FB_APP_ID = '461888813829980'; } if ($_SERVER["SERVER_NAME"] == 'ocupopdev.com') { $FB_APP_ID = '331797950244138'; } ?>
<html lang="en-US">

	<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
	<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
	<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
	<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->

	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width">

		<title>PBS NewsHour AdMaker 2012</title>

		<link rel="stylesheet" type="text/css" href="style.css">
		<link rel="stylesheet" type="text/css" href="ads.css">

		<script type="text/javascript" src="http://use.typekit.com/dcg5pic.js"></script>
    <script type="text/javascript">try{Typekit.load();}catch(e){}</script>

		<script src="js/lib/modernizr.custom.33487.js"></script>
	</head>
	<body class="<?php if ($_SERVER["SERVER_NAME"] == 'localhost') { echo 'dev'; } ?> ">
    <div id="fb-root"></div>

		<div class="container">

		  <header>
		    <h1 class="ir">PBS NewsHour AdMaker 2012</h1>
		  </header>

  		<p class="tagline">
		    <strong class="pbs"><img src="img/pbs.png" alt="PBS face logo" title="PBS"> PBS NewsHour</strong>
	      Presents
		    <span id="ad_type_cycle">
  	      <em class="biographical">Biographical</em>
		      <em class="smalltown">Small-town</em>
		      <em class="metro">Metro America</em>
		      <em class="attack">Attack</em>
		      <em class="backfire">Backfire</em>
		      <em class="unfitforoffice">Unfit for Office</em>
		    </span>
  		  <strong>Ad Libs</strong> for <strong>2012</strong>.
  		  <br>
  		  Finally, a chance for <strong>YOU</strong> to <strong>&lsquo;approve this message.&rsquo;</strong>
  		</p>

		  <div class="video_frame">
        <img src="img/pin.png" class="pin">
        <img src="img/crest.png" class="crest">

        <div class="video_mask">
   		    <div class="slide" id="title_card">
            <h2>Make Your Own<strong>Campaign Ads</strong></h2>
            <h3 id="login_loading" class="current"></h3>
            <h3 id="logged_out">
              <div class="instructions">
                <div class="fb-login-button" data-size="xlarge" scope="user_about_me,user_checkins,user_education_history,user_hometown,user_location,user_photos,user_likes,user_relationships,user_status,user_work_history"></div>
                to get started!
              </div>
              <div id="disclaimer">
                <p>Login with Facebook to create an ad using your personal information. Nothing will be shared on your timeline until you choose a sharing option at the end of the creation process.</p>
              </div>
            </h3>
            <h3 id="logged_in">
              <div class="instructions">
                Start campaigning, <strong></strong>! <img src="img/button-play.png">
              </div>
            </h3>
            <p>Do you know how political campaign ads work? How they&rsquo;re built? What they&rsquo;re meant to tell you? Most political ads follow a rigid set of guidelines and fall into one of a few categories. We&rsquo;ve put together a few samples for you to customize with your information and imagination. It&rsquo;s fun, it&rsquo;s fast, and you&rsquo;ll never watch campaign ads the same again!</p>
  		    </div>

  		    <div class="slide" id="ad_chooser">
  		      <h2>Choose an Ad!</h2>
            <ul>
              <li class="ad_choice_category left clickable" id="ad_choice-bio">
                <h3>Biographical</h3>
                <div>
                  <h4>Where do you hail from?</h4>
                  <p>A biographical ad captures a candidate&rsquo;s life story. But depending on a candidate&rsquo;s origins, the ad could be a tale of small-town values or a record of experience.</p>
                  <ul>
                    <li class="ad_choice clickable" id="ad_choice-smalltown">Small-town America</li>
                    <li class="ad_choice clickable" id="ad_choice-metro">Metro America</li>
                  </ul>
                </div>
              </li>
              <li class="ad_choice_category right clickable" id="ad_choice-attack">
                <h3>Attack</h3>
                <div>
                  <h4>Do you want to attack your character or credentials?</h4>
                  <p>Attacks ads instill doubt about a political opponent. How will you show that this candidate is unfit for office, or even dangerous?</p>
                  <ul>
                    <li class="ad_choice clickable" id="ad_choice-unfitforoffice">Fit for Office?</li>
                    <li class="ad_choice clickable" id="ad_choice-backfire">Backfire</li>
                  </ul>
                </div>
              </li>
            </ul>
  		    </div>

          <div id="video_loading" class="inactive">Starting the campaign machine&hellip;</div>

          <div id="video_contents">
            <div id="ad-smalltown" class="video_content" style="display: none;">
              <div id="ad-smalltown-photo1-choice" class="choice">
                <h2 class="question"><span>Choose a photo of your past self, preferably with family.</span></h2>
                <div class="education">
                  <p>Sepia-toned or black-and-white photos from the past can humanize a candidate&rsquo;s appeal.</p>
                  <p><strong>Watch Gerald Ford&rsquo;s 1976 montage of sepia-toned photos:</strong></p>
                  <!-- <iframe width="278" height="209" src="http://www.youtube.com/embed/rPSJJwZUmik?rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe> -->
                </div>
                <div class="choices photos">
                  <ul>
                  </ul>
                </div>
                <div class="actions">
                  <span class="continue"><img src="img/button-okay.png"> Continue</span>
                </div>
              </div>

              <div id="ad-smalltown-photo1" class="photo bottomright"></div>

              <div id="ad-smalltown-hometown-choice" class="choice no_education">
                <h2 class="question"><span>Where did you grow up?</span></h2>
                <div class="choices text large">
                  <ul>
                  </ul>
                </div>
                <div class="actions">
                  <span class="continue"><img src="img/button-okay.png"> Continue</span>
                </div>
              </div>

        			<div id="ad-smalltown-hometown"><div id="ad-smalltown-hometown-name"><span></span></div></div>

              <div id="ad-smalltown-diploma-choice" class="choice">
                <h2 class="question"><span>What is your proudest achievement?</span></h2>
                <div class="education">
                  <p>Biographical spots highlight a candidate&rsquo;s positive career milestones. Presumably, candidates applied the small-town values they learned to reach their achievements.</p>
                  <p><strong>Watch Bill Clinton shake hands with President John Kennedy:</strong></p>
                  <!-- <iframe width="279" height="209" src="http://www.youtube.com/embed/WiqWpTuse18?rel=0" frameborder="0" allowfullscreen></iframe> -->
                </div>
                <div class="choices text">
                  <ul>
                  </ul>
                </div>
                <div class="actions">
                  <span class="continue"><img src="img/button-okay.png"> Continue</span>
                </div>
              </div>

        			<div id="ad-smalltown-diploma">
        			  <div id="ad-smalltown-diploma-school"></div>
        			  <div class="user-name"></div>
        			  <div id="ad-smalltown-diploma-year"></div>
        			</div>

              <div id="ad-smalltown-wrapup-choice" class="choice">
                <h2 class="question small">What is your vision for America? Make a slogan.</h2>
                <div class="education">
                  <p>Brevity thrives in advertising. Make your slogan punchy and positive!</p>
                  <p><strong>Watch the catchy &lsquo;I Like Ike&rsquo; ad for Dwight Eisenhower:</strong></p>
                  <!-- <iframe width="278" height="209" src="http://www.youtube.com/embed/va5Btg4kkUE?rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe> -->
                </div>
                <div class="choices text">
                  <ul>
                  </ul>
                </div>
                <div class="actions">
                  <span class="continue"><img src="img/button-okay.png"> Continue</span>
                </div>
              </div>

        			<div id="ad-smalltown-wrapup" class="video_content">
        			  <div id="ad-smalltown-wrapup-name"><span class="user-name"></span></div>
        			  <div id="ad-smalltown-wrapup-slogan"></div>
        			  <div id="ad-smalltown-wrapup-mug"></div>
        			  <div id="ad-smalltown-wrapup-legal">Paid for by the Campaign to Elect <span class="user-name"></span></div>
        			</div>
        		</div>

            <div id="ad-metro" class="video_content" style="display: none;">
              <div id="ad-metro-photo1-choice" class="choice">
                <h2 class="question"><span>Choose a photo of your past self, preferably with family.</span></h2>
                <div class="education">
                  <p>Sepia-toned or black-and-white photos from the past can humanize a candidate&rsquo;s appeal.</p>
                  <p><strong>Watch Mitt Romney&rsquo;s 2012 Father&rsquo;s Day web spot:</strong></p>
                  <!-- <iframe width="278" height="156" src="http://www.youtube.com/embed/L1N1fYDq26k?rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe> -->
                </div>
                <div class="choices photos">
                  <ul>
                  </ul>
                </div>
                <div class="actions">
                  <span class="continue"><img src="img/button-okay.png"> Continue</span>
                </div>
              </div>

              <div id="ad-metro-photo1" class="photo bottomright"></div>

              <div id="ad-metro-photo2-choice" class="choice">
                <h2 class="question"><span>What hardship did you overcome?</span></h2>
                <div class="education">
                  <p>Biographical spots highlight a candidate&rsquo;s good qualities that make them fit for the nation&rsquo;s highest office.</p>
                  <p><strong>Watch Bob Dole&rsquo;s 1996 ad on how he overcame his paralysis:</strong></p>
                  <!-- <iframe width="278" height="156" src="http://www.youtube.com/embed/WbCauaAH6AQ?rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe> -->
                </div>
                <div class="choices photos">
                  <ul>
                  </ul>
                </div>
                <div class="actions">
                  <span class="continue"><img src="img/button-okay.png"> Continue</span>
                </div>
              </div>

              <div id="ad-metro-photo2" class="photo bottomright"></div>

              <div id="ad-metro-achievement-choice" class="choice">
                <h2 class="question"><span>What is your proudest achievement?</span></h2>
                <div class="education">
                  <p>Biographical spots highlight a candidate&rsquo;s positive career milestones. Presumably, candidates applied the small-town values they learned to reach their achievements.</p>
                  <p><strong>Watch Bill Clinton shake hands with President John Kennedy:</strong></p>
                  <!-- <iframe width="279" height="209" src="http://www.youtube.com/embed/WiqWpTuse18?rel=0" frameborder="0" allowfullscreen></iframe> -->
                </div>
                <div class="choices text">
                  <ul>
                  </ul>
                </div>
                <div class="actions">
                  <span class="continue"><img src="img/button-okay.png"> Continue</span>
                </div>
              </div>

              <div id="ad-metro-achievement">
                <div id="ad-metro-achievement-school"></div>
                <div class="user-name"></div>
                <div id="ad-metro-achievement-year"></div>
              </div>

              <div id="ad-metro-wrapup-choice" class="choice">
                <h2 class="question small">What is your vision for America? Make a slogan.</h2>
                <div class="education">
                  <p>Brevity thrives in advertising. Make the slogan punchy and positive!</p>
                  <p><strong>Watch Jimmy Carter&rsquo;s vision for America:</strong></p>
                  <iframe width="278" height="209" src="http://www.youtube.com/embed/wNUOhEproKs?rel=0" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="choices text">
                  <ul>
                  </ul>
                </div>
                <div class="actions">
                  <span class="continue"><img src="img/button-okay.png"> Continue</span>
                </div>
              </div>

              <div id="ad-metro-wrapup" class="video_content">
                <div id="ad-metro-wrapup-name"><span class="user-name"></span></div>
                <div id="ad-metro-wrapup-slogan"></div>
                <div id="ad-metro-wrapup-mug"></div>
                <div id="ad-metro-wrapup-legal">Paid for by the Campaign to Elect <span class="user-name"></span></div>
              </div>
        		</div>

        		<div id="ad-unfitforoffice" class="video_content" style="display: none;">
              <div id="ad-unfitforoffice-photo1-choice" class="choice">
                <h2 class="question"><span>Choose a photo of your past self.</span></h2>
                <div class="education">
                  <p>A photo doesn&rsquo;t need to be altered to denote negativity. Sometimes, juxtaposition of two incongruous elements is enough.</p>
                  <p><strong>Watch a Richard Nixon ad mix images of the Vietnam War with Hubert Humphrey at a convention:</strong></p>
                  <!-- <iframe width="279" height="209" src="http://www.youtube.com/embed/I4mXfLSvKGY?rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe> -->
                </div>
                <div class="choices photos">
                  <ul>
                  </ul>
                </div>
                <div class="actions">
                  <span class="continue"><img src="img/button-okay.png"> Continue</span>
                </div>
              </div>

              <div id="ad-unfitforoffice-photo1" class="photo bottomleft"></div>

              <div id="ad-unfitforoffice-likes-choice" class="choice">
                <h2 class="question"><span>What is your proudest achievement?</span></h2>
                <div class="education">
                  <p>A candidate loses credibility when he or she is seen as &lsquo;flip-flopper.&rsquo;</p>
                  <p><strong>Watch a George W. Bush ad use John Kerry&rsquo;s windsurfing as a flip-flop visual:</strong></p>
                  <!-- <iframe width="279" height="209" src="http://www.youtube.com/embed/pbdzMLk9wHQ?rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe> -->
                </div>
                <div class="choices text">
                  <ul>
                  </ul>
                </div>
                <div class="actions">
                  <span class="continue"><img src="img/button-okay.png"> Continue</span>
                </div>
              </div>

              <div id="ad-unfitforoffice-likes" class="likes"></div>

              <div id="ad-unfitforoffice-photo2-choice" class="choice">
                <h2 class="question"><span>Choose a vacation or party photo.</span></h2>
                <div class="education">
                  <p>Candidates also lose credibility if they look unpresidential.</p>
                  <p><strong>Watch a George Bush ad turn Michael Dukakis&rsquo; staged tank ride into a PR nightmare:</strong></p>
                  <!-- <iframe width="278" height="209" src="http://www.youtube.com/embed/9LyYD166ync?rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe> -->
                </div>
                <div class="choices photos">
                  <ul>
                  </ul>
                </div>
                <div class="actions">
                  <span class="continue"><img src="img/button-okay.png"> Continue</span>
                </div>
              </div>

              <div id="ad-unfitforoffice-photo2" class="photo bottomright"></div>

              <div id="ad-unfitforoffice-wrapup-choice" class="choice">
                <h2 class="question"><span>Sling some mud. Make a negative slogan against yourself.</span></h2>
                <div class="education">
                  <p>The catchier, the better.</p>
                </div>
                <div class="choices text">
                  <ul>
                  </ul>
                </div>
                <div class="actions">
                  <span class="continue"><img src="img/button-okay.png"> Continue</span>
                </div>
              </div>

        			<div id="ad-unfitforoffice-wrapup">
                <div id="ad-unfitforoffice-wrapup-name"><span class="user-name"></span></div>
        			  <div id="ad-unfitforoffice-wrapup-slogan"></div>
                <div id="ad-unfitforoffice-wrapup-legal">Paid for by the Campaign to Elect <span class="user-name"></span>.</div>
        			</div>
        		</div>

            <div id="ad-backfire" class="video_content" style="display: none;">
              <div id="ad-backfire-photo1-choice" class="choice">
                <h2 class="question"><span>Choose a profile photo.</span></h2>
                <div class="education">
                  <p>Heavily manipulated, black-and-white images can denote negativity.</p>
                  <p><strong>Watch George Bush use revolving doors as a metaphor in 1988:</strong></p>
                  <!-- <iframe width="278" height="209" src="http://www.youtube.com/embed/PmwhdDv8VrM?rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe> -->
                </div>
                <div class="choices photos">
                  <ul>
                  </ul>
                </div>
                <div class="actions">
                  <span class="continue"><img src="img/button-okay.png"> Continue</span>
                </div>
              </div>

              <div id="ad-backfire-photo1" class="photo bottomleft"></div>

              <div id="ad-backfire-quote1-choice" class="choice">
                <h2 class="question"><span>Choose an out-of-context newspaper quote.</span></h2>
                <div class="education">
                  <p>Journalists are used as third-party sources to lend credibility to an attack ad&rsquo;s message.</p>
                  <p><strong>Only newspapers appear in this George McGovern attack ad:</strong></p>
                  <iframe width="278" height="209" src="http://www.youtube.com/embed/FNE56_GkOOY?rel=0" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="choices text large">
                  <ul>
                  </ul>
                </div>
                <div class="actions">
                  <span class="continue"><img src="img/button-okay.png"> Continue</span>
                </div>
              </div>

              <div id="ad-backfire-quote1"><div id="ad-backfire-quote1-text"></div></div>

              <div id="ad-backfire-quote2-choice" class="choice">
                <h2 class="question"><span>Choose something you said.</span></h2>
                <div class="education">
                  <p>A candidate&rsquo;s own words&mdash;self-incrimination&mdash;is used to attack his or her credibility.</p>
                  <p><strong>Watch Barack Obama use John McCain&rsquo;s words against him, three times:</strong></p>
                  <!-- <iframe width="279" height="209" src="http://www.youtube.com/embed/6reQLzgywzk?rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe> -->
                </div>
                <div class="choices text large">
                  <ul>
                  </ul>
                </div>
                <div class="actions">
                  <span class="continue"><img src="img/button-okay.png"> Continue</span>
                </div>
              </div>

              <div id="ad-backfire-quote2"><div id="ad-backfire-quote2-text"></div></div>

              <div id="ad-backfire-wrapup-choice" class="choice">
                <h2 class="question"><span>Sling some mud. Make a negative slogan against yourself.</span></h2>
                <div class="education">
                  <p>The catchier, the better.</p>
                </div>
                <div class="choices text">
                  <ul>
                  </ul>
                </div>
                <div class="actions">
                  <span class="continue"><img src="img/button-okay.png"> Continue</span>
                </div>
              </div>

              <div id="ad-backfire-wrapup">
                <div id="ad-backfire-wrapup-name"><span class="user-name"></span></div>
                <div id="ad-backfire-wrapup-slogan"></div>
                <div id="ad-backfire-wrapup-legal">Paid for by the Campaign to Elect <span class="user-name"></span>.</div>
              </div>
        		</div>
        	</div>

          <div id="video_overlay"></div>

          <div id="video" style="width: 800px; height: 450px;"></div>
    		</div>

        <div id="controls" style="display: none;">
          <span id="playPause" class="playing">Play</span>
          <span id="mute">Mute</span>
        </div>
        
        <div id="postroll">
          <span id="watch-ad">Watch Your Ad</span>
          <span id="share-to-fb">Share to Facebook</span>
        </div>
  		</div>

  		<hr>

		</div>
	</body>

	<script src="js/lib/jquery-1.8.0.min.js"></script>
  <script src="js/lib/jquery.cycle.all.js"></script>
  <script src="js/lib/popcorn-complete.min.js"></script>
  <script src="js/app.js"></script>

  <?php
  // Suck in passed data for video replay.
  $dataDirty = base64_decode($_REQUEST[ "app_data" ]);
  $dataClean = str_replace(array( "[", "&", "<", ">", "]" ), "", $dataDirty);
  if (!$dataClean)
    $dataClean = "{}";
  echo "<script>var facebookData = " . $dataClean . ";</script>";
  ?>

  <script>
  // Set PHP-dependent global variables.
  $(document).ready(function(){
    window.FB_app_ID = <?php echo $FB_APP_ID; ?>;
    adlib.userIP = '<?php echo $_SERVER['REMOTE_ADDR']; ?>';    
  });
  </script>

</html>
