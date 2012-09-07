var showInputs = true;

$(document).ready(function(){

  // Show intro slides. Load the title card and then the ad chooser on top of the background image.
  setTimeout(function(){ $('#title_card').addClass('current') }, 1500);
  setTimeout(function(){ $('#video_chooser').addClass('current') }, 2000);

  // Tagline blank-line ad-type cycler
  $('#video_type_cycle').cycle({
    speed: 'fast',
    timeout: 1500,
    startingSlide: 0
  });

  // Log in.
  $('#login-logged_in').click(function(){
    $('#title_card').addClass('completed');
  });

  // Choose an ad category.
  $('.video_type_category').click(function(){
    $('.video_type_category').removeClass('chosen').addClass('not_chosen');
    $(this).removeClass('not_chosen').addClass('chosen');
  });

  // Choose an ad.
  $('.video_type.clickable').click(function(){
    // Highlight the chosen ad, un-highlight the not-chosen ads.
    $('.video_type').removeClass('chosen clickable').addClass('not_chosen');
    $(this).addClass('chosen');

    // Determine the ID chosen.
    ad = $(this).attr('id').substr(11);

    // Load advertisement.
    loadAd(ad);
  });

  // YouTube video IDs
  var youtube_video = { 'smalltown'   : 'RspONMMMMT8',
                        'metro'       : 'q9nHUkG5dOQ',
                        'credentials' : 'FjDXudS9GNo',
                        'character'   : 'r9uO6x0Q8bc' };

  // Ad-loader
  function loadAd(ad)
  {
    // Hide pin and crest.
    setTimeout(function(){ $('.video-decor-crest').addClass('gone') }, 2000);
    setTimeout(function(){ $('.video-decor-pin').addClass('gone') }, 2000);

    // Pause the cycler on the right ad
    $('#video_type_cycle').cycle($('#video_type_cycle em.' + ad).index()).cycle('pause');

    // Hide ad-chooser.
    $('#video_chooser').addClass('completed');

    // Video loading.
    $('#video-loading').removeClass('inactive');

    // Load overlay.
    $('#ad-' + ad).show();

    // Fetch the ad and play it.
    var video = Popcorn.youtube( '#video', 'http://www.youtube.com/watch?v=' + youtube_video[ad] + '&controls=0&rel=0&showinfo=0' );
    video.play();

    // Show the ad overlay contents.
    video.code({
      start: 0,
      onStart: function( options ) {
        $('#video-contents').show();
      }
    });

    // Load controls.
    $('#play_pause').click(function()  {
      if($(this).hasClass('playing')){ 
        video.pause();
      } else {
        video.play();
      }
      $(this).toggleClass('playing');
    });
    
    $('#mute').click(function() { 
      if($(this).hasClass('muted')){
        video.unmute(); 
      } else {
        video.mute(); 
      }
      $(this).toggleClass('muted');
    });
    
    // Load Popcorn and Facebook actions for this video.
    switch(ad) {
      case 'smalltown' :
        play_smalltown(video);
        break;
      case 'metro' :
        play_metro(video);
        break;
      case 'credentials' :
        play_credentials(video);
        break;
      case 'character' :
        play_character(video);
        break;
    }
  }

  // Hide the ad chooser and the loading screen and show controls.
  function startAd(ad)
  {
    $('#video-loading').addClass('inactive');
    $('#video-mask').addClass('transparent'); // Allow the video to show through the back of the mask.
    $('#video-controls').fadeIn();
  }

  // Facebook Share button.
  $('#postroll #share-to-fb').click(function(){
    var testData = {
      ad: "smalltown",
      choices: [
        "1015199433470328" ],
      dateCreated: "Wed Aug 15 2012 17:19:55 GMT-1000 (HST)",
      ip: "127.0.0.1"
    };

    FB.ui({
      method: 'stream.publish',
      attachment: {
        name: "My Campaign Ad",
        description: 'PBS Admaker',
        href: "http://apps.facebook.com/admaker/?app_data=" + btoa(JSON.stringify(testData))
      }
    });
  });


  // Ad: Small-town America
  function play_smalltown(video) {

    adPrefill('smalltown');
    getFacebookPhotos('#ad-smalltown-photo1-input .choices ul');
    getFacebookLocations('#ad-smalltown-hometown-input .choices ul');
    getFacebookEducationAndOccupations('#ad-smalltown-diploma-input .choices ul');
    getFacebookSlogans('#ad-smalltown-wrapup-input .choices ul');
    makeChoices();

    // Hide loading screen and show controls once the video has loaded.
    video.code({
      start: '00.10', onStart: function(options){ startAd(); }
    })

    // OUTPUT: self-portrait
    .code({
      start: '05.10', onStart: function(options){ $('#ad-smalltown-photo1').addClass('active'); },
        end: '08.00',   onEnd: function(options){ $('#ad-smalltown-photo1').removeClass('active'); }
    })

    // OUTPUT: hometown
    .code({
      start: '09.00', onStart: function(options){ $('#ad-smalltown-hometown').addClass('active'); },
        end: '14.25',   onEnd: function(options){ $('#ad-smalltown-hometown').removeClass('active'); }
    })

    // OUTPUT: diploma
    .code({
      start: '17.55', onStart: function(options){ $('#ad-smalltown-diploma').addClass('active') },
        end: '24.00',   onEnd: function(options){ $('#ad-smalltown-diploma').removeClass('active'); }
    })

    // OUTPUT: wrapup
    .code({
      start: '30.10', onStart: function(options){ $('#ad-smalltown-wrapup').addClass('active'); }
    })

    // OUTPUT: wrapup: profile photo fly-in
    .code({
      start: '31.00', onStart: function(options){ $('#ad-smalltown-wrapup-mug img').addClass('active'); }
    })

    // End. Pause video.
    .code({
      start: '34.00',
      onStart: function(options){
        video.pause();
        $('#video-controls').hide();
        $('#postroll').show();
        $('#postroll #watch-ad').click(function(){
          video.currentTime(0);
          $('#ad-smalltown-wrapup').removeClass('active');          
          $('#postroll').hide();
          video.play();
          showInputs = false;
        });
      }
    });

    if (showInputs === true)
    {
      // INPUT: self-portrait
      video.code({
        start: '05.00',
        onStart: function(options){
        $('#video-controls').fadeOut(); // TODO: Make a function that generalizes the commands here.
          video.pause();
          $('#video-overlay').addClass('active');
          $('#ad-smalltown-photo1-input').addClass('current');
          var smalltown_photo1_education_video = Popcorn.youtube('#ad-smalltown-photo1-input-education_video', 'http://www.youtube.com/watch?v=rPSJJwZUmik&controls=0&rel=0&showinfo=0');

          // 'Continue' buttons.
          $('#ad-smalltown-photo1-input .continue').click(function() {
            $('#ad-smalltown-photo1-input').removeClass('current');
            $('#video-overlay').removeClass('active');
            $('#videocontrols').fadeIn();
            smalltown_photo1_education_video.destroy();
            video.play();
          });
        }
      })

      // INPUT: hometown
      .code({
        start: '08.50',
        onStart: function(options){
        $('#video-controls').fadeOut(); // TODO: Make a function that generalizes the commands here.
          video.pause();
          $('#video-overlay').addClass('active');
          $('#ad-smalltown-hometown-input').addClass('current');

          // 'Continue' buttons.
          $('#ad-smalltown-hometown-input .continue').click(function() {
            $('#ad-smalltown-hometown-input').removeClass('current');
            $('#video-overlay').removeClass('active');
            $('#video-controls').fadeIn();
            video.play();
          });
        }
      })

      // INPUT: diploma
      .code({
        start: '17.50',
        onStart: function(options){
          $('#video-controls').fadeOut(); // TODO: Make a function that generalizes the commands here.
          video.pause();
          $('#video-overlay').addClass('active');
          $('#ad-smalltown-diploma-input').addClass('current');
          var smalltown_diploma_education_video = Popcorn.youtube('#ad-smalltown-diploma-input-education_video', 'http://www.youtube.com/watch?v=WiqWpTuse18&controls=0&rel=0&showinfo=0');

          // 'Continue' buttons.
          $('#ad-smalltown-diploma-input .continue').click(function() {
            $('#ad-smalltown-diploma-input').removeClass('current');
            $('#video-overlay').removeClass('active');
            $('#video-controls').fadeIn();
            smalltown_diploma_education_video.destroy();
            video.play();
          });
        }
      })

      // INPUT: wrapup
      .code({
        start: '30.00',
        onStart: function(options){
          $('#video-controls').fadeOut(); // TODO: Make a function that generalizes the commands here.
          video.pause();
          $('#video-overlay').addClass('active');
          $('#ad-smalltown-wrapup-input').addClass('current');
          var smalltown_wrapup_education_video = Popcorn.youtube('#ad-smalltown-wrapup-input-education_video', 'http://www.youtube.com/watch?v=va5Btg4kkUE&controls=0&rel=0&showinfo=0');

          // 'Continue' buttons.
          $('#ad-smalltown-wrapup-input .continue').click(function() {
            $('#ad-smalltown-wrapup-input').removeClass('current');
            $('#video-overlay').removeClass('active');
            $('#video-controls').fadeIn();
            smalltown_wrapup_education_video.destroy();
            video.play();
          });
        }
      });
    }
  }

  // Ad: Metro America
  function play_metro(video) {

    adPrefill('metro');
    getFacebookPhotos('#ad-metro-photo1-input .choices ul');
    getFacebookPhotos('#ad-metro-photo2-input .choices ul');
    getFacebookEducationAndOccupations('#ad-metro-achievement-input .choices ul');
    getFacebookSlogans('#ad-metro-wrapup-input .choices ul');
    makeChoices();

    // Hide loading screen and show controls once the video has loaded.
    video.code({
      start: '00.10', onStart: function(options){ startAd(); }
    })

    // OUTPUT: self-portrait
    .code({
      start: '04.25', onStart: function(options){ $('#ad-metro-photo1').addClass('active'); },
        end: '09.00',   onEnd: function(options){ $('#ad-metro-photo1').removeClass('active'); }
    })

    // OUTPUT: hardship photo
    .code({
      start: '12.00', onStart: function(options){ $('#ad-metro-photo2').addClass('active'); },
        end: '13.00',   onEnd: function(options){ $('#ad-metro-photo2').removeClass('active'); }
    })

    // OUTPUT: achievement
    .code({
      start: '15.00', onStart: function(options){ $('#ad-metro-achievement').addClass('active') },
        end: '18.00',   onEnd: function(options){ $('#ad-metro-achievement').removeClass('active'); }
    })

    // OUTPUT: wrapup
    .code({
      start: '26.00', onStart: function(options){ $('#ad-metro-wrapup').addClass('active'); }
    })

    // OUTPUT: wrapup: profile photo fly-in
    .code({
      start: '31.00', onStart: function(options){ $('#ad-metro-wrapup-mug img').addClass('active'); }
    })

    // End. Pause video.
    .code({
      start: '31.00',
      onStart: function(options){
        video.pause();
        $('#video-controls').hide();
        $('#postroll').show();
        $('#postroll #watch-ad').click(function(){
          video.currentTime(0);
          $('#ad-smalltown-wrapup').removeClass('active');          
          $('#postroll').hide();
          video.play();
          var showInputs = false;
        });
      }
    });

    if (showInputs === true)
    {
      // INPUT: self-portrait
      video.code({
        start: '04.00',
        onStart: function(options){
          $('#video-controls').fadeOut(); // TODO: Make a function that generalizes the commands here.
          video.pause();
          $('#video-overlay').addClass('active');
          $('#ad-metro-photo1-input').addClass('current');
          var metro_photo1_education_video = Popcorn.youtube('#ad-metro-photo1-input-education_video', 'http://www.youtube.com/watch?v=L1N1fYDq26k&controls=0&rel=0&showinfo=0');

          // 'Continue' buttons.
          $('#ad-metro-photo1-input .continue').click(function() {
            $('#ad-metro-photo1-input').removeClass('current');
            $('#video-overlay').removeClass('active');
            $('#video-controls').fadeIn();
            metro_photo1_education_video.destroy();
            video.play();
          });
        }
      })

      // INPUT: hardships
      .code({
        start: '09.50',
        onStart: function(options){
          $('#video-controls').fadeOut(); // TODO: Make a function that generalizes the commands here.
          video.pause();
          $('#video-overlay').addClass('active');
          $('#ad-metro-photo2-input').addClass('current');
          var metro_photo2_education_video = Popcorn.youtube('#ad-metro-photo2-input-education_video', 'http://www.youtube.com/watch?v=WbCauaAH6AQ&controls=0&rel=0&showinfo=0');

          // 'Continue' buttons.
          $('#ad-metro-photo2-input .continue').click(function() {
            $('#ad-metro-photo2-input').removeClass('current');
            $('#video-overlay').removeClass('active');
            $('#video-controls').fadeIn();
            metro_photo2_education_video.destroy();
            video.play();
          });
        }
      })

      // INPUT: achievement
      .code({
        start: '14.90',
        onStart: function(options){
        $('#video-controls').fadeOut(); // TODO: Make a function that generalizes the commands here.
          video.pause();
          $('#video-overlay').addClass('active');
          $('#ad-metro-achievement-input').addClass('current');
          var metro_achievement_education_video = Popcorn.youtube('#ad-metro-achievement-input-education_video', 'http://www.youtube.com/watch?v=WiqWpTuse18&controls=0&rel=0&showinfo=0');

          // 'Continue' buttons.
          $('#ad-metro-achievement-input .continue').click(function() {
            $('#ad-metro-achievement-input').removeClass('current');
            $('#video-overlay').removeClass('active');
            $('#video-controls').fadeIn();
            metro_achievement_education_video.destroy();
            video.play();
          });
        }
      })

      // INPUT: wrapup
      .code({
        start: '26.50',
        onStart: function(options){
        $('#video-controls').fadeOut(); // TODO: Make a function that generalizes the commands here.
          video.pause();
          $('#video-overlay').addClass('active');
          $('#ad-metro-wrapup-input').addClass('current');
          var metro_wrapup_education_video = Popcorn.youtube('#ad-metro-wrapup-input-education_video', 'http://www.youtube.com/watch?v=wNUOhEproKs&controls=0&rel=0&showinfo=0');

          // 'Continue' buttons.
          $('#ad-metro-wrapup-input .continue').click(function() {
            $('#ad-metro-wrapup-input').removeClass('current');
            $('#video-overlay').removeClass('active');
            $('#video-controls').fadeIn();
            metro_wrapup_education_video.destroy();
            video.play();
          });
        }
      });
    }
  }

  // Ad: Fit for Office?
  function play_credentials(video) {

    adPrefill('credentials');
    getFacebookPhotos('#ad-credentials-photo1-input .choices ul');
    getFacebookLikes('#ad-credentials-likes-input .choices ul');
    getFacebookPhotos('#ad-credentials-photo2-input .choices ul');
    getFacebookSlogans('#ad-credentials-wrapup-input .choices ul');
    makeChoices();

    // Hide loading screen and show controls once the video has loaded.
    video.code({
      start: '00.10', onStart: function(options){ startAd(); }
    })

    // OUTPUT: photo 1
    .code({
      start: '03.00', onStart: function(options){ $('#ad-credentials-photo1 img').addClass('active'); },
        end: '06.00',   onEnd: function(options){ $('#ad-credentials-photo1 img').removeClass('active'); }
    })

    // OUTPUT: likes
    .code({
      start: '13.00', onStart: function(options){ $('#ad-credentials-likes').addClass('active') },
        end: '18.00',   onEnd: function(options){ $('#ad-credentials-likes').removeClass('active'); }
    })

    // OUTPUT: party photo
    .code({
      start: '18.00', onStart: function(options){ $('#ad-credentials-photo2').addClass('active') },
        end: '24.00',   onEnd: function(options){ $('#ad-credentials-photo2').removeClass('active'); }
    })
    // OUTPUT: Wrapup
    .code({
      start: '27.00', onStart: function(options){ $('#ad-credentials-wrapup').addClass('active'); }
    })

    // End. Pause video.
    .code({
      start: '31.00',
      onStart: function(options){
        video.pause();
        $('#video-controls').hide();
        $('#postroll').show();
        $('#postroll #watch-ad').click(function(){
          video.currentTime(0);
          $('#ad-credentials-wrapup').removeClass('active');          
          $('#postroll').hide();
          video.play();
          var showInputs = false;
        });
      }
    });

    if (showInputs === true)
    {
      // INPUT: photo 1
      video.code({
        start: '02.90',
        onStart: function(options){
          $('#video-controls').fadeOut(); // TODO: Make a function that generalizes the commands here.
          video.pause();
          $('#video-overlay').addClass('active');
          $('#ad-credentials-photo1-input').addClass('current');
          var credentials_photo1_education_video = Popcorn.youtube('#ad-credentials-photo1-input-education_video', 'http://www.youtube.com/watch?v=I4mXfLSvKGY&controls=0&rel=0&showinfo=0');

          // 'Continue' buttons.
          $('#ad-credentials-photo1-input .continue').click(function() {
            $('#ad-credentials-photo1-input').removeClass('current');
            $('#video-overlay').removeClass('active');
            $('#video-controls').fadeIn();
            credentials_photo1_education_video.destroy();
            video.play();
          });
        }
      })

      // INPUT: likes
      .code({
        start: '12.90',
        onStart: function(options){
          $('#video-controls').fadeOut(); // TODO: Make a function that generalizes the commands here.
          video.pause();
          $('#video-overlay').addClass('active');
          $('#ad-credentials-likes-input').addClass('current');
          var credentials_likes_education_video = Popcorn.youtube('#ad-credentials-likes-input-education_video', 'http://www.youtube.com/watch?v=pbdzMLk9wHQ&controls=0&rel=0&showinfo=0');

          // 'Continue' buttons.
          $('#ad-credentials-likes-input .continue').click(function() {
            $('#ad-credentials-likes-input').removeClass('current');
            $('#video-overlay').removeClass('active');
            $('#video-controls').fadeIn();
            credentials_likes_education_video.destroy();
            video.play();
          });
        }
      })

      // INPUT: party photo
      .code({
        start: '17.90',
        onStart: function(options){
        $('#video-controls').fadeOut(); // TODO: Make a function that generalizes the commands here.
          video.pause();
          $('#video-overlay').addClass('active');
          $('#ad-credentials-photo2-input').addClass('current');
          var credentials_photo2_education_video = Popcorn.youtube('#ad-credentials-photo2-input-education_video', 'http://www.youtube.com/watch?v=9LyYD166ync&controls=0&rel=0&showinfo=0');

          // 'Continue' buttons.
          $('#ad-credentials-photo2-input .continue').click(function() {
            $('#ad-credentials-photo2-input').removeClass('current');
            $('#video-overlay').removeClass('active');
            $('#video-controls').fadeIn();
            credentials_photo2_education_video.destroy();
            video.play();
          });
        }
      })

      // INPUT: wrapup
      .code({
        start: '25.90',
        onStart: function(options){
        $('#video-controls').fadeOut(); // TODO: Make a function that generalizes the commands here.
          video.pause();
          $('#video-overlay').addClass('active');
          $('#ad-credentials-wrapup-input').addClass('current');

          // 'Continue' buttons.
          $('#ad-credentials-wrapup-input .continue').click(function() {
            $('#ad-credentials-wrapup-input').removeClass('current');
            $('#video-overlay').removeClass('active');
            $('#video-controls').fadeIn();
            video.play();
          });
        }
      });
    }
  }

  // Ad: character
  function play_character(video) {

    adPrefill('character');
    getFacebookPhotos('#ad-character-photo1-input .choices ul');
    getFacebookSlogans('#ad-character-quote1-input .choices ul');
    getFacebookSlogans('#ad-character-quote2-input .choices ul');
    getFacebookSlogans('#ad-character-wrapup-input .choices ul');
    makeChoices();

    // Hide loading screen and show controls once the video has loaded.
    video.code({
      start: '00.10', onStart: function(options){ startAd(); }
    })

    // OUTPUT: self-portrait
    .code({
      start: '06.50', onStart: function(options){ $('#ad-character-photo1').addClass('active'); },
        end: '15.00',   onEnd: function(options){ $('#ad-character-photo1').removeClass('active'); }
    })

    // OUTPUT: quote 1
    .code({
      start: '15.00', onStart: function(options){ $('#ad-character-quote1').addClass('active'); },
        end: '20.00',   onEnd: function(options){ $('#ad-character-quote1').removeClass('active'); }
    })

    // OUTPUT: quote 2
    .code({
      start: '20.00', onStart: function(options){ $('#ad-character-quote2').addClass('active') },
        end: '24.00',   onEnd: function(options){ $('#ad-character-quote2').removeClass('active'); }
    })

    // OUTPUT: wrapup
    .code({
      start: '28.00', onStart: function(options){ $('#ad-character-wrapup').addClass('active'); }
    })

    // End. Pause video.
    .code({
      start: '31.00',
      onStart: function(options){
        video.pause();
        $('#video-controls').hide();
        $('#postroll').show();
        $('#postroll #watch-ad').click(function(){
          video.currentTime(0);
          $('#ad-character-wrapup').removeClass('active');          
          $('#postroll').hide();
          video.play();
          var showInputs = false;
        });
      }
    });

    if (showInputs === true)
    {
      // INPUT: self-portrait
      video.code({
        start: '03.90',
        onStart: function(options){
          $('#video-controls').fadeOut(); // TODO: Make a function that generalizes the commands here.
          video.pause();
          $('#video-overlay').addClass('active');
          $('#ad-character-photo1-input').addClass('current');
          var character_photo1_education_video = Popcorn.youtube('#ad-character-photo1-input-education_video', 'http://www.youtube.com/watch?v=PmwhdDv8VrM&controls=0&rel=0&showinfo=0');

          // 'Continue' buttons.
          $('#ad-character-photo1-input .continue').click(function() {
            $('#ad-character-photo1-input').removeClass('current');
            $('#video-overlay').removeClass('active');
            $('#video-controls').fadeIn();
            character_photo1_education_video.destroy();
            video.play();
          });
        }
      })

      // INPUT: quote 1
      .code({
        start: '11.90',
        onStart: function(options){
          $('#video-controls').fadeOut(); // TODO: Make a function that generalizes the commands here.
          video.pause();
          $('#video-overlay').addClass('active');
          $('#ad-character-quote1-input').addClass('current');
          var character_quote1_education_video = Popcorn.youtube('#ad-character-quote1-input-education_video', 'http://www.youtube.com/watch?v=FNE56_GkOOY&controls=0&rel=0&showinfo=0');

          // 'Continue' buttons.
          $('#ad-character-quote1-input .continue').click(function() {
            $('#ad-character-quote1-input').removeClass('current');
            $('#video-overlay').removeClass('active');
            $('#video-controls').fadeIn();
            character_quote1_education_video.destroy();
            video.play();
          });
        }
      })

      // INPUT: quote 2
      .code({
        start: '19.75',
        onStart: function(options){
        $('#video-controls').fadeOut(); // TODO: Make a function that generalizes the commands here.
          video.pause();
          $('#video-overlay').addClass('active');
          $('#ad-character-quote2-input').addClass('current');
          var character_quote2_education_video = Popcorn.youtube('#ad-character-quote2-input-education_video', 'http://www.youtube.com/watch?v=6reQLzgywzk&controls=0&rel=0&showinfo=0');

          // 'Continue' buttons.
          $('#ad-character-quote2-input .continue').click(function() {
            $('#ad-character-quote2-input').removeClass('current');
            $('#video-overlay').removeClass('active');
            $('#video-controls').fadeIn();
            character_quote2_education_video.destroy();
            video.play();
          });
        }
      })

      // INPUT: wrapup
      .code({
        start: '26.75',
        onStart: function(options){
        $('#video-controls').fadeOut(); // TODO: Make a function that generalizes the commands here.
          video.pause();
          $('#video-overlay').addClass('active');
          $('#ad-character-wrapup-input').addClass('current');

          // 'Continue' buttons.
          $('#ad-character-wrapup-input .continue').click(function() {
            $('#ad-character-wrapup-input').removeClass('current');
            $('#video-overlay').removeClass('active');
            $('#video-controls').fadeIn();
            video.play();
          });
        }
      });
    }
  }
});

// Start building adlib object
var adlib = {
  dateCreated : Date(),
  userIP : '',
  ad : 'smalltown',
  facebookUserName : '',
  facebookUserID : '',
  choices : {}
}

// Initialize Facebook SDK.
window.fbAsyncInit = function() {
  FB.init({
    appId      : window.FB_app_ID, // App ID
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
        $('#login-logged_in strong').html(response.first_name);

        $('#login-loading').removeClass('current').addClass('completed');
        $('#login-logged_out').addClass('completed').removeClass('current');
        $('#login-logged_in').addClass('current');
      });
    }
    else if (response.status === 'not_authorized')
    {
      // User is logged in to Facebook but has not authorized our app.
      $('#login-loading').removeClass('current').addClass('completed');
      $('#login-logged_out').removeClass('completed').addClass('current');
      $('#login-logged_in').removeClass('current');
    }
    else
    {
      // User is not logged in to Facebook.
      $('#login-loading').removeClass('current').addClass('completed');
      $('#login-logged_out').removeClass('completed').addClass('current');
      $('#login-logged_in').removeClass('current');
    }
  }
}

// Immediately fill in some of the blank areas with Facebook information.
function adPrefill(ad)
{
  // Fill in the user's name everywhere.
  FB.api('/me', function(response) {
    if (typeof response !== 'undefined')
      $('.user-name').html(response.name);
  });

  // Fill in default photos.
  FB.api('/me/picture?width=300&height=300', function(response) {
    if (typeof response !== 'undefined') {
      switch(ad) {
        case 'smalltown' :
          $('#ad-smalltown-wrapup-mug').html('<img src="' + response.data.url + '" style="width: ' + response.data.width + '; height: ' + response.data.height + ';">');
          break;
        case 'metro' :
          break;
        case 'credentials' :
          break;
        case 'character' :
          break;
      }
    }
  });
} 

// Get photos of the requested type.
function getFacebookPhotos(destination)
{
  // Find the 'Profile Photos' album and get all of its photos.
  FB.api('/me/albums?limit=0', function(response){
    for (i = 0; i < response.data.length; i++) {
      if (typeof response.data[i] !== 'undefined' && typeof response.data[i].type !== 'undefined') {
        if (response.data[i].type === 'profile') {
          FB.api('/' + response.data[i].id + '/photos?limit=0', function(response) {
            if (typeof response.data !== 'undefined' && typeof response.data[0].images !== 'undefined') {
              for (i = 0; i < response.data.length; i++) {
                if (typeof response.data[i] !== 'undefined' && typeof response.data[i].images[2] !== 'undefined') {
                  $(destination).prepend('<li style="background-image: url(' + response.data[i].images[7].source + ');" id="' + response.data[i].id + '"></li>');
                }
              }
            }
          });
        }
      }
    }
  });

  // Add the 100 most recent tagged photos to the list.
  FB.api('/me/photos?limit=0', function(response) {
    if (typeof response.data !== 'undefined' && typeof response.data[0].images !== 'undefined') {
      for (i = 0; i < 100; i++) {
        if (typeof response.data[i] !== 'undefined' && typeof response.data[i].images[2] !== 'undefined') {
          $(destination).append('<li style="background-image: url(' + response.data[i].images[7].source + ');" id="' + response.data[i].id + '"></li>');
        }
      }
    }
  });
}

// Get the user's hometown, current city, and recent checkins to build a locations list.
function getFacebookLocations(destination)
{
  var hometownChoices = [];

  // Add hometown and current city to choices, if they exist.
  FB.api('/me', function(response) {
    if (typeof response.hometown !== 'undefined')
      hometownChoices.push(response.hometown.name.substr(0, response.hometown.name.indexOf(',')));

    if (typeof response.location !== 'undefined')
      hometownChoices.push(response.location.name.substr(0, response.location.name.indexOf(',')));

    // CHECK.
    // console.log('[LOCATIONS] First:');
    // console.log(hometownChoices);

    // Add unique checkins, if they exist.
    FB.api('/me/checkins', function(response) {
      // Grab all checkins.
      if (typeof response.data !== 'undefined') {
        var checkins = [];
        for (var i = 0; i < response.data.length; i++)
          checkins.push(response.data[i].place.location.city);

        // Remove duplicate names from list of checkins.
        checkinsSorted = checkins.sort();
        checkinsCleaned = [];
        for (var i = 0; i < checkinsSorted.length; i++) {
          if (checkinsSorted[i + 1] !== checkinsSorted[i])
            checkinsCleaned.push(checkinsSorted[i]);
        }

        // Add the uniqueified checkins to the hometownChoices array.
        for (var i = 0; i < checkinsCleaned.length ; i++)
          hometownChoices.push(checkinsCleaned[i]);
      }

      // CHECK.
      // console.log('[LOCATIONS] Then:');
      // console.log(hometownChoices);

      // Add default choices.
      hometownChoices.push('Anytown',
                           'Springfield',
                           'Podunk');

      // CHECK.
      // console.log('[LOCATIONS] Finally:');
      // console.log(hometownChoices);

      // Add all choices to DOM.
      for (var i = 0; i < hometownChoices.length; i++)
        $(destination).append('<li id="' + hometownChoices[i] + '">' + hometownChoices[i] + '</li>');
    });
  });
}

// Build arrays of the user's work and education history.
function getFacebookEducationAndOccupations(destination)
{
  var workChoices = [],
      schoolChoices = [];

  FB.api('/me', function(response) {
    if (typeof response !== 'undefined')
    {
      // Gather work information if it exists.
      if (typeof response.work !== 'undefined') {
        for (var i = 0; i < response.work.length; i++) {
          var workYears = '';

          // If we have both a start and end date.
          if (response.work[i].start_date !== '0000-00' && response.work[i].end_date !== '0000-00' && typeof response.work[i].start_date !== 'undefined' && typeof response.work[i].end_date !== 'undefined') {
            workYears = response.work[i].start_date.substr(0, 4) + ' to ' + response.work[i].end_date.substr(0, 4);

          // If we have a start date but no end date.
          } else if (response.work[i].start_date !== '0000-00' && typeof response.work[i].start_date !== 'undefined' && typeof response.work[i].end_date === 'undefined') {
            workYears = response.work[i].start_date.substr(0, 4);

          // If we have an end date but no start date.
          } else if (typeof response.work[i].start_date === 'undefined' && response.work[i].end_date !== '0000-00' && typeof response.work[i].end_date !== 'undefined') {
            workYears = response.work[i].end_date.substr(0, 4);

          // If we have neither start date nor end date.            
          } else if (typeof response.work[i].start_date === 'undefined' && typeof response.work[i].end_date === 'undefined') {
            workYears = '';
          }

          workChoices.push({
            employer : response.work[i].employer ? response.work[i].employer.name : '',
            position : response.work[i].position ? response.work[i].position.name : '',
            years : workYears
          });
        }
      }

      // CHECK.
      // console.log('[ACHIEVEMENTS] First:');
      // console.log(workChoices);
      // console.log(schoolChoices);

      // Gather education information if it exists.
      if (typeof response.education !== 'undefined') {
        for (var i = 0; i < response.education.length; i++) {
          var schoolYear;

          if (typeof response.education[i].year !== 'undefined')
            schoolYear = response.education[i].year.name;
          else
            schoolYear = '';

          schoolChoices.push({
            school : response.education[i].school.name,
            year : schoolYear
          });
        }
      }

      // CHECK.
      // console.log('[ACHIEVEMENTS] Then:');
      // console.log(workChoices);
      // console.log(schoolChoices);

      // Add default choices.
      workChoices.push({ employer : 'The Old Steel Mill',
                         position : 'Foreman',
                         years : '1902-2002'},
                       { employer : 'World Charity',
                         position : 'Director',
                         years : '1984-1996'});

      schoolChoices.push({ school : 'School of Hard Knocks',
                           year : '1912' },
                         { school : 'Daydream Academy',
                           year : '2012'});

      // CHECK.
      // console.log('[ACHIEVEMENTS] Finally:');
      // console.log(workChoices);
      // console.log(schoolChoices);
    }

    // Add all choices to DOM.
    for (var i = 0; i < workChoices.length; i++)
    {
      var workString = '<li>';

      if (workChoices[i].position !== '')
        workString += workChoices[i].position;
      if (workChoices[i].position !== '' && workChoices[i].employer !== '')
        workString += ' at ';
      if (workChoices[i].employer !== '')
        workString += workChoices[i].employer;
      if (workChoices[i].years !== '')
        workString += ', ' + workChoices[i].years;

      workString += '</li>';

      $(destination).append(workString);      
    }

    for (var i = 0; i < schoolChoices.length; i++)
    {
      var schoolString = '<li>' + schoolChoices[i].school;

      if (schoolChoices[i].year !== '')
        schoolString += ', ' + schoolChoices[i].year;
      
      schoolString += '</li>';

      $(destination).append(schoolString);
    }
  });
}

// Combine the user's bio and recent status updates to form a list of slogans.
function getFacebookSlogans(destination)
{
  sloganChoices = [];

  // Get the user's bio if it exists.
  FB.api('/me', function(response) {
    if (typeof response.bio !== 'undefined')
      sloganChoices.push(response.bio);

    // CHECK.
    // console.log('[SLOGANS] First:');
    // console.log(sloganChoices);
  });
  
  // Gather status messages if they exist.
  FB.api('/me/statuses', function(response) {
    if (typeof response.data !== 'undefined') {
      for (var i = 0; i < response.data.length; i++) {
        // Exclude any status that contains a link.
        if (response.data[i].message.indexOf('http') === -1)
        {
          // Include only the first sentence.
          if (response.data[i].message.indexOf('. ') !== -1)
            sloganChoices.push(response.data[i].message.substr(0, response.data[i].message.indexOf('. ') + 1));
          else
            sloganChoices.push(response.data[i].message);
        }
      }
    }

    // CHECK.
    // console.log('[SLOGANS] THEN:');
    // console.log(sloganChoices);

    // Add default choices.
    sloganChoices.push('It could be worse!',
                       'I&rsquo;m not technically a criminal!',
                       'You know you love me.')

    // CHECK.
    // console.log('[SLOGANS] FINALLY:');
    // console.log(sloganChoices);

    // Add all choices to DOM.
    for (var i = 0; i < sloganChoices.length; i++) {
      $(destination).append('<li>' + sloganChoices[i] + '</li>');
    }
  });
}

function getFacebookLikes(destination)
{
  var likesChoices = [];

  // Add the user's most recent Likes to choices, if they exist.
  FB.api('/me/likes', function(response) {
    if (typeof response.data !== 'undefined') {
      for (var i = 0; i < response.data.length; i++)
        likesChoices.push(response.data[i].name);
    }
    
    // CHECK.
    // console.log('[LIKES] First:');
    // console.log(likesChoices);

    // Add default choices.
    likesChoices.push('Kittens',
                      'Puppies',
                      'Dictators',
                      'Sunburns');

    // CHECK.
    // console.log('[LIKES] Finally:');
    // console.log(likesChoices)

    // Add all choices to DOM.
    for (var i = 0; i < likesChoices.length; i++)
      $(destination).append('<li id="' + likesChoices[i] + '">' + likesChoices[i] + '</li>');
  });
}

// Handle choice-clicking and deciding for choices.
function makeChoices() {
  // One selection.
  $('.choices.single').on('click', 'li', function() {
    var parent = '#' + $(this).parents('.input').attr('id');

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
      chosen.parents('.input').children('.continue')
        .addClass('active')
        .click(function() {
          var type, content, destination;
          // Set the type of content we're delivering and the content itself.
          if ($(this).siblings('.choices').hasClass('photos')) {
            type = 'photo';
            content = chosen.attr('id');
          }
          else if ($(this).siblings('.choices').hasClass('text')) {
            type = 'text';
            content = chosen.html();
          }

          // Determine the destination of this content. We do this by removing the '-input' from the ID string of the containing div, because the destination element shares its root name.
          destination = $(this).parents('.input').attr('id').substr(0, $(this).parents('.input').attr('id').indexOf('-input'));
  
          // Deliver it!
          setContent(type, destination, content);
        }
      );
    }
  });

  // Two selections.
  var selections = [];

  $('.choices.double').on('click', 'li', function() {
    var parent = '#' + $(this).parents('.input').attr('id');
    var chosen = $(this);

    // Selections: manage the visible bank and hidden array thereof. If there are two choices already, kill the oldest and add the newewst. Otherwise, just add the new.
    if ($(parent + ' .chosen_choices ul li').length === 2) {
      // Remove the second most recently chosen element from the chosen choices bank and the array.
      $(parent + ' .chosen_choices ul li:last-child').remove();

      // Append the new choice to the front of the array and remove the last element.
      selections.unshift(chosen.html());
      selections.pop();

      // Prepend the new choice to the chosen choices bank.
      $(parent + ' .chosen_choices ul').prepend('<li>' + chosen.html() + '</li>');
    } else {
      // Append the new choice to the front of the array
      selections.unshift(chosen.html());

      // Prepend the new choice to the chosen choices bank.      
      $(parent + ' .chosen_choices ul').prepend('<li>' + chosen.html() + '</li>');
    }

    // Remove the oldest choice from being selected at all if there are two selections aready.
    if ($(parent + ' .choices li.selected').length === 2)
      $(parent + ' .choices li.selected.secondChoice').removeClass('secondChoice firstChoice selected').addClass('unselected');

    // Move the second-most-recent selection to the second-choice spot if there is one or more selection made.
    if ($(parent + ' .choices li.selected').length > 0)
      $(parent + ' .choices li.selected.firstChoice').addClass('secondChoice').removeClass('firstChoice unselected');

    // Mark the new selection as selected and move it to the first-choice spot.
    $(chosen).removeClass('selected').addClass('selected firstChoice');

    // If two selections have been made.
    if (selections.length === 2)
    {
      // Show 'Continue' button, save the selected choice, and continue with slideshow.
      chosen.parents('.input').children('.continue')
        .addClass('active')
        .click(function() {
          // We're delivering Likes. These likes.
          var type = 'likes';
          var content = selections;
          
          // Determine the destination of this content. We do this by removing the '-input' from the ID string of the containing div, because the destination element shares its root name.
          var destination = $(this).parents('.input').attr('id').substr(0, $(this).parents('.input').attr('id').indexOf('-input'));
  
          // Deliver it!
          setContent(type, destination, content);
        }
      );
    }
  });
}


// Polyfill for css photo filters

var imgPolyFill = false;

if (!$('html').hasClass('cssfilters')){
  imgPolyFill = true;
}


function filterize(id){  
  if(imgPolyFill){
    $('<div class="photoFilter"></div>').appendTo(id);
  }
}


// Insert custom content into the ad.
function setContent(type, destination, content) {

  var schoolName,
      schoolYear;

  // Special cases.
  if (destination === 'ad-smalltown-hometown') {
    $('#ad-smalltown-hometown-name').html(content);
  }
  else if (destination === 'ad-smalltown-diploma') {
    schoolName = content;
    if (content.indexOf('at ') !== -1)
      schoolName = schoolName.substr(schoolName.indexOf('at ') + 3);
    if (content.indexOf(', ') !== -1)
    {
      schoolName = schoolName.substr(0, schoolName.indexOf(', '));
      schoolYear = content.substr(content.indexOf(', ') + 2);
    }
    $('#ad-smalltown-diploma-school').html(schoolName);
    $('#ad-smalltown-diploma-year').html(schoolYear);
  }
  else if (destination === 'ad-smalltown-wrapup') {
    $('#ad-smalltown-wrapup-slogan').html(content);
  }
  else if (destination === 'ad-metro-achievement') {
    schoolName = content;
    if (content.indexOf('at ') !== -1)
      schoolName = schoolName.substr(schoolName.indexOf('at ') + 3);
    if (content.indexOf(', ') !== -1)
    {
      schoolName = schoolName.substr(0, schoolName.indexOf(', '));
      schoolYear = content.substr(content.indexOf(', ') + 2);
    }
    $('#ad-metro-achievement-school').html(schoolName);
    $('#ad-metro-achievement-year').html(schoolYear);
  }
  else if (destination === 'ad-metro-wrapup') {
    $('#ad-metro-wrapup-slogan').html(content);
  }
  else if (destination === 'ad-credentials-likes')
  {
    $('#ad-credentials-like1').html(content[0]);
    $('#ad-credentials-like2').html(content[1]);
  }
  else
  {
    if (type === 'photo')
    {
      FB.api('http://graph.facebook.com/' + content, function(response) {
        if (typeof response.images !== 'undefined') {
          $('#' + destination).html('<img class="mug filter" src="' + response.images[1].source + '">');
          filterize('#' + destination);
        }
          
      });
    }
    else if (type === 'text')
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