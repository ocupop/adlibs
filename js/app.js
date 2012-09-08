var showInputs = true;

$(document).ready(function() {

  // Show intro slides. Load the title card and then the ad chooser on top of the background image.
  setTimeout(function() { $('#title_card').addClass('active') }, 1500);
  setTimeout(function() { $('#video_chooser').addClass('active') }, 2000);

  // Tagline blank-line ad-type cycler
  $('#video_type_cycle').cycle({
    speed: 'fast',
    timeout: 1500,
    startingSlide: 0
  });

  // Log in.
  $('#login-logged_in').click(function() {
    $('#title_card').addClass('inactive').removeClass('active');
  });

  // Choose an ad category.
  $('.video_type_category').click(function() {
    $('.video_type_category').removeClass('chosen').addClass('not_chosen');
    $(this).removeClass('not_chosen').addClass('chosen');
  });

  // Choose an ad.
  $('.video_type.clickable').click(function() {
    // Highlight the chosen ad, un-highlight the not-chosen ads.
    $('.video_type').removeClass('chosen clickable').addClass('not_chosen');
    $(this).addClass('chosen');

    // Determine the ID chosen.
    ad = $(this).attr('id').substr(11);

    // Load advertisement.
    loadAd(ad);
  });

  // YouTube video IDs
  var ad_youtube_videos =        { 'smalltown'   : 'RspONMMMMT8',
                                   'metro'       : 'q9nHUkG5dOQ',
                                   'credentials' : 'FjDXudS9GNo',
                                   'character'   : 'r9uO6x0Q8bc'
                                 };

  var education_youtube_videos = { 'smalltown-old_photo'            : 'rPSJJwZUmik',
                                   'smalltown-hometown'             : '',
                                   'smalltown-diploma'              : 'WiqWpTuse18',
                                   'smalltown-wrapup'               : 'va5Btg4kkUE',
                                   'metro-old_photo'                : 'L1N1fYDq26k',
                                   'metro-hardship_photo'           : 'WbCauaAH6AQ',
                                   'metro-trophy'                   : 'WiqWpTuse18',
                                   'metro-wrapup'                   : 'wNUOhEproKs',
                                   'credentials-photo'              : 'I4mXfLSvKGY',
                                   'credentials-likes'              : 'pbdzMLk9wHQ',
                                   'credentials-party_photo'        : '9LyYD166ync',
                                   'credentials-wrapup'             : '',
                                   'character-photo'                : 'PmwhdDv8VrM',
                                   'character-out_of_context_quote' : 'FNE56_GkOOY',
                                   'character-incriminating_quote'  : '6reQLzgywzk',
                                   'character-wrapup'               : ''
                                 };

  // Load/show the necessary elements for playing an ad.
  function loadAd(ad)
  {
    // Hide pin and crest.
    setTimeout(function() {
      $('.video-decor-crest').addClass('gone');
      $('.video-decor-pin').addClass('gone');
    }, 2000);

    // Pause the cycler on the right ad
    $('#video_type_cycle').cycle($('#video_type_cycle em.' + ad).index()).cycle('pause');

    // Hide ad-chooser.
    $('#video_chooser').addClass('inactive').removeClass('active');

    // Video loading.
    $('#video-loading').removeClass('inactive');

    // Load overlay.
    $('#ad-' + ad).show();

    // Fetch the ad and play it.
    var video = Popcorn.youtube( '#video', 'http://www.youtube.com/watch?v=' + ad_youtube_videos[ad] + '&controls=0&rel=0&showinfo=0&modestbranding=1' );
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

  // Start playing the ad. Hide the ad chooser and the loading screen and show controls.
  function startAd() {
    $('#video-loading').addClass('inactive');
    $('#video-mask').addClass('transparent'); // Allow the video to show through the back of the mask.
    $('#video-controls').fadeIn();
  }

  // Pause the ad and show an input, then process the output and resume the ad.
  function interruptAd(video, ad, input) {
    // Construct input and output element IDs.
    var output_container = '#ad-' + ad + '-' + input,
        input_container = '#ad-' + ad + '-' + input + '-input';

    // Pause the video.
    video.pause();

    // Show overlay and hide controls.
    $('#video-overlay').addClass('active');
    $('#video-controls').fadeOut();

    // Show the input.
    $(input_container).addClass('active');

    // Load the education video, if there is one for this input.
    if (education_youtube_videos[ad + '-' + input] !== '')
      var education_video = Popcorn.youtube(input_container + '-education_video', 'http://www.youtube.com/watch?v=' + education_youtube_videos[ad + '-' + input]  + '&controls=0&rel=0&showinfo=0&modestbranding=1');

    // Resume ad with output loaded.
    continueAd(video, ad, input);
  }

  // Continue playing the ad. Once the 'Continue' button has been pressed, hide the input and resume the ad.
  function continueAd(video, ad, input) {
    // Construct input element ID.
    var input_container = '#ad-' + ad + '-' + input + '-input';

    $(input_container + ' .continue').click(function() {
      // Hide the input.
      $(input_container).removeClass('active');

      // Destroy the educational video Popcorn object if it exists.
      if (typeof education_video !== 'undefined')
        education_video.destroy();

      // Hide overlay and show controls.
      $('#video-overlay').removeClass('active');
      $('#video-controls').fadeIn();

      // Resume playing video.
      video.play();
    });
  }

  // Show output.
  function showOutput(ad, output) {
    $('#ad-' + ad + '-' + output).addClass('active');
  }

  // Hide output.
  function hideOutput(ad, output) {
    $('#ad-' + ad + '-' + output).removeClass('active');
  }

  // End the ad. Hide the controls and show the post-roll.
  function endAd(video) {
    // Pause video before YouTube can.
    video.pause();

    // Hide controls and show post-roll.
    $('#video-controls').hide();
    $('#video-postroll').show();

    // Handle post-roll actions.
    $('#video-postroll #watch-ad').click(function() {
      video.currentTime(0);
      $('#ad-smalltown-wrapup').removeClass('active');
      $('#video-postroll').hide();
      video.play();
      showInputs = false;
    });
  }

  // Facebook Share button.
  $('#video-postroll #share-to-fb').click(function() {
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

  // Ad: Bio: Small-town
  function play_smalltown(video) {

    // Define ad and IO names.
    var ad = 'smalltown',
        io1 = 'old_photo',
        io2 = 'hometown',
        io3 = 'diploma',
        io4 = 'wrapup',
        io5 = 'wrapup-photo';

    // Prefill outputs.
    adPrefill(ad);

    // Gather data for outputs.
    getFacebookPhotos(ad, io1);
    getFacebookLocations(ad, io2);
    getFacebookEducationAndOccupations(ad, io3);
    getFacebookSlogans(ad, io4);

    // Process input interaction.
    makeChoices(ad);

    // Outputs.
      video.code({ start: '00.10', onStart: function(options){ startAd(); }
                 })
           .code({ start: '05.25', onStart: function(options){ showOutput(ad, io1); },
                     end: '08.00',   onEnd: function(options){ hideOutput(ad, io1); }
                 })
           .code({ start: '09.00', onStart: function(options){ showOutput(ad, io2); },
                     end: '14.25',   onEnd: function(options){ hideOutput(ad, io2); }
                 })
           .code({ start: '17.55', onStart: function(options){ showOutput(ad, io3); },
                     end: '24.00',   onEnd: function(options){ hideOutput(ad, io3); }
                 })
           .code({ start: '30.10', onStart: function(options){ showOutput(ad, io4); }
                 })
           .code({ start: '31.00', onStart: function(options){ showOutput(ad, io5); }
                 })
           .code({ start: '34.00', onStart: function(options){ endAd(video); }
                 });

    // Inputs.
    if (showInputs === true) {
      video.code({ start: '05.00', onStart: function(options){ interruptAd(video, ad, io1);  } })
           .code({ start: '08.50', onStart: function(options){ interruptAd(video, ad, io2);  } })
           .code({ start: '17.50', onStart: function(options){ interruptAd(video, ad, io3);  } })
           .code({ start: '30.00', onStart: function(options){ interruptAd(video, ad, io4);  } });
    }
  }

  // Ad: Bio: Metro
  function play_metro(video) {

    var ad = 'metro',
        io1 = 'old_photo',
        io2 = 'hardship_photo',
        io3 = 'trophy',
        io4 = 'wrapup',
        io5 = 'wrapup-photo';

    // Prefill outputs.
    adPrefill(video);

    // Gather data for outputs.
    getFacebookPhotos(ad, io1);
    getFacebookPhotos(ad, io2);
    getFacebookEducationAndOccupations(ad, io3);
    getFacebookSlogans(ad, io3);

    // Process input interaction.
    makeChoices(ad);

    // Outputs.
      video.code({ start: '00.10', onStart: function(options){ startAd(); }
                 })
           .code({ start: '04.25', onStart: function(options){ showOutput(ad, io1); },
                     end: '09.00',   onEnd: function(options){ hideOutput(ad, io1); }
                 })
           .code({ start: '12.00', onStart: function(options){ showOutput(ad, io2); },
                     end: '13.00',   onEnd: function(options){ hideOutput(ad, io2); }
                 })
           .code({ start: '15.00', onStart: function(options){ showOutput(ad, io3); },
                     end: '18.00',   onEnd: function(options){ hideOutput(ad, io3); }
                 })
           .code({ start: '26.00', onStart: function(options){ showOutput(ad, io4); }
                 })
           .code({ start: '31.00', onStart: function(options){ showOutput(ad, io5); }
                 })
           .code({ start: '31.00', onStart: function(options){ endAd(video); }
                 });

    // Inputs.
    if (showInputs === true) {
      video.code({ start: '04.00', onStart: function(options){ interruptAd(video, ad, io1);  } })
           .code({ start: '09.50', onStart: function(options){ interruptAd(video, ad, io2);  } })
           .code({ start: '14.90', onStart: function(options){ interruptAd(video, ad, io3);  } })
           .code({ start: '26.45', onStart: function(options){ interruptAd(video, ad, io4);  } });
    }
  }

  // Ad: Attack: Credentials
  function play_credentials(video) {

    var ad = 'credentials',
        io1 = 'photo',
        io2 = 'likes',
        io3 = 'party_photo',
        io4 = 'wrapup';

    // Prefill outputs.
    adPrefill(video);

    // Gather data for outputs.
    getFacebookPhotos(ad, io1);
    getFacebookLikes(ad, io2);
    getFacebookPhotos(ad, io3);
    getFacebookSlogans(ad, io4);

    // Process input interaction.
    makeChoices(ad);

    // Outputs.
      video.code({ start: '00.10', onStart: function(options){ startAd(); }
                 })
           .code({ start: '03.00', onStart: function(options){ showOutput(ad, io1); },
                     end: '06.00',   onEnd: function(options){ hideOutput(ad, io1); }
                 })
           .code({ start: '13.00', onStart: function(options){ showOutput(ad, io2); },
                     end: '18.00',   onEnd: function(options){ hideOutput(ad, io2); }
                 })
           .code({ start: '18.00', onStart: function(options){ showOutput(ad, io3); },
                     end: '24.00',   onEnd: function(options){ hideOutput(ad, io3); }
                 })
           .code({ start: '27.00', onStart: function(options){ showOutput(ad, io4); }
                 })
           .code({ start: '31.00', onStart: function(options){ endAd(video); }
                 });

    // Inputs.
    if (showInputs === true) {
      video.code({ start: '02.90', onStart: function(options){ interruptAd(video, ad, io1);  } })
           .code({ start: '12.90', onStart: function(options){ interruptAd(video, ad, io2);  } })
           .code({ start: '17.90', onStart: function(options){ interruptAd(video, ad, io3);  } })
           .code({ start: '25.90', onStart: function(options){ interruptAd(video, ad, io4);  } });
    }
  }

  // Ad: Attack: Character
  function play_character(video) {

    var ad = 'character',
        io1 = 'photo',
        io2 = 'out_of_context_quote',
        io3 = 'incriminating_quote',
        io4 = 'wrapup';

    // Prefill outputs.
    adPrefill(video);

    // Gather data for outputs.
    getFacebookPhotos(ad, io1);
    getFacebookSlogans(ad, io2);
    getFacebookSlogans(ad, io3);
    getFacebookSlogans(ad, io4);

    // Process input interaction.
    makeChoices(ad);

    // Outputs.
      video.code({ start: '00.10', onStart: function(options){ startAd(); }
                 })
           .code({ start: '06.50', onStart: function(options){ showOutput(ad, io1); },
                     end: '15.00',   onEnd: function(options){ hideOutput(ad, io1); }
                 })
           .code({ start: '15.00', onStart: function(options){ showOutput(ad, io2); },
                     end: '20.00',   onEnd: function(options){ hideOutput(ad, io2); }
                 })
           .code({ start: '20.00', onStart: function(options){ showOutput(ad, io3); },
                     end: '24.00',   onEnd: function(options){ hideOutput(ad, io3); }
                 })
           .code({ start: '28.00', onStart: function(options){ showOutput(ad, io4); }
                 })
           .code({ start: '31.00', onStart: function(options){ endAd(video); }
                 });

    // Inputs.
    if (showInputs === true) {
      video.code({ start: '03.90', onStart: function(options){ interruptAd(video, ad, io1);  } })
           .code({ start: '11.90', onStart: function(options){ interruptAd(video, ad, io2);  } })
           .code({ start: '19.75', onStart: function(options){ interruptAd(video, ad, io3);  } })
           .code({ start: '26.75', onStart: function(options){ interruptAd(video, ad, io4);  } });
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

        $('#login-loading').removeClass('active').addClass('inactive');
        $('#login-logged_out').addClass('inactive').removeClass('active');
        $('#login-logged_in').addClass('active');
      });
    }
    else if (response.status === 'not_authorized')
    {
      // User is logged in to Facebook but has not authorized our app.
      $('#login-loading').removeClass('active').addClass('inactive');
      $('#login-logged_out').removeClass('inactive').addClass('active');
      $('#login-logged_in').removeClass('active');
    }
    else
    {
      // User is not logged in to Facebook.
      $('#login-loading').removeClass('active').addClass('inactive');
      $('#login-logged_out').removeClass('inactive').addClass('active');
      $('#login-logged_in').removeClass('active');
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
          $('#ad-smalltown-wrapup-photo').html('<img src="' + response.data.url + '" style="width: ' + response.data.width + '; height: ' + response.data.height + ';">');
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
function getFacebookPhotos(ad, destination)
{
  var choices_container = '#ad-' + ad + '-' + destination + '-input .choices ul',
      output = 'ad-' + ad + '-' + destination;

  // Query all the user's albums.
  FB.api('/me/albums?limit=0', function(response){
    if (typeof response.data !== 'undefined') {
      for (i = 0; i < response.data.length; i++) {
        if (typeof response.data[i] !== 'undefined' && typeof response.data[i].type !== 'undefined') {

          // When we find the 'Profile Photos' album, get its photos.
          if (response.data[i].type === 'profile') {
            FB.api('/' + response.data[i].id + '/photos?limit=0', function(response) {
              if (typeof response.data !== 'undefined' && typeof response.data[0].images !== 'undefined') {
                for (i = 0; i < response.data.length; i++) {
                  if (typeof response.data[i] !== 'undefined') {
                    $(choices_container).prepend('<li style="background-image: url(' + response.data[i].images[7].source + ');" data-options=\'{"' + output + '":"' + response.data[i].id + '"}\'></li>');
                  }
                }
              }
            });
          }
        }
      }
    }
  });

  // Add the 100 most recent tagged photos to the list.
  FB.api('/me/photos?limit=0', function(response) {
    if (typeof response.data !== 'undefined' && typeof response.data[0].images !== 'undefined') {
      for (i = 0; i < 100; i++) {
        if (typeof response.data[i] !== 'undefined') {
          $(choices_container).append('<li style="background-image: url(' + response.data[i].images[7].source + ');" data-options=\'{"' + output + '":"' + response.data[i].id + '"}\'></li>');
        }
      }
    }
  });
}

// Get the user's hometown, current city, and recent checkins to build a locations list.
function getFacebookLocations(ad, destination)
{
  var choices_container = '#ad-' + ad + '-' + destination + '-input .choices ul',
      output = 'ad-' + ad + '-' + destination,
      hometownChoices = [];

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
        $(choices_container).append('<li data-options=\'{"' + output + '-name":"' + hometownChoices[i] + '"}\'>' + hometownChoices[i] + '</li>');
    });
  });
}

// Build arrays of the user's work and education history.
function getFacebookEducationAndOccupations(ad, destination)
{
  var choices_container = '#ad-' + ad + '-' + destination + '-input .choices ul',
      output = 'ad-' + ad + '-' + destination,
      workChoices = [],
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
            place : response.work[i].employer ? response.work[i].employer.name : '',
            role  : response.work[i].position ? response.work[i].position.name : '',
            year  : workYears
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
            place : response.education[i].school.name,
            role  : '',
            year  : schoolYear
          });
        }
      }

      // CHECK.
      // console.log('[ACHIEVEMENTS] Then:');
      // console.log(workChoices);
      // console.log(schoolChoices);

      // Add default choices.
      workChoices.push({ place : 'The Old Steel Mill',
                         role  : 'Foreman',
                         year  : '1902 to 2002'},
                       { place : 'World Charity',
                         role  : 'Director',
                         year  : '1984 to 1996'},
                       { place : 'School of Hard Knocks',
                         role  : '',
                         year  : '1912' },
                       { place : 'Daydream Academy',
                         role  : '',
                         year  : '2012'});

      // CHECK.
      // console.log('[ACHIEVEMENTS] Finally:');
      // console.log(workChoices);
      // console.log(schoolChoices);
    }

    // Add all choices to DOM.
    for (var i = 0; i < schoolChoices.length; i++)
    {
      var schoolString = '<li data-options=\'{"' + output + '-place":"' + schoolChoices[i].place + '","'
                                                 + output + '-role":"' + schoolChoices[i].role + '","'
                                                 + output + '-year":"' + schoolChoices[i].year + '"}\'>' + schoolChoices[i].place;

      if (schoolChoices[i].year !== '')
        schoolString += ', ' + schoolChoices[i].year;

      schoolString += '</li>';

      $(choices_container).prepend(schoolString);
    }

    for (var i = 0; i < workChoices.length; i++)
    {
      var workString = '<li data-options=\'{"' + output + '-place":"' + workChoices[i].place + '","'
                                               + output + '-role":"' + workChoices[i].role + '","'
                                               + output + '-year":"' + workChoices[i].year + '"}\'>';

      if (workChoices[i].role !== '')
        workString += workChoices[i].role;
      if (workChoices[i].role !== '' && workChoices[i].place !== '')
        workString += ' at ';
      if (workChoices[i].place !== '')
        workString += workChoices[i].place;
      if (workChoices[i].year !== '')
        workString += ', ' + workChoices[i].year;

      workString += '</li>';

      $(choices_container).append(workString);
    }
  });
}

// Combine the user's bio and recent status updates to form a list of slogans.
function getFacebookSlogans(ad, destination)
{
  var choices_container = '#ad-' + ad + '-' + destination + '-input .choices ul',
      output = 'ad-' + ad + '-' + destination,
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
    for (var i = 0; i < sloganChoices.length; i++)
      $(choices_container).append('<li data-options=\'{"' + output + '":"' + sloganChoices[i] + '"}\'>' + sloganChoices[i] + '</li>');
  });
}

function getFacebookLikes(ad, destination)
{
  var choices_container = '#ad-' + ad + '-' + destination + '-input .choices ul',
      likesChoices = [];

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
      $(choices_container).append('<li data-options=\'{"' + output + '":"' + likesChoices[i] + '"}\'>' + likesChoices[i] + '</li>');
  });
}

// Handle choice-clicking and deciding for choices.
function makeChoices(ad) {
  var ad = '#ad-' + ad;

  // Once all choices have been added to the DOM.
  $(ad + ' .choices li').ready(function() {
    // One selection.
    $('.choices.single').on('click', 'li', function() {
      var parent = '#' + $(this).parents('.input').attr('id');

      if ($(this).hasClass('selected')) {
        // Mark all choices neither selected nor unselected (back to zero state).
        $(parent + ' .choices li').removeClass('selected unselected');
      } else {
        // Mark all choices unselected.
        $(parent + ' .choices li').removeClass('selected').addClass('unselected');

        // Mark the clicked choice selected.
        $(this).removeClass('unselected').addClass('selected');

        // Show 'Continue' button.
        $('.continue').addClass('active')
      }
    });

    // When the 'Continue' button is clicked, get the selected choice's data attribute and send it to the output.
    $(ad + ' .choices.single + .continue').click(function() {
      var data = $(this).siblings('.choices').find('ul').find('.selected').data();
      setContent(data.options);
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
            // Assign the two choices to an array to mimic the data attributes used elsewhere.
            data = { 'ad-credentials-likes-like1' : selections[0],
                     'ad-credentials-likes-like2' : selections[1] };

            setContent(data);
          }
        );
      }
    });
  });
}

// Insert custom content into the ad.
function setContent(data) {

  // Iterate through the data object.
  $.each(data, function(destination, content) {
    // If we find the phrase 'photo' in the key, query Facebook for that image and print it.
    if (destination.indexOf('photo') !== -1) {
      FB.api('http://graph.facebook.com/' + content, function(response) {
        if (typeof response.images !== 'undefined')
          $('#' + destination).append('<img src="' + response.images[0].source + '">');
      });

    // Otherwise just fill the content with the specified text.
    } else {
      $('#' + destination).html(content);
    }

    // Add this choice to our adlib object.
    adlib['choices'][destination] = content;
  });

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