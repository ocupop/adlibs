<!DOCTYPE HTML> <?php if ($_SERVER["SERVER_NAME"] == 'localhost') { $FB_APP_ID = '461888813829980'; } if ($_SERVER["SERVER_NAME"] == 'ocupopdev.com') { $FB_APP_ID = '331797950244138'; } ?>
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

		<link rel="stylesheet" type="text/css" href="style.css" />
		<link rel="stylesheet" type="text/css" href="ads.css" />

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
              <div class="fb-login-button" data-size="xlarge" scope="user_about_me,
                                                                     user_activities,
                                                                     user_education_history,
                                                                     user_hometown,
                                                                     user_interests,
                                                                     user_photos,
                                                                     user_status,
                                                                     user_work_history">
                Log In with Facebook
              </div>
              to get started!
            </h3>
            <h3 id="logged_in">
              Start campaigning, <strong></strong>! <img src="img/button-play.png">
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

            <!--
            ad-smalltown-photo1
            ad-smalltown-hometown
            ad-smalltown-diploma
            ad-smalltown-photo2
            ad-smalltown-wrapup
            -->

            <div id="ad-smalltown" style="display: none;">
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

              <div id="ad-smalltown-photo1" class="photo bottomright">
                <img src="img/bio/1.jpg" alt="">
              </div>

              <div id="ad-smalltown-hometown-choice" class="choice no_education">
                <h2 class="question">Where did you grow up?</h2>
                <div class="choices information">
                  <ul>
                  </ul>
                </div>
                <div class="actions">
                  <span class="continue"><img src="img/button-okay.png"> Continue</span>
                </div>
              </div>

        			<div id="ad-smalltown-hometown">
        			  <div class="text"><span>Podunk, USA</span></div>
        			</div>

              <div id="ad-smalltown-diploma-choice" class="choice">
                <h2 class="question">What is your proudest achievement?</h2>
                <div class="education">
                  <p>Biographical spots highlight a candidate&rsquo;s positive career milestones. Presumably, candidates applied the small-town values they learned to reach their achievements.</p>
                  <p><strong>Watch Bill Clinton shake hands with President John Kennedy:</strong></p>
                  <object width="278" height="236"><param name="movie" value="http://www.livingroomcandidate.org/flash/player.swf?id=4140"></param><param name="allowFullScreen" value="true"></param><embed src="http://www.livingroomcandidate.org/flash/player.swf?id=4140" type="application/x-shockwave-flash" allowfullscreen="true" width="278" height="236"></embed></object>
                </div>
                <div class="choices photos">
                  <ul>
                  </ul>
                </div>
                <div class="actions">
                  <span class="continue"><img src="img/button-okay.png"> Continue</span>
                </div>
              </div>

        			<div id="ad-smalltown-diploma">
        			  <div class="school" id="school">School of Hard Knocks</div>
        			  <div class="name">John Q. Public</div>
        			  <div class="year">~ 1979 ~</div>
        			</div>

              <div id="ad-smalltown-photo2-choice" class="choice">
                <h2 class="question">Pick a family photo!</h2>
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

              <div id="ad-smalltown-photo2">
                <div class="school" id="school">School of Hard Knocks</div>
                <div class="name">John Q. Public</div>
                <div class="year">~ 1979 ~</div>
              </div>

              <div id="ad-smalltown-slogan-choice" class="choice">
                <h2 class="question">Pick a self-portrait!</h2>
                <div class="education">
                  <p>Brevity thrives in advertising. Make the slogan punchy and positive!</p>
                  <p><strong>Watch the catchy &lsquo;I Like Ike&rsquo; ad for Dwight Eisenhower:</strong></p>
                  <iframe width="278" height="209" src="http://www.youtube.com/embed/va5Btg4kkUE?rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="choices photos">
                  <ul>
                  </ul>
                </div>
                <div class="actions">
                  <span class="continue"><img src="img/button-okay.png"> Continue</span>
                </div>
              </div>

        			<div id="ad-smalltown-wrapup">
        			  <div class="name">John Q. Public</div>
        			  <div class="slogan">It could be worse.</div>
        			  <div class="mug"><img src="img/bio/2.jpg"></div>
        			  <div class="legal">This message was paid for by you, the taxpayer.</div>
        			</div>
        		</div>

            <div id="ad-metro" style="display: none;">
              <!-- -->
        		</div>

        		<div id="ad-fitforoffice" style="display: none;">
        			<div id="ad-fitforoffice-photo1" class="photo bottomleft">
        			  <img src="img/attack/1.jpg">
        			</div>
        			<div id="ad-fitforoffice-photo2" class="photo bottomright">
        			  <img src="img/attack/2.jpg">
        			</div>
        			<div id="ad-fitforoffice-quote">
        			  <p>I don&rsquo;t care. I don&rsquo;t care about anything or anybody and I don&rsquo;t care who knows it.<br>&mdash;Darren Dastardly</p>
        			  <img src="img/attack/3.jpg">
        			</div>
        			<div id="ad-fitforoffice-wrapup">
        			  <div class="name">Wendy Wonderful</div>
        			  <div class="quote">A candidate we can really trust.</div>
        			  <div class="disclaimer">Wendy Wonderful assumes no responsibility for any breaches of courtesy or professionalism contained herein.<br>The Wendy Wonderful campaign absolves itself of all potential claims of libel, slander, or bad taste.<br>This ad paid for by the deep coffers of the Committee to Elect Wendy Wonderful.</div>
        			  <img src="img/attack/4.jpg">
        			</div>
        		</div>

            <div id="ad-backfire" style="display: none;">

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
  		</div>

  		<hr>

		</div>
	</body>

	<script src="js/lib/jquery-1.8.0.min.js"></script>
	<script src="js/lib/popcorn-complete.min.js"></script>
  <script src="js/lib/jquery.cycle.all.js"></script>

  <script>
  $(document).ready(function(){

    // Tagline blank-line ad-type cycler
    $('#ad_type_cycle').cycle({
      speed: 'fast',
      timeout: 1500,
      startingSlide: 0
    });

    // Log in.
    $('#logged_in').click(function(){
      $(this).removeClass('current').addClass('completed');
      $('#title_card').addClass('completed');
    });

    // Choose an ad category.
    $('.ad_choice_category').click(function(){
      $('.ad_choice_category').removeClass('chosen').addClass('not_chosen');
      $(this).removeClass('not_chosen').addClass('chosen');
    });

    // Choose an ad.
    $('.ad_choice').click(function(){
      // Highlight the chosen ad, un-highlight the not-chosen ads.
      $('.ad_choice').removeClass('chosen').addClass('not_chosen');
      $(this).addClass('chosen');

      // After a second and a half delay, hide slide two and the pin and crest graphics.
      setTimeout(function() {
        $('#ad_chooser').addClass('completed');
        $('.crest').addClass('gone');
        $('.pin').addClass('gone');
      }, 1500);

      // Determine the ID chosen.
      ad = $(this).attr('id').substr(10);

      // Load advertisement.
      startAd(ad);
    });

    // YouTube video IDs
    var youtube_video = { 'smalltown'    : 'Y2TqwN8Gpms',
                          'metro'        : '7koOKhJ4H9E',
                          'fitforoffice' : 'FjDXudS9GNo',
                          'backfire'     : 'r9uO6x0Q8bc' };

    // Ad-loader
    function startAd(ad)
    {
      // Pause the cycler on the right ad
      $('#ad_type_cycle').cycle($('#ad_type_cycle em.' + ad).index()).cycle('pause');

      // Video loading.
      $('#video_loading').removeClass('inactive');

      // Load overlay.
      $('#ad-' + ad).show();

      // Fetch the ad and play it.
      var video = Popcorn.youtube( '#video', 'http://www.youtube.com/watch?v=' + youtube_video[ad] + '&controls=0&rel=0&showinfo=0' );
      video.play();

      // Show the ad overlay contents.
      video.code({
        start: 0,
        onStart: function( options ) {
          $('#video_contents').show();
        }
      });

      // Load controls.
      $('#pause').click(function()  { video.pause(); });
      $('#play').click(function()   { video.play(); });
      $('#mute').click(function()   { video.unmute(); });
      $('#unmute').click(function() { video.mute(); });

      // Load Popcorn and Facebook actions for this video.
      switch(ad) {
        case 'smalltown' :
          play_smalltown(video);
          break;
        case 'metro' :
          play_metro(video);
          break;
        case 'fitforoffice' :
          play_fitforoffice(video);
          break;
        case 'backfire' :
          play_backfire(video);
          break;
      }
    }

    // Show and hide play/pause and mute/unmute video controls.
    $('#pause').click(function()  { $('#pause').fadeOut();  $('#play').fadeIn();   });
    $('#play').click(function()   { $('#play').fadeOut();   $('#pause').fadeIn();  });
    $('#unmute').click(function() { $('#unmute').fadeOut(); $('#mute').fadeIn();   });
    $('#mute').click(function()   { $('#mute').fadeOut();   $('#unmute').fadeIn(); });

    // Ad: Small-town America
    function play_smalltown(video) {

      // Load controls once video has loaded.
      video.code({
        start: .1,
        onStart: function(options){
          $('#video_loading').addClass('inactive');
          $('#controls').fadeIn();
        }
      })

      // INPUT: family photo
      .code({
        start: 5.25,
        onStart: function(options){
        $('#controls').fadeOut(); // TODO: Make a function that hides these and pauses video each time.
          video.pause();
          $('#ad-smalltown-photo1-choice').addClass('current');

          // 'Continue' buttons.
          $('.choice .continue').click(function() {
            $('#ad-smalltown-photo1-choice').fadeOut();
            // $(this).parent('.choice').addClass('complete').removeClass('current');
            $('#controls').fadeIn();
            video.play();
          });
        }
      })

      // CONTENT: family photo
      .code({
      	start: 5.3,
      	onStart: function(options){
          $('#ad-smalltown-photo1 img').addClass('fx');
        },
        end: 8,
        onEnd: function(options){
          $('#ad-smalltown-photo1 img').removeClass('fx');
        }
      })

      // CONTENT: hometown name
      .code({
      	start: 9.5,
      	onStart: function(options){
          $('#ad-smalltown-hometown').addClass('fx');
        },
        end: 14.5,
        onEnd: function(options){
          $('#ad-smalltown-hometown').removeClass('fx');
        }
      })

      // CONTENT: diploma
      .code({
      	start: 18,
      	onStart: function(options){
          $('#ad-smalltown-diploma').addClass('fx')
        },
        end: 22,
        onEnd: function(options){
          $('#ad-smalltown-diploma').removeClass('fx');
        }
      })

      // CONTENT: family photo
      .code({
        start: 20,
        onStart: function(options){
          $('#ad-smalltown-photo2 img').addClass('fx');
        },
        end: 24,
        onEnd: function(options){
          $('#ad-smalltown-photo2 img').removeClass('fx');
        }
      })

      // CONTENT: wrapup
      .code({
        start: 30,
        onStart: function(options){
          $('#ad-smalltown-wrapup').addClass('fx');
        }
      })

      // Wrapup: photo fly-in
      .code({
      	start: 32,
      	onStart: function(options){
          $('#ad-smalltown-wrapup .mug img').addClass('fx');
        }
      })

      // End. Pause video.
      .code({
      	start: 35,
      	onStart: function(options){
          video.pause();
        }
      });

    }

    // Ad: Metro America
    function play_metro(video) {

      // Load controls once video has loaded.
      video.code({
        start: .1,
        onStart: function(options){
          $('#video_loading').addClass('inactive');
          $('#controls').fadeIn();
        }
      })

      // End. Pause video.
      .code({
      	start: 32,
      	onStart: function(options){
          video.pause();
        }
      });

    }

    // Ad: Fit for Office?
    function play_fitforoffice(video) {

      // Load controls once video has loaded.
      video.code({
        start: .1,
        onStart: function(options){
          $('#video_loading').addClass('inactive');
          $('#controls').fadeIn();
        }
      })

      // Photo 1
      .code({
        start: 12,
        onStart: function(options){
          $('#ad-fitforoffice-photo1 img').addClass('fx');
        },
        end: 15,
        onEnd: function(options){
          $('#ad-fitforoffice-photo1 img').removeClass('fx');
        }
      })

      // Photo 2
      .code({
        start: 15,
        onStart: function(options){
          $('#ad-fitforoffice-photo2 img').addClass('fx')
        },
        end: 18,
        onEnd: function( options ) {
          $('#ad-fitforoffice-photo2 img').removeClass('fx');
        }
      })

      // Photo 3 and Quote
      .code({
        start: 18,
        onStart: function(options){
          $('#ad-fitforoffice-quote').addClass('fx')
        },
        end: 21.5,
        onEnd: function(options){
          $('#ad-fitforoffice-quote').removeClass('fx');
        }
      })

      // Wrapup
      .code({
        start: 25,
        onStart: function(options){
          $('#ad-fitforoffice-wrapup').addClass('fx');
        }
      })

      // End. Pause video.
      .code({
        start: 30,
        onStart: function(options){
          video.pause();
        }
      });

    }

    // Ad: Backfire
    function play_backfire(video) {

      // Load controls once video has loaded.
      video.code({
        start: .1,
        onStart: function(options){
          $('#video_loading').addClass('inactive');
          $('#controls').fadeIn();
        }
      })

      // End. Pause video.
      .code({
        start: 30,
        onStart: function(options){
          video.pause();
        }
      });

    }

  });
  </script>

  <script>
  // Initialize Facebook SDK.
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '<?php echo $FB_APP_ID; ?>', // App ID
      channelUrl : 'channel.php',               // Channel File
      status     : true,                        // Check login status.
      cookie     : true,                        // Enable cookies to allow the server to access the session.
      xfbml      : true                         // Parse XFBML.
    });

    // FB.getLoginStatus(checkFacebookLoginStatus);
    FB.Event.subscribe('auth.authResponseChange', checkFacebookLoginStatus);

    // Check login.
    function checkFacebookLoginStatus(response) {
      if (response.status === 'connected')
      {
        // User is logged in to Facebook and has authenticated our app.
        var uid = response.authResponse.userID;
        var accessToken = response.authResponse.accessToken;

        // Say hello.
        FB.api('/me', function(response) {
          $('#logged_in strong').html(response.first_name);
        });

        // Hide the login step and move on to the next step.
        $('#login_loading').removeClass('current').addClass('completed');
        $('#logged_out').addClass('completed').removeClass('current');
        $('#logged_in').addClass('current');

        // Execute data retrieval.
        getFacebookDataForSmallTownAdSample();
      }
      else if (response.status === 'not_authorized')
      {
        // User is logged in to Facebook but has not authorized our app.
        $('#login_loading').removeClass('current').addClass('completed');
        $('#logged_out').removeClass('completed').addClass('current');
        $('#logged_in').removeClass('current');
      }
      else
      {
        // User is not logged in to Facebook.
        $('#login_loading').removeClass('current').addClass('completed');
        $('#logged_out').removeClass('completed').addClass('current');
        $('#logged_in').removeClass('current');
      }
    }
  }

  function getFacebookDataForSmallTownAdSample()
  {
    var adlib = {
      'ad' : 'smalltown',
      'dateCreated' : Date(),
      'ip' : '<?php echo $_SERVER['REMOTE_ADDR']; ?>',
      'choices' : {}
    }

    // Check on our user-created adlib object.
    console.log(adlib);

    // Basic information
    FB.api('/me', function(response) {

      // Copy basic user information into an object.
      var user_information = new Object();
      user_information.uid = response.id;
      user_information.name = response.name;
      user_information.first_name = response.first_name;
      user_information.last_name = response.last_name;
      user_information.birthday = response.birthday;
      user_information.bio = response.bio;

      // Omit the state name from the hometown string.
      user_information.hometown = response.hometown.name.substr(0, response.hometown.name.indexOf(','));

      // Get work information if it's available.
      // TODO: This should be an array to choose from, not just the first one we find.
      if (typeof(response.work) !== 'undefined') {
        if (typeof(response.work[0].position) !== 'undefined')
          user_information.work_position = response.work[0].position.name;

        if (typeof(response.work[0].employer) !== 'undefined')
          user_information.work_name = response.work[0].employer.name;

        if (typeof(response.work[0].start_date) !== 'undefined' && typeof(response.work[0].end_date) !== 'undefined')
          user_information.work_years = response.work[0].start_date.substr(0, 4) + ' to ' + response.work[0].end_date.substr(0, 4);
        else if (typeof(response.work[0].start_date) !== 'undefined')
          user_information.work_years = response.work[0].start_date.substr(0, 4);
      }

      // Get school information if it's available.
      // TODO: This should be an array to choose from, not just the first one we find.
      if (typeof(response.education) !== 'undefined') {
        user_information.school_name = response.education[0].school.name;
        user_information.school_year = response.education[0].year.name;
      } else {
      // If not, call it 'School of Hard Knocks' and add 18 years to their birthday.
        user_information.school_name = 'The School of Hard Knocks';
        user_information.school_year = parseInt(response.birthday.substr(6, 4)) + 18;
      }

      // Fill in what we can.
      $('#ad-smalltown-hometown .text span').html(user_information.hometown);
      $('#ad-smalltown-diploma .name').html(user_information.name);
      $('#ad-smalltown-diploma .school').html(user_information.school_name);
      $('#ad-smalltown-diploma .year').html('~ ' + user_information.school_year  + ' ~');
      $('#ad-smalltown-wrapup .name').html(user_information.name);
      $('#ad-smalltown-wrapup .slogan').html(user_information.bio);
      $('#ad-smalltown-wrapup .legal').html('Paid for by the Campaign to Elect ' + user_information.name);
    });

    // Photos
    FB.api('/me/photos', function(response) {
  		if (response.data && response.data[0].images) {
  			for (i = 0; i <= 25; i++) {
  				if (response.data[i] && response.data[i].images[2]) {
  					$('#ad-smalltown-choice1 .photos ul').append('<li style="background-image: url(' + response.data[i].images[5].source + ');" id="' + response.data[i].id + '"></li>');
  				}
  			}
  		}

    // Photo Chooser
    $('.photos li').click(function() {
      if ($(this).hasClass('selected'))
      {
        $('.photos li').removeClass('selected');
        $('.photos li').removeClass('unselected');
      } else {
        $('.photos li').removeClass('selected');
        $('.photos li').addClass('unselected');
        $(this).removeClass('unselected').addClass('selected');
        getSelectedPhoto($(this).attr('id'));
      }
    });

    function getSelectedPhoto(photoID) {
      $('#ad-smalltown-choice1 .actions').addClass('ready');
      FB.api('http://graph.facebook.com/' + photoID, function(response) {
        if (response.images) {
          $('#ad-smalltown-photo1').html('<img src="' + response.images[1].source + '">');
        }
      });

      // Add this choice to our adlib object.
      adlib['choices'][0] = photoID;

      // Check on our user-created adlib object.
      console.log(adlib);
    }

  		// Fill in what we can.
      $('#ad-smalltown-photo1').html('<img src="' + response.data[0].images[2].source + '">');
      $('#ad-smalltown-wrapup .mug').html('<img src="' + response.data[1].images[5].source + '">');
    });
  }

  // Load the SDK asynchronously.
  (function(d){
    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement('script'); js.id = id; js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
  }(document));
  </script>

</html>