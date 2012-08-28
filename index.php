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

		<script src="js/lib/modernizr-2.5.3.min.js"></script>
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
  		      <em class="metroamerica">Metro America</em>
  		      <em class="attack">Attack</em>
  		      <em class="backfire">Backfire</em>
  		      <em class="fitforoffice">Fit-for-office</em>
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
  		      <h2>Choose An Ad!</h2>
            <ul>
              <li class="ad_choice_category left" id="ad_choice-biographical">
                <h3>Biographical</h3>
                <ul>
                  <li class="ad_choice" id="ad_choice-smalltown">Small-town America</li>
                  <li class="ad_choice" id="ad_choice-metro">Metro America</li>
                </ul>
              </li>
              <li class="ad_choice_category middle" id="ad_choice-attack">
                <h3>Attack</h3>
                <ul>
                  <li class="ad_choice" id="ad_choice-fitforoffice">Fit for Office?</li>
                  <li class="ad_choice" id="ad_choice-backfire">Backfire</li>
                </ul>
              </li>
            </ul>
  		    </div>

          <div id="video_loading" class="inactive">Starting the campaign machine&hellip;</div>

          <div id="video_contents">
            <div id="ad-smalltown" class="video_content" style="display: none;">
              <div id="ad-smalltown-photo1-choice" class="choice">
                <h2 class="question">Choose a photo of your past self.</h2>
                <div class="education">
                  <p>Sepia-toned or black-and-white photos from the past can humanize a candidate&rsquo;s appeal.</p>
                  <p><strong>Watch Gerald Ford&rsquo;s 1976 montage of sepia-toned photos:</strong></p>
                  <iframe width="278" height="209" src="http://www.youtube.com/embed/rPSJJwZUmik?rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="choices photos">
                  <ul>
                  </ul>
                </div>
                <div class="actions">
                  <span class="continue"><img src="img/button-okay.png"> Continue</span>
                </div>
              </div>

              <div id="ad-smalltown-photo1" class="fillin photo bottomright">
                
              </div>

              <div id="ad-smalltown-hometown-choice" class="choice no_education">
                <h2 class="question">Where did you grow up?</h2>
                <div class="choices text large">
                  <ul>
                  </ul>
                </div>
                <div class="actions">
                  <span class="continue"><img src="img/button-okay.png"> Continue</span>
                </div>
              </div>

        			<div id="ad-smalltown-hometown" class="fillin">
        			  <div id="ad-smalltown-hometown-name"><span>Podunk, USA</span></div>
        			</div>

              <div id="ad-smalltown-diploma-choice" class="choice">
                <h2 class="question">What is your proudest achievement?</h2>
                <div class="education">
                  <p>Biographical spots highlight a candidate&rsquo;s positive career milestones. Presumably, candidates applied the small-town values they learned to reach their achievements.</p>
                  <p><strong>Watch Bill Clinton shake hands with President John Kennedy:</strong></p>
                  <object width="278" height="236"><param name="movie" value="http://www.livingroomcandidate.org/flash/player.swf?id=4140"></param><param name="allowFullScreen" value="true"></param><embed src="http://www.livingroomcandidate.org/flash/player.swf?id=4140" type="application/x-shockwave-flash" allowfullscreen="true" width="278" height="236"></embed></object>
                </div>
                <div class="choices text">
                  <ul>
                  </ul>
                </div>
                <div class="actions">
                  <span class="continue"><img src="img/button-okay.png"> Continue</span>
                </div>
              </div>

        			<div id="ad-smalltown-diploma" class="fillin">
        			  <div id="ad-smalltown-diploma-school">School of Hard Knocks</div>
        			  <div id="ad-smalltown-diploma-name">John Q. Public</div>
        			  <div id="ad-smalltown-diploma-year">~ 1979 ~</div>
        			</div>

              <div id="ad-smalltown-wrapup-choice" class="choice">
                <h2 class="question small">What is your vision for America? Make a slogan.</h2>
                <div class="education">
                  <p>Brevity thrives in advertising. Make the slogan punchy and positive!</p>
                  <p><strong>Watch the catchy &lsquo;I Like Ike&rsquo; ad for Dwight Eisenhower:</strong></p>
                  <iframe width="278" height="209" src="http://www.youtube.com/embed/va5Btg4kkUE?rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>
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
        			  <div id="ad-smalltown-wrapup-name">John Q. Public</div>
        			  <div id="ad-smalltown-wrapup-slogan">It could be worse.</div>
        			  <div id="ad-smalltown-wrapup-mug"></div>
        			  <div id="ad-smalltown-wrapup-legal">This message was paid for by you, the taxpayer.</div>
        			</div>
        		</div>

            <div id="ad-metro" class="video_content" style="display: none;">
              <!-- -->
        		</div>

        		<div id="ad-fitforoffice" class="ad_container" style="display: none;">
        			<div id="ad-fitforoffice-photo1" class="fillin photo bottomleft">
        			  <img src="img/attack/1.jpg">
        			</div>
        			<div id="ad-fitforoffice-photo2" class="fillin photo bottomright">
        			  <img src="img/attack/2.jpg">
        			</div>
        			<div id="ad-fitforoffice-quote" class="fillin">
        			  <p>I don&rsquo;t care. I don&rsquo;t care about anything or anybody and I don&rsquo;t care who knows it.<br>&mdash;Darren Dastardly</p>
        			  <img src="img/attack/3.jpg">
        			</div>
        			<div id="ad-fitforoffice-wrapup" class="fillin">
        			  <div class="name">Wendy Wonderful</div>
        			  <div class="quote">A candidate we can really trust.</div>
        			  <div class="disclaimer">Wendy Wonderful assumes no responsibility for any breaches of courtesy or professionalism contained herein.<br>The Wendy Wonderful campaign absolves itself of all potential claims of libel, slander, or bad taste.<br>This ad paid for by the deep coffers of the Committee to Elect Wendy Wonderful.</div>
        			  <img src="img/attack/4.jpg">
        			</div>
        		</div>

            <div id="ad-backfire" class="video_content" style="display: none;">

        		</div>
        	</div>

          <div id="video" style="width: 800px; height: 450px;"></div>
    		</div>

        <div id="controls" style="display: none;">
          <span id="pause">Pause</span>
          <span id="play" style="display: none;">Play</span>
          <span id="unmute">Un-mute</span>
          <span id="mute" style="display: none;">Mute</span>
        </div>
        
        <div id="postroll">
          <span id="watch-ad">Watch Your Ad</span>
          <span id="share-to-fb">Share to Facebook</span>
        </div><!-- end postroll -->
  		</div>

  		<hr>

		</div>
	</body>

	<script src="js/lib/jquery-1.8.0.min.js"></script>
  <script src="js/lib/jquery.cycle.all.js"></script>
  <script src="js/lib/popcorn-complete.min.js"></script>
  <script src="js/lib/underscore-min.js"></script>
  <script src="js/app.js"></script>

  <script>
  // Set PHP-dependent global variables.
  $(document).ready(function(){
    window.FB_app_ID = <?php echo $FB_APP_ID; ?>;
    adlib.userIP = '<?php echo $_SERVER['REMOTE_ADDR']; ?>';
  });
  </script>

</html>
