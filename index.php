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

      // Load pre-fill content and choices.
      adPrefill('smalltown');
      getFacebookPhotos('#ad-smalltown-photo1-choice .choices ul', 'family');
      getFacebookLocations('#ad-smalltown-hometown-choice .choices ul');
      getFacebookEducationAndOccupations('#ad-smalltown-diploma-choice .choices ul');
      getFacebookSlogans('#ad-smalltown-wrapup-choice .choices ul');
      getFacebookPhotos('#ad-smalltown-wrapup-choice .choices ul', 'profile');

      // Load controls once video has loaded.
      video.code({
        start: .1,
        onStart: function(options){
          $('#video_loading').addClass('inactive');
          $('#controls').fadeIn();
        }
      })

      // INPUT: self-portrait
      .code({
        start: 5.25,
        onStart: function(options){
        $('#controls').fadeOut(); // TODO: Make a function that hides these and pauses video each time.
          video.pause();
          $('#ad-smalltown-photo1-choice').addClass('current');

          // 'Continue' buttons.
          $('.choice .continue').click(function() {
            $(this).parents('.choice').fadeOut();
            $('#controls').fadeIn();
            video.play();
          });
        }
      })

      // OUTPUT: self-portrait
      .code({
      	start: 5.3,
      	onStart: function(options){
          $('#ad-smalltown-photo1').addClass('active');
        },
        end: 8,
        onEnd: function(options){
          $('#ad-smalltown-photo1').removeClass('active');
        }
      })

      // INPUT: hometown
      .code({
        start: 9,
        onStart: function(options){
        $('#controls').fadeOut(); // TODO: Make a function that hides these and pauses video each time.
          video.pause();
          $('#ad-smalltown-hometown-choice').addClass('current');

          // 'Continue' buttons.
          $('.choice .continue').click(function() {
            $(this).parents('.choice').fadeOut();
            $('#controls').fadeIn();
            video.play();
          });
        }
      })

      // OUTPUT: hometown
      .code({
      	start: 9.05,
      	onStart: function(options){
          $('#ad-smalltown-hometown').addClass('active');
        },
        end: 14.25,
        onEnd: function(options){
          $('#ad-smalltown-hometown').removeClass('active');
        }
      })

      // INPUT: diploma
      .code({
        start: 17.5,
        onStart: function(options){
        $('#controls').fadeOut(); // TODO: Make a function that hides these and pauses video each time.
          video.pause();
          $('#ad-smalltown-diploma-choice').addClass('current');

          // 'Continue' buttons.
          $('.choice .continue').click(function() {
            $(this).parents('.choice').fadeOut();
            $('#controls').fadeIn();
            video.play();
          });
        }
      })

      // OUTPUT: diploma
      .code({
      	start: 17.55,
      	onStart: function(options){
          $('#ad-smalltown-diploma').addClass('active')
        },
        end: 24,
        onEnd: function(options){
          $('#ad-smalltown-diploma').removeClass('active');
        }
      })

      // INPUT: wrapup
      .code({
        start: 30,
        onStart: function(options){
        $('#controls').fadeOut(); // TODO: Make a function that hides these and pauses video each time.
          video.pause();
          $('#ad-smalltown-wrapup-choice').addClass('current');

          // 'Continue' buttons.
          $('.choice .continue').click(function() {
            $(this).parents('.choice').fadeOut();
            $('#controls').fadeIn();
            video.play();
          });
        }
      })

      // OUTPUT: wrapup
      .code({
        start: 30.1,
        onStart: function(options){
          $('#ad-smalltown-wrapup').addClass('active');
        }
      })

      // Wrapup: photo fly-in
      .code({
      	start: 31,
      	onStart: function(options){
          $('#ad-smalltown-wrapup-mug img').addClass('active');
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

      // Load pre-fill content and choices.
      adPrefill('metro');

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

      // Load pre-fill content and choices.
      adPrefill('fitforoffice');

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
          $('#ad-fitforoffice-photo1 img').addClass('active');
        },
        end: 15,
        onEnd: function(options){
          $('#ad-fitforoffice-photo1 img').removeClass('active');
        }
      })

      // Photo 2
      .code({
        start: 15,
        onStart: function(options){
          $('#ad-fitforoffice-photo2 img').addClass('active')
        },
        end: 18,
        onEnd: function( options ) {
          $('#ad-fitforoffice-photo2 img').removeClass('active');
        }
      })

      // Photo 3 and Quote
      .code({
        start: 18,
        onStart: function(options){
          $('#ad-fitforoffice-quote').addClass('active')
        },
        end: 21.5,
        onEnd: function(options){
          $('#ad-fitforoffice-quote').removeClass('active');
        }
      })

      // Wrapup
      .code({
        start: 25,
        onStart: function(options){
          $('#ad-fitforoffice-wrapup').addClass('active');
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

      // Load pre-fill content and choices.
      adPrefill('backfire');

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

    // Disable window scrolling when we're scrolling through choices.
    $('.choice div').bind('mousewheel DOMMouseScroll', function(e) {
      var scrollTo = null;

      if (e.type == 'mousewheel') {
        scrollTo = (e.originalEvent.wheelDelta * -1);
      }
      else if (e.type == 'DOMMouseScroll') {
        scrollTo = 20 * e.originalEvent.detail;
      }

      if (scrollTo) {
        e.preventDefault();
        $(this).scrollTop(scrollTo + $(this).scrollTop());
      }
    });
    
  });
  </script>

  <script>
  // Start building adlib object
  var adlib = {
    dateCreated : Date(),
    userIP : "<?php echo $_SERVER['REMOTE_ADDR']; ?>",
    ad : "smalltown",
    facebookUserName : "",
    facebookUserID : "",
    choices : {}
  }

  // Initialize Facebook SDK.
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '<?php echo $FB_APP_ID; ?>', // App ID
      channelUrl : 'channel.php',               // Channel File
      status     : true,                        // Check login status.
      cookie     : true,                        // Enable cookies to allow the server to access the session.
      xfbml      : true                         // Parse XFBML.
    });

    FB.getLoginStatus(checkFacebookLoginStatus);
    FB.Event.subscribe('auth.authResponseChange', checkFacebookLoginStatus);

    // Check login.
    function checkFacebookLoginStatus(response) {
      if (response.status === 'connected')
      {
        // User is logged in to Facebook and has authenticated our app.
        var uid = response.authResponse.userID;
        var accessToken = response.authResponse.accessToken;

        // Update the adlib object.
        FB.api('/me', function(response) {
          adlib.facebookUserName = response.name;
          adlib.facebookUserID = uid;
        });

        // Say hello.
        FB.api('/me', function(response) {
          $('#logged_in strong').html(response.first_name);
        });

        // Hide the login step and move on to the next step.
        $('#login_loading').removeClass('current').addClass('completed');
        $('#logged_out').addClass('completed').removeClass('current');
        $('#logged_in').addClass('current');
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

  // Immediately fill in some of the blank areas with Facebook information.
  function adPrefill(ad)
  {
    FB.api('/me', function(response) {
      switch(ad) {
        case 'smalltown' :
          $('#ad-smalltown-diploma-name').html(response.name);
          $('#ad-smalltown-wrapup-name').html(response.name);
          $('#ad-smalltown-wrapup-legal').html('Paid for by the Campaign to Elect ' + response.name);
          break;
        case 'metro' :
          break;
        case 'fitforoffice' :
          break;
        case 'backfire' :
          break;
      }
    });

    FB.api('/me/picture?width=300&height=300', function(response) {
      switch(ad) {
        case 'smalltown' :
          $('#ad-smalltown-wrapup-mug').html('<img src="' + response.data.url + '" style="width: ' + response.data.width + '; height: ' + response.data.height + ';">');
          break;
        case 'metro' :
          break;
        case 'fitforoffice' :
          break;
        case 'backfire' :
          break;
      }      
    });
  } 

  // Get photos of the requested type.
  function getFacebookPhotos(destination, query)
  {
    if (query == 'tagged')
    {
      getFacebookAlbumPhotos(destination, '/me/photos');
    }
    else
    {
      FB.api('/me/albums&limit=50', function(response){

        var albumID = '';
        var albumIDs = {};
        j = 0;

        // Step through albums.
        for (i = 0; i <= 50; i++) {
          if (response.data[i] && response.data[i].type) {

            // Find the 'Profile Photos' album and display its photos.
            if (query == 'profile') {
              if (response.data[i].type == 'profile')
              {
                albumID = response.data[i].id;
                getFacebookPhotos(albumID);
              }
            }

            // Find family photos by looking for album titles that contain certain keywords.
            else if (query == 'family') {
              if (response.data[i].type == 'profile' || 
                  response.data[i].name.search(/baby/i) != -1 ||
                  response.data[i].name.search(/back home/i) != -1 ||
                  response.data[i].name.search(/birthday/i) != -1 ||
                  response.data[i].name.search(/christmas/i) != -1 ||
                  response.data[i].name.search(/dad/i) != -1 ||
                  response.data[i].name.search(/family/i) != -1 ||
                  response.data[i].name.search(/father/i) != -1 ||
                  response.data[i].name.search(/holiday/i) != -1 ||
                  response.data[i].name.search(/home/i) != -1 ||
                  response.data[i].name.search(/mom/i) != -1 ||
                  response.data[i].name.search(/mother/i) != -1 ||
                  response.data[i].name.search(/new year/i) != -1 ||
                  response.data[i].name.search(/parents/i) != -1 ||
                  response.data[i].name.search(/summer/i) != -1 ||
                  response.data[i].name.search(/trip/i) != -1 ||
                  response.data[i].name.search(/vacation/i) != -1) {
                albumIDs[j] = response.data[i].id;
                j++;
              }
            }

            // Find party photos by looking for album titles that contain certain keywords.
            else if (query == 'party')
            {
              if (response.data[i].type == 'profile' || 
                  response.data[i].name.search(/birthday/i) != -1 ||
                  response.data[i].name.search(/crazy/i) != -1 ||
                  response.data[i].name.search(/friends/i) != -1 ||
                  response.data[i].name.search(/holiday/i) != -1 ||
                  response.data[i].name.search(/new year/i) != -1 ||
                  response.data[i].name.search(/night/i) != -1 ||
                  response.data[i].name.search(/party/i) != -1 ||
                  response.data[i].name.search(/trip/i) != -1 ||
                  response.data[i].name.search(/vacation/i) != -1) {
                albumIDs[j] = response.data[i].id;
                j++;
              }
            }
          }
        }

        if (albumIDs[0] != -1) {
          getFacebookAlbumsPhotos(destination, albumIDs);
        }
      });
    }
  }

  // Show 50 photos from the specified album.
  function getFacebookAlbumPhotos(destination, albumRequestString)
  {
    FB.api(albumRequestString + '?limit=0', function(response) {
      if (response.data && response.data[0].images) {
        for (i = 0; i <= 50; i++) {
          if (response.data[i] && response.data[i].images[2]) {
            $(destination).append('<li style="background-image: url(' + response.data[i].images[5].source + ');" id="' + response.data[i].id + '"></li>');
          }
        }
      }

      makeChoices();
    });
  }

  // Step through specified albums and show ten photos from each one.
  function getFacebookAlbumsPhotos(destination, albumIDs)
  {
    console.log(destination);
    console.log(albumIDs);
    // Get the photos we asked for.
    if (albumIDs[0] != -1) {
      for (i = 0; i <= 25; i++) {
        getFacebookAlbumPhotos(destination, '/' + albumIDs[i] + '/photos/');
      }
    }
  }

  // Get the user's hometown, current city, and recent checkins to build a locations list.
  function getFacebookLocations(destination)
  {
    hometownChoices = [];

    // Get hometown and current city.
    FB.api('/me', function(response) {
      if (response.hometown != -1)
        hometownChoices.push(response.hometown.name.substr(0, response.hometown.name.indexOf(',')));

      if (response.location != -1)
        hometownChoices.push(response.location.name.substr(0, response.location.name.indexOf(',')));
    });

    // Get checkins.
    FB.api('/me/checkins', function(response) {
      if (response.data) {
        for (i = 0; i <= 25; i++) {
          if (response.data[i]) {
            hometownChoices.push(response.data[i].place.location.city);
          }
        }
      }

      // Remove duplicate names from list of choices.
      hometownChoicesSorted = hometownChoices.sort();
      hometownChoicesCleaned = [];
      for (i = 0; i < hometownChoices.length; i++) {
        if (hometownChoicesSorted[i + 1] != hometownChoicesSorted[i]) {
          hometownChoicesCleaned.push(hometownChoicesSorted[i]);
        }
      }

      for (i = 0; i < hometownChoicesCleaned.length ; i++) {
        $(destination).append('<li id="' + hometownChoicesCleaned[i] + '">' + hometownChoicesCleaned[i] + '</li>');
      }

      makeChoices();
    });
  }

  // Build arrays of the user's work and education history.
  function getFacebookEducationAndOccupations(destination)
  {
    workChoices = [];
    schoolChoices = [];

    FB.api('/me', function(response) {
      if (response) {
        for (i = 0; i <= 25; i++) {
          if (response.work[0]) {
            if (response.work[i]) {
              if (typeof(response.work[i].start_date) !== 'undefined' && typeof(response.work[i].end_date) !== 'undefined')
                workYears = response.work[i].start_date.substr(0, 4) + ' to ' + response.work[i].end_date.substr(0, 4);
              else if (typeof(response.work[i].start_date) !== 'undefined')
                workYears = response.work[i].start_date.substr(0, 4);

              workChoices.push({employer : response.work[i].employer.name, position : response.work[i].position.name, years : workYears});
            }
            if (response.education[i]) {
              schoolChoices.push({school : response.education[i].school.name, year : response.education[i].year.name});
            }
          } else {
            schoolChoices.push({school : 'The School of Hard Knocks', year : parseInt(response.birthday.substr(6, 4)) + 18})
          }
        }
      }

      for (i = 0; i < 25 ; i++) {
        if (workChoices[i])
          $(destination).append('<li>' + workChoices[i].position + ' at ' + workChoices[i].employer + ', ' + workChoices[i].years + '</li>');
      }

      for (i = 0; i < 25 ; i++) {
        if (schoolChoices[i])
          $(destination).append('<li>' + schoolChoices[i].school + ', ' + schoolChoices[i].year + '</li>');
      }

      makeChoices();
    });
  }

  // Combine the user's bio and recent status updates to form a list of slogans.
  function getFacebookSlogans(destination)
  {
    slogans = [];

    FB.api('/me', function(response) {
      if (response.bio) {
        slogans.push(response.bio);
      }
    });
    
    FB.api('/me/statuses', function(response) {
      if (response.data) {
        for (i = 0; i <= 15; i++) {
          if (response.data[i])
          {
            // Exclude any status that contains a link.
            if (response.data[i].message.indexOf('http') == -1)
            {
              // Include only the first sentence.
              if (response.data[i].message.indexOf('. ') != -1)
                slogans.push(response.data[i].message.substr(0, response.data[i].message.indexOf('. ') + 1));
              else
                slogans.push(response.data[i].message);
            }
          }
        }
      }

      for (i = 0; i < slogans.length; i++) {
        $(destination).append('<li>' + slogans[i] + '</li>');
      }

      makeChoices();
    });
  }

  function getFacebookLikes(destination)
  {
    // TODO

    makeChoices();
  }

  // Handle choice-clicking and deciding.
  function makeChoices() {
    // Highlight choices.
    $('.choice li').click(function() {
      parent = '#' + $(this).parents('.choice').attr('id');

      if ($(this).hasClass('selected')) {
        // Mark all choices neither selected nor unselected (back to zero state).
        $(parent + ' .choices li').removeClass('selected');
        $(parent + ' .choices li').removeClass('unselected');
      } else {
        // Mark all choices unselected.
        $(parent + ' .choices li').removeClass('selected');
        $(parent + ' .choices li').addClass('unselected');

        // Mark the clicked choice selected.
        $(this).removeClass('unselected').addClass('selected');

        var chosen = $(this);

        // Show 'Continue' button, save the selected choice, and continue with slideshow.
        $(this).parents('.choice').children('.actions').addClass('active').click(function(){
          // Set the type of content we're delivering and the content itself.
          if ($(this).siblings('.choices').hasClass('photos')) {
            type = 'photo';
            content = chosen.attr('id');
          }
          else if ($(this).siblings('.choices').hasClass('text')) {
            type = 'text';
            content = chosen.html();
          }

          // Determine the destination of this content. We do this by removing the '-choice' from the ID string of the containing div, because the destination element shares its root name.
          destination = $(this).parents('.choice').attr('id').substr(0, $(this).parents('.choice').attr('id').indexOf('-choice'));

          // Deliver it!
          setContent(type, destination, content);
        });
      }
    });
  }

  // Insert custom content into the ad.
  function setContent(type, destination, content) {

    // Special cases.
    if (destination == 'ad-smalltown-hometown') {
      $('#ad-smalltown-hometown-name span').html(content);
    }
    else if (destination == 'ad-smalltown-diploma') {
      schoolName = content;
      if (content.indexOf('at ') != -1)
        schoolName = schoolName.substr(schoolName.indexOf('at ') + 3);
      if (content.indexOf(', ') != -1)
      {
        schoolName = schoolName.substr(0, schoolName.indexOf(', '));
        schoolYear = content.substr(content.indexOf(', ') + 2);
      }
      $('#ad-smalltown-diploma-school').html(schoolName);
      $('#ad-smalltown-diploma-year').html('~' + schoolYear + '~');
    }
    else if (destination == 'ad-smalltown-wrapup') {
      $('#ad-smalltown-wrapup-slogan').html(content);
    }
    else
    {
      if (type == 'photo')
      {
        FB.api('http://graph.facebook.com/' + content, function(response) {
          if (response.images) {
            $('#' + destination).html('<img src="' + response.images[1].source + '">');
          }
        });
      }
      else if (type == 'text')
      {
        $('#' + destination + ' .text').html(content);
      }
    }

    // Add this choice to our adlib object.
    adlib['choices'][destination] = content;
  
    // Check on our user-created adlib object.
    // console.log(adlib);
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
