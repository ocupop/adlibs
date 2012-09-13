$(document).ready(function() {

  // Ad Libs template settings.
  var ad_lib_template_settings = {
    'test'        : { 'template_video_youtube_ID' :   'TYdcsq4Z5p0',
                      'inputs'                    : { 'photo1'               : { 'type' : 'photo',       'start' : '02.00', 'end' : '05.00', 'educational_video_youtube_ID' : '' }
                                                    }
                    },
    'smalltown'   : { 'template_video_youtube_ID' :   'RspONMMMMT8',
                      'inputs'                    : { 'old_photo'            : { 'type' : 'photo',       'start' : '05.25', 'end' : '08.00', 'educational_video_youtube_ID' : 'rPSJJwZUmik'},
                                                      'hometown'             : { 'type' : 'location',    'start' : '09.00', 'end' : '14.25', 'educational_video_youtube_ID' : ''},
                                                      'diploma'              : { 'type' : 'achievement', 'start' : '17.55', 'end' : '24.00', 'educational_video_youtube_ID' : 'WiqWpTuse18'},
                                                      'wrapup'               : { 'type' : 'slogan',      'start' : '30.10', 'end' : '',      'educational_video_youtube_ID' : 'va5Btg4kkUE'},
                                                      'wrapup_photo'         : { 'type' : 'output_only', 'start' : '34.00', 'end' : '',      'educational_video_youtube_ID' : ''}
                                                    }
                    },
    'metro'       : { 'template_video_youtube_ID' :   'W96BDbjxw0c',
                      'inputs'                    : { 'old_photo'            : { 'type' : 'photo',       'start' : '04.25', 'end' : '09.00', 'educational_video_youtube_ID' : 'L1N1fYDq26k'},
                                                      'hardship_photo'       : { 'type' : 'photo',       'start' : '12.00', 'end' : '13.00', 'educational_video_youtube_ID' : 'WbCauaAH6AQ'},
                                                      'trophy'               : { 'type' : 'achievement', 'start' : '15.00', 'end' : '18.00', 'educational_video_youtube_ID' : 'WiqWpTuse18'},
                                                      'wrapup'               : { 'type' : 'slogan',      'start' : '26.00', 'end' : '',      'educational_video_youtube_ID' : 'wNUOhEproKs'},
                                                      'wrapup_photo'         : { 'type' : 'output_only', 'start' : '31.00', 'end' : '',      'educational_video_youtube_ID' : ''}
                                                    }
                    },
    'credentials' : { 'template_video_youtube_ID' :   'ibjuY3_UQJ0',
                      'inputs'                    : { 'photo'                : { 'type' : 'photo',       'start' : '03.00', 'end' : '06.00', 'educational_video_youtube_ID' : 'I4mXfLSvKGY'},
                                                      'likes'                : { 'type' : 'likes',       'start' : '13.00', 'end' : '18.00', 'educational_video_youtube_ID' : 'pbdzMLk9wHQ'},
                                                      'party_photo'          : { 'type' : 'photo',       'start' : '18.00', 'end' : '24.00', 'educational_video_youtube_ID' : '9LyYD166ync'},
                                                      'wrapup'               : { 'type' : 'slogan',      'start' : '27.00', 'end' : '',      'educational_video_youtube_ID' : ''},
                                                    }
                    },
    'character'   : { 'template_video_youtube_ID' :   'r9uO6x0Q8bc',
                      'inputs'                    : { 'photo'                : { 'type' : 'photo',       'start' : '06.50', 'end' : '15.00', 'educational_video_youtube_ID' : 'PmwhdDv8VrM'},
                                                      'out_of_context_quote' : { 'type' : 'slogan',      'start' : '15.00', 'end' : '20.00', 'educational_video_youtube_ID' : 'FNE56_GkOOY'},
                                                      'incriminating_quote'  : { 'type' : 'slogan',      'start' : '20.00', 'end' : '24.00', 'educational_video_youtube_ID' : '6reQLzgywzk'},
                                                      'wrapup'               : { 'type' : 'slogan',      'start' : '28.00', 'end' : '',      'educational_video_youtube_ID' : ''},
                                                    }
                    }
  };

  // Show intro slides. Load the title card and then the ad chooser on top of the background image.
  setTimeout(function() { show_element($('#video-intro')) }, 1500);
  setTimeout(function() { show_element($('#video-chooser')) }, 2000);

  // Tagline blank-line ad-type cycler
  $('#video_type_cycle').cycle({
    speed: 'fast',
    timeout: 1500,
    startingSlide: 0
  });

  // Log in.
  $('#login-logged_in').click(function() {
    hide_element($('#video-intro'));
  });

  // Choose an ad category.
  $('.video_type_category').click(function() {
    $('.video_type_category').removeClass('chosen').addClass('not_chosen');
    $(this).removeClass('not_chosen').addClass('chosen');
  });

  // Choose an ad and play it.
  $('.video_type.clickable').click(function() {
    // Highlight the chosen ad, un-highlight the not-chosen ads.
    $('.video_type').removeClass('chosen clickable').addClass('not_chosen');
    $(this).addClass('chosen');

    // Determine the ID chosen.
    ad = $(this).attr('id').substr(11);
    
    // Hide pin and crest.
    setTimeout(function() {
      $('.video-decor-crest').addClass('gone');
      $('.video-decor-pin').addClass('gone');
    }, 2000);

    // Pause the cycler on the right ad
    $('#video_type_cycle').cycle($('#video_type_cycle em.' + ad).index()).cycle('pause');

    // Hide ad-chooser and show loading screen.
    hide_element($('#video-chooser'));
    show_element($('#video-loading'));

    // Show video inputs and outputs.
    $('#ad-' + ad).show();

    // Load controls.
    $('#play_pause').click(function()  {
      $(this).hasClass('playing') ? video.pause() : video.play(),  
      $(this).toggleClass('playing');
    });

    $('#mute').click(function() {
      $(this).hasClass('muted') ? video.unmute() : video.mute(),  
      $(this).toggleClass('muted');
    });

    // Pre-fill user's name and profile photo where appropriate.
    prefill_ad_outputs(ad);

    // If watching another user's ad, simply fetch the data and play the video.
    if (window.playback_mode === 'watch')
      add_custom_content_to_ad(window.facebookData);

    // Fetch the ad and play it.
    var video = Popcorn.youtube( '#video', 'http://www.youtube.com/watch?v=' + ad_lib_template_settings[ad]['template_video_youtube_ID'] + '&controls=0&rel=0&showinfo=0&modestbranding=1' );

    // Once the video is playable, play it.
    video.on('canplay', function(){
      log('Video is now playing.');

      video.play();

      // Reveal the ad a tenth of a second after it has fully loaded
      video.code({ start: '00.10',
                   onStart: function(options) {
                     hide_element($('#video-loading'));
                     $('#video-mask').addClass('transparent'); // Allow the video to show through the back of the mask.
                     $('#video-controls').fadeIn();
                   }
                 });

      // Insert commands for showing and hiding inputs and outputs as well as input opportunities.
      $.each(ad_lib_template_settings[ad]['inputs'], function(input, parameters) {

        // Depending on the type of input, populate the choices with content from Facebook.
        switch(parameters['type']) {
          case 'photo'       : get_facebook_photos_as_choices(ad, input);                                break;
          case 'location'    : get_facebook_locations_as_choices(ad, input);                             break;
          case 'achievement' : get_facebook_education_and_occupations_as_achievement_choices(ad, input); break;
          case 'slogan'      : get_facebook_bio_and_statuses_as_choices(ad, input);                      break;
          case 'likes'       : get_facebook_likes_as_choices(ad, input);                                 break;
        }

        // Add Popcorn code to video object
        // set up functions to just show and when those are called they show things depending on the window variable so it's not contained here.
        video.code({ start: parameters['start'] - .05, onStart: function(options) { show_ad_input_opportunity(ad, input); interrupt_ad(video, ad, input); },
                       end: parameters['end'],           onEnd: function(options) { hide_ad_input_opportunity(ad, input) } })
             .code({ start: parameters['start'],       onStart: function(options) { show_ad_output(ad, input) },
                       end: parameters['end'],           onEnd: function(options) { hide_ad_output(ad, input) } });
      });

      // End the video before YouTube does.
      video.code({   start: video.duration() - .5,     onStart: function(options) { end_ad(video, ad); } });

      // Process input interaction.
      handle_choice_clicking_and_deciding(ad);
    });
  });

  // Pause the ad and show an input, then process the output and resume the ad.
  function interrupt_ad(video, ad, input) {
    if (window.playback_mode === 'create') {
      // Construct input and output element IDs.
      var output_container = '#ad-' + ad + '-' + input,
          input_container = '#ad-' + ad + '-' + input + '-input';

      // Pause the video.
      video.pause();

      // Show overlay and hide controls.
      show_element($('#video-overlay'));
      $('#video-controls').fadeOut();

      // Show the input.
      show_element($(input_container));

      // Load the education video, if there is one for this input.
      if (education_youtube_videos[ad + '-' + input] !== '')
        var education_video = Popcorn.youtube(input_container + '-education_video', 'http://www.youtube.com/watch?v=' + education_youtube_videos[ad + '-' + input]  + '&controls=0&rel=0&showinfo=0&modestbranding=1');

      // Resume ad with output loaded.
      $(input_container + ' .continue').click(function() {
        // Hide the input.
        hide_element($(input_container));

        // Destroy the educational video Popcorn object if it exists.
        if (typeof education_video !== 'undefined')
          education_video.destroy();

        // Hide overlay and show controls.
        hide_element($('#video-overlay'));
        $('#video-controls').fadeIn();

        // Resume playing video.
        video.play();
      });
    }
  }

  // Show 'Customize This!' button when a customizable video part appears.
  function show_ad_input_opportunity(ad, input) {
    if (window.playback_mode === 'replay')
      show_element($('#video-input_opportunity'));
  }

  // Hide the 'Customize This!' button.
  function hide_ad_input_opportunity(ad, input) {
    if (window.playback_mode === 'replay')
      hide_element($('#video-input_opportunity'));
  }

  // Show output.
  function show_ad_output(ad, output) {
    show_element($('#ad-' + ad + '-' + output));
  }

  // Hide output.
  function hide_ad_output(ad, output) {
    hide_element($('#ad-' + ad + '-' + output));
  }

  // End the ad. Hide the controls and show the post-roll.
  function end_ad(video, ad) {
    // Pause the video before YouTube can.
    video.pause();

    // Hide controls and show post-roll.
    $('#video-controls').hide();
    show_element($('#video-postroll'));

    // Action: Start Over
    $('#restart').click(function() {
      // TODO
    });

    // Action: Replay
    $('#replay').click(function() {
      // Set playback mode to replay.
      window.playback_mode = 'replay';

      // Destroy the plugins and methods on the video and restart it from the start.
      video.currentTime(0).play();

      // Hide elements we don't need.
      hide_element($('#video-postroll'));
      hide_element($('.input'));
      hide_element($('.output'));
    });

    // Action: Facebook Share
    $('#video-postroll #share').click(function() {
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
          description: 'PBS NewsHour Ad Libs',
          href: "http://apps.facebook.com/admaker/?app_data=" + btoa(JSON.stringify(testData))
        }
      });
    });
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

  FB.getLoginStatus(check_facebook_login_status);
  FB.Event.subscribe('auth.authResponseChange', check_facebook_login_status);

  // Check login.
  function check_facebook_login_status(response) {
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

        hide_element($('#login-loading'));
        hide_element($('#login-logged_out'))
        show_element($('#login-logged_in'));
      });
    }
    else if (response.status === 'not_authorized')
    {
      // User is logged in to Facebook but has not authorized our app.
      hide_element($('#login-loading'));
      hide_element($('#login-logged_in'));
      show_element($('#login-logged_out'));
    }
    else
    {
      // User is not logged in to Facebook.
      hide_element($('#login-loading'));
      hide_element($('#login-logged_in'));
      show_element($('#login-logged_out'));
    }
  }
}

function prefill_ad_outputs(ad)
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

// Get photos.
function get_facebook_photos_as_choices(ad, destination)
{
  var choices_container = '#ad-' + ad + '-' + destination + '-input .choices ul',
      output = 'ad-' + ad + '-' + destination;

  // Query all the user's albums.
  FB.api('/me/albums?limit=0', function(response) {
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
function get_facebook_locations_as_choices(ad, destination)
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
    // log('[LOCATIONS] First:');
    // log(hometownChoices);

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
      // log('[LOCATIONS] Then:');
      // log(hometownChoices);

      // Add default choices.
      hometownChoices.push('Anytown',
                           'Springfield',
                           'Podunk');

      // CHECK.
      // log('[LOCATIONS] Finally:');
      // log(hometownChoices);

      // Add all choices to DOM.
      for (var i = 0; i < hometownChoices.length; i++)
        $(choices_container).append('<li data-options=\'{"' + output + '-name":"' + hometownChoices[i] + '"}\'>' + hometownChoices[i] + '</li>');
    });
  });
}

// Build arrays of the user's work and education history.
function get_facebook_education_and_occupations_as_achievement_choices(ad, destination)
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
      // log('[ACHIEVEMENTS] First:');
      // log(workChoices);
      // log(schoolChoices);

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
      // log('[ACHIEVEMENTS] Then:');
      // log(workChoices);
      // log(schoolChoices);

      // Add default choices.
      workChoices.push({ place : 'The School of Hard Knocks',
                         role  : '',
                         year  : '1912' },
                       { place : 'Daydream Academy',
                         role  : '',
                         year  : '1999'},
                       { place : 'Old School',
                         role  : '',
                         year  : '1985'},
                       { place : 'New School',
                         role  : '',
                         year  : '2005'},
                       { place : 'The Old Steel Mill',
                         role  : 'Foreman',
                         year  : '1902 to 2002'},
                       { place : 'The Greatest Charity Foundation',
                         role  : 'Director',
                         year  : '1984 to 1996'});

      // CHECK.
      // log('[ACHIEVEMENTS] Finally:');
      // log(workChoices);
      // log(schoolChoices);
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
function get_facebook_bio_and_statuses_as_choices(ad, destination)
{
  var choices_container = '#ad-' + ad + '-' + destination + '-input .choices ul',
      output = 'ad-' + ad + '-' + destination,
      sloganChoices = [];

  // Get the user's bio if it exists.
  FB.api('/me', function(response) {
    if (typeof response.bio !== 'undefined')
      sloganChoices.push(response.bio);

    // CHECK.
    // log('[SLOGANS] First:');
    // log(sloganChoices);
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
    // log('[SLOGANS] THEN:');
    // log(sloganChoices);

    // Add default choices.
    sloganChoices.push('Values. Respect. Wisdom. Courage.',
                       'Homegrown principles, national know-how.',
                       'A President who knows the importance of family and hard work.',
                       'It could be worse.',
                       'Pick me, pick me, pick me!',
                       'I promise to be good.',
                       'You know you love me.')

    // CHECK.
    // log('[SLOGANS] FINALLY:');
    // log(sloganChoices);

    // Add all choices to DOM.
    for (var i = 0; i < sloganChoices.length; i++)
      $(choices_container).append('<li data-options=\'{"' + output + '-slogan":"' + sloganChoices[i] + '"}\'>' + sloganChoices[i] + '</li>');
  });
}

function get_facebook_likes_as_choices(ad, destination)
{
  var choices_container = '#ad-' + ad + '-' + destination + '-input .choices ul',
      output = 'ad-' + ad + '-' + destination,
      likesChoices = [];

  // Add the user's most recent Likes to choices, if they exist.
  FB.api('/me/likes', function(response) {
    if (typeof response.data !== 'undefined') {
      for (var i = 0; i < response.data.length; i++)
        likesChoices.push(response.data[i].name);
    }

    // CHECK.
    // log('[LIKES] First:');
    // log(likesChoices);

    // Add default choices.
    likesChoices.push('Kittens',
                      'Puppies',
                      'Dictators',
                      'Sunburns');

    // CHECK.
    // log('[LIKES] Finally:');
    // log(likesChoices)

    // Add all choices to DOM.
    for (var i = 0; i < likesChoices.length; i++)
      $(choices_container).append('<li data-options=\'{"' + output + '":"' + likesChoices[i] + '"}\'>' + likesChoices[i] + '</li>');
  });
}

// Handle choice-clicking and deciding for choices.
function handle_choice_clicking_and_deciding(ad) {
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
        show_element($('.continue'));
      }
    });

    // When the 'Continue' button is clicked, get the selected choice's data attribute and send it to the output.
    $(ad + ' .choices.single + .continue').click(function() {
      var data = $(this).siblings('.choices').find('ul').find('.selected').data();
      add_custom_content_to_ad(data.options);
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

            add_custom_content_to_ad(data);
          }
        );
      }
    });
  });
}


// Insert custom content into the ad.
function add_custom_content_to_ad(data) {

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
  // log(adlib);
}


// Load the SDK asynchronously.
(function(d) {
  var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement('script'); js.id = id; js.async = true;
  js.src = "//connect.facebook.net/en_US/all.js";
  ref.parentNode.insertBefore(js, ref);
}(document));


// Helpers.

function log(data) {
  console.log(data);
}

// Show and hide elements that have CSS transitions.
function show_element(element) { element.addClass('active').removeClass('inactive'); }
function hide_element(element) { element.addClass('inactive').removeClass('active'); }
