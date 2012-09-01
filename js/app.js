var showInputs = true;

$(document).ready(function(){

  // Show intro slides.
  setTimeout(function(){ $('#title_card').addClass('current') }, 1500);
  setTimeout(function(){ $('#ad_chooser').addClass('current') }, 2000);

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
  var youtube_video = { 'smalltown'    : 'pmPIKfjcpos',
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
    $('#playPause').click(function()  {
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
      case 'fitforoffice' :
        play_fitforoffice(video);
        break;
      case 'backfire' :
        play_backfire(video);
        break;
    }
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
    getFacebookPhotos('#ad-smalltown-photo1-choice .choices ul', 'family');
    getFacebookLocations('#ad-smalltown-hometown-choice .choices ul');
    getFacebookEducationAndOccupations('#ad-smalltown-diploma-choice .choices ul');
    getFacebookSlogans('#ad-smalltown-wrapup-choice .choices ul');
    makeChoices();

    // Load controls once video has loaded.
    video.code({
      start: '00.10',
      onStart: function(options){
        $('#video_loading').addClass('inactive');
        $('#controls').fadeIn();
      }
    })

    // OUTPUT: self-portrait
    .code({
      start: '05.30', onStart: function(options){ $('#ad-smalltown-photo1').addClass('active'); },
        end: '08.00',   onEnd: function(options){ $('#ad-smalltown-photo1').removeClass('active'); }
    })

    // OUTPUT: hometown
    .code({
      start: '09.05', onStart: function(options){ $('#ad-smalltown-hometown').addClass('active'); },
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
        $('#controls').hide();
        $('#postroll').show();
        $('#postroll #watch-ad').click(function(){
          video.currentTime( 0 );
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
        start: '05.25',
        onStart: function(options){
        $('#controls').fadeOut(); // TODO: Make a function that hides these and pauses video each time.
          video.pause();
          $('#ad-smalltown-photo1-choice').addClass('current');

          // 'Continue' buttons.
          $('.choice .continue').click(function() {
            $('#ad-smalltown-photo1-choice').removeClass('current');
            $('#controls').fadeIn();
            video.play();
          });
        }
      })

      // INPUT: hometown
      .code({
        start: '09.00',
        onStart: function(options){
        $('#controls').fadeOut(); // TODO: Make a function that hides these and pauses video each time.
          video.pause();
          $('#ad-smalltown-hometown-choice').addClass('current');

          // 'Continue' buttons.
          $('.choice .continue').click(function() {
            $('#ad-smalltown-hometown-choice').removeClass('current');
            $('#controls').fadeIn();
            video.play();
          });
        }
      })

      // INPUT: diploma
      .code({
        start: '17.50',
        onStart: function(options){
        $('#controls').fadeOut(); // TODO: Make a function that hides these and pauses video each time.
          video.pause();
          $('#ad-smalltown-diploma-choice').addClass('current');

          // 'Continue' buttons.
          $('.choice .continue').click(function() {
            $('#ad-smalltown-diploma-choice').removeClass('current');
            $('#controls').fadeIn();
            video.play();
          });
        }
      })

      // INPUT: wrapup
      .code({
        start: '30.00',
        onStart: function(options){
        $('#controls').fadeOut(); // TODO: Make a function that hides these and pauses video each time.
          video.pause();
          $('#ad-smalltown-wrapup-choice').addClass('current');

          // 'Continue' buttons.
          $('.choice .continue').click(function() {
            $('#ad-smalltown-wrapup-choice').removeClass('current');
            $('#controls').fadeIn();
            video.play();
          });
        }
      });
    }
  }

  // Ad: Metro America
  function play_metro(video) {
    // Load pre-fill content and choices.
    adPrefill('metro');

    // Load controls once video has loaded.
    video.code({
      start: '00.10',
      onStart: function(options){
        $('#video_loading').addClass('inactive');
        $('#controls').fadeIn();
      }
    })

    // End. Pause video.
    .code({
      start: '32.00',
      onStart: function(options){
        video.pause();
      }
    });
  }

  // Ad: Fit for Office?
  function play_fitforoffice(video) {
    // Load pre-fill content and choices.
    adPrefill('fitforoffice');
    getFacebookLikes('#ad-fitforoffice-likes-choice .choices ul');

    // Load controls once video has loaded.
    video.code({
      start: '00.10',
      onStart: function(options){
        $('#video_loading').addClass('inactive');
        $('#controls').fadeIn();
      }
    })

    // OUTPUT: Photo 1
    .code({
      start: '12.00', onStart: function(options){ $('#ad-fitforoffice-photo1 img').addClass('active'); },
        end: '15.00',   onEnd: function(options){ $('#ad-fitforoffice-photo1 img').removeClass('active'); }
    })

    // OUTPUT: Photo 2
    .code({
      start: '15.00', onStart: function(options){ $('#ad-fitforoffice-photo2 img').addClass('active') },
        end: '18.00',   onEnd: function(options){ $('#ad-fitforoffice-photo2 img').removeClass('active'); }
    })

    // OUTPUT: Photo 3 and Quote
    .code({
      start: '18.00', onStart: function(options){ $('#ad-fitforoffice-quote').addClass('active') },
        end: '21.50',   onEnd: function(options){ $('#ad-fitforoffice-quote').removeClass('active'); }
    })

    // OUTPUT: Wrapup
    .code({
      start: '25.00', onStart: function(options){ $('#ad-fitforoffice-wrapup').addClass('active'); }
    })

    // End. Pause video.
    .code({
      start: '30.00',
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
      start: '00.10',
      onStart: function(options){
        $('#video_loading').addClass('inactive');
        $('#controls').fadeIn();
      }
    })

    // End. Pause video.
    .code({
      start: '30.00',
      onStart: function(options){
        video.pause();
      }
    });
  }

  // Disable window scrolling when we're scrolling through choices.
  $('.choice div').bind('mousewheel DOMMouseScroll', function(e) {
    var scrollTo = null;

    if (e.type === 'mousewheel') {
      scrollTo = (e.originalEvent.wheelDelta * -1);
    }
    else if (e.type === 'DOMMouseScroll') {
      scrollTo = 20 * e.originalEvent.detail;
    }

    if (scrollTo) {
      e.preventDefault();
      $(this).scrollTop(scrollTo + $(this).scrollTop());
    }
  });
  
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
        $('#logged_in strong').html(response.first_name);

        $('#login_loading').removeClass('current').addClass('completed');
        $('#logged_out').addClass('completed').removeClass('current');
        $('#logged_in').addClass('current');
      });
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
        case 'fitforoffice' :
          break;
        case 'backfire' :
          break;
      }
    }
  });
} 

// Get photos of the requested type.
function getFacebookPhotos(destination, query)
{
  if (query === 'tagged')
  {
    FB.api('/me/photos?limit=0', function(response) {
      if (typeof response.data !== 'undefined' && typeof response.data[0].images !== 'undefined') {
        for (i = 0; i <= 50; i++) {
          if (typeof response.data[i] !== 'undefined' && typeof response.data[i].images[2] !== 'undefined') {
            $(destination).append('<li style="background-image: url(' + response.data[i].images[5].source + ');" id="' + response.data[i].id + '"></li>');
          }
        }
      }
    });
  }
  else
  {
    FB.api('/me/albums&limit=50', function(response){

      var albumID = '';
      var albumIDs = {};
      j = 0;

      // Step through albums.
      for (i = 0; i <= 50; i++) {
        if (typeof response.data[i] !== 'undefined' && typeof response.data[i].type !== 'undefined') {

          // Find the 'Profile Photos' album and display its photos.
          if (query === 'profile') {
            if (response.data[i].type === 'profile')
            {
              FB.api('/' + response.data[i].id + '/photos?limit=0', function(response) {
                if (typeof response.data !== 'undefined' && typeof response.data[0].images !== 'undefined') {
                  for (i = 0; i <= 50; i++) {
                    if (typeof response.data[i] !== 'undefined' && typeof response.data[i].images[2] !== 'undefined') {
                      $(destination).append('<li style="background-image: url(' + response.data[i].images[5].source + ');" id="' + response.data[i].id + '"></li>');
                    }
                  }
                }
              });
            }
          }

          // Find family photos by looking for album titles that contain certain keywords.
          else if (query === 'family') {
            if (response.data[i].type === 'profile' || 
                response.data[i].name.search(/baby/i) !== -1 ||
                response.data[i].name.search(/back home/i) !== -1 ||
                response.data[i].name.search(/birthday/i) !== -1 ||
                response.data[i].name.search(/christmas/i) !== -1 ||
                response.data[i].name.search(/dad/i) !== -1 ||
                response.data[i].name.search(/family/i) !== -1 ||
                response.data[i].name.search(/father/i) !== -1 ||
                response.data[i].name.search(/holiday/i) !== -1 ||
                response.data[i].name.search(/home/i) !== -1 ||
                response.data[i].name.search(/mom/i) !== -1 ||
                response.data[i].name.search(/mother/i) !== -1 ||
                response.data[i].name.search(/new year/i) !== -1 ||
                response.data[i].name.search(/parents/i) !== -1 ||
                response.data[i].name.search(/summer/i) !== -1 ||
                response.data[i].name.search(/trip/i) !== -1 ||
                response.data[i].name.search(/vacation/i) !== -1) {
              albumIDs[j] = response.data[i].id;
              j++;
            }
          }

          // Find party photos by looking for album titles that contain certain keywords.
          else if (query === 'party')
          {
            if (response.data[i].type === 'profile' || 
                response.data[i].name.search(/birthday/i) !== -1 ||
                response.data[i].name.search(/crazy/i) !== -1 ||
                response.data[i].name.search(/friends/i) !== -1 ||
                response.data[i].name.search(/holiday/i) !== -1 ||
                response.data[i].name.search(/new year/i) !== -1 ||
                response.data[i].name.search(/night/i) !== -1 ||
                response.data[i].name.search(/party/i) !== -1 ||
                response.data[i].name.search(/trip/i) !== -1 ||
                response.data[i].name.search(/vacation/i) !== -1) {
              albumIDs[j] = response.data[i].id;
              j++;
            }
          }
        }
      }
      
      if (albumIDs[0] !== -1) {
        for (i = 0; i <= 25; i++) {
          FB.api('/' + albumIDs[i] + '/photos?limit=0', function(response) {
            if (typeof response.data !== 'undefined' && typeof response.data[0].images !== 'undefined') {
              for (i = 0; i <= 50; i++) {
                if (typeof response.data[i] !== 'undefined' && typeof response.data[i].images[2] !== 'undefined') {
                  $(destination).append('<li style="background-image: url(' + response.data[i].images[5].source + ');" id="' + response.data[i].id + '"></li>');
                }
              }
            }
          });
        }
      }
    });
  }
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
  });

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
          if (typeof response.work[i].start_date !== 'undefined' &&
              typeof response.work[i].end_date !== 'undefined') {
            workYears = response.work[i].start_date.substr(0, 4) + ' to ' + response.work[i].end_date.substr(0, 4);
          } else if (typeof response.work[i].start_date !== 'undefined') {
            workYears = response.work[i].start_date.substr(0, 4);
          }

          workChoices.push({
            employer : response.work[i].employer ? response.work[i].employer.name : "",
            position : response.work[i].position ? response.work[i].position.name : "",
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
          schoolChoices.push({
            school : response.education[i].school.name,
            year : response.education[i].year.name
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
      $(destination).append('<li>' + workChoices[i].position + ' at ' + workChoices[i].employer + ', ' + workChoices[i].years + '</li>');

    for (var i = 0; i < schoolChoices.length; i++)
      $(destination).append('<li>' + schoolChoices[i].school + ', ' + schoolChoices[i].year + '</li>');
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

  // Add 25 of the user's most recent Likes to choices, if they exist.
  FB.api('/me/likes', function(response) {
    if (typeof response.data !== 'undefined') {
      for (var i = 0; i < 25; i++)
        likesChoices.push(response.data[i].name);
    }
    
    // CHECK.
    console.log('[LIKES] First:');
    console.log(likesChoices);

    // Add default choices.
    likesChoices.push('Kittens',
                      'Puppies',
                      'Dictators',
                      'Sunburns');

    // CHECK.
    console.log('[LIKES] Finally:');
    console.log(likesChoices)

    // Add all choices to DOM.
    for (var i = 0; i < likesChoices.length; i++)
      $(destination).append('<li id="' + likesChoices[i] + '">' + likesChoices[i] + '</li>');
  });
}

// Handle choice-clicking and deciding.
function makeChoices() {
  // Highlight choices.
  $('.choices').on('click', 'li', function() {
    var parent = '#' + $(this).parents('.choice').attr('id');

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
      chosen
        .parents('.choice')
        .children('.actions')
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

          // Determine the destination of this content. We do this by removing the '-choice' from the ID string of the containing div, because the destination element shares its root name.
          destination = $(this).parents('.choice').attr('id').substr(0, $(this).parents('.choice').attr('id').indexOf('-choice'));
  
          // Deliver it!
          setContent(type, destination, content);
        });
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

  // Special cases.
  if (destination === 'ad-smalltown-hometown') {
    $('#ad-smalltown-hometown-name span').html(content);
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
    $('#ad-smalltown-diploma-year').html('~' + schoolYear + '~');
  }
  else if (destination === 'ad-smalltown-wrapup') {
    $('#ad-smalltown-wrapup-slogan').html(content);
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
