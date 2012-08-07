<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<title>Facebook Test</title>
<style>
body
{
  font-family: 'Helvetica Neue';
  font-size: 16px;
  height: 1200px;
  width: 900px;
}

th
{
  text-align: left;
  padding-right: 2em;
}

#info,
#photos
{
  margin: 2em 0;
}

#photos ul
{
  list-style: none;
  margin: 0;
  padding: 0;
}

#photos ul li
{
  float: left;
  width: 130px;
  height: 130px;
  padding: 10px;
}

#photos img
{
  cursor: pointer !important;
  opacity: .85;
  -webkit-transition: all .2s ease-in-out;
  -moz-transition: all .2s ease-in-out;
  -o-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

#photos img.unselected
{
  opacity: .5;
}

#photos img:hover,
#photos img.selected
{
  opacity: 1;
}
</style>
</head>
<body>

<div id="fb-root"></div>
<script>
// Initialize SDK.
window.fbAsyncInit = function() {
  FB.init({
    appId      : '461888813829980', // App ID
    channelUrl : 'channel.php', // Channel File
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  });

  // Check login.
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected')
    {
      // User is logged in to Facebook and has authenticated our app.
      var uid = response.authResponse.userID;
      var accessToken = response.authResponse.accessToken;

      // Hide the login button.
      $('.fb-login-button').hide();

      // Say hello.
      FB.api('/me', function(response) {
        $('h1').html('Hello ' + response.name + '!');
      });

      // Execute data retrieval.
      getFacebookData();
    }
    else if (response.status === 'not_authorized')
    {
      // User is logged in to Facebook but has not authorized our app.
      $('.fb-login-button').show();
    }
    else
    {
      // User is not logged in to Facebook.
      $('.fb-login-button').show();
    }
  });
}

function getFacebookData()
{
  // Basic information
  FB.api('/me', function(response) {

    // Copy basic user information into an object.
    var user_information = new Object();
    user_information.uid = response.id;
    user_information.name = response.name;
    user_information.first_name = response.first_name;
    user_information.last_name = response.last_name;
    user_information.birthday = response.birthday;

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

    // Log responses to console.
    console.log(response);
    // console.log(user_information);

    // Output all variables.
    var info_output = '<table>';
    for (property in user_information) {
      info_output += '<tr><th>' + property + '</th><td>' + user_information[property]+'</td></tr>';
    }
    info_output += '</table>';
    $('#info').html(info_output);

  });

  // Statuses
  FB.api('/me/posts', function(response) {
    // console.log(response);
  });

  // Likes
  FB.api('/me/likes', function(response) {
    // console.log(response);
  });

  // Achievements
  FB.api('/me/achievements', function(response) {
    // console.log(response);
  });

  // Photos
  FB.api('/me/photos', function(response) {
		if (response.data && response.data[0].images) {
			for (i = 0; i <= 25; i++) {
				if (response.data[i] && response.data[i].images[2]) {
					$('#photos ul').append( '<li><img src="' + response.data[i].images[6].source + '" id="' + response.data[i].id + '"></li>' );
				}
			}
		}
		console.log(response);

		// Photo Chooser
    $('#photos img').click(function() {
      //
      if ($(this).hasClass('selected'))
      {
        $('#photos img').removeClass('selected');
        $('#photos img').removeClass('unselected');
      } else {
        $('#photos img').removeClass('selected');
        $('#photos img').addClass('unselected');
        $(this).removeClass('unselected').addClass('selected');
        getSelectedPhoto($(this).attr('id'));
      }
    });

    function getSelectedPhoto(photoID) {
      FB.api('http://graph.facebook.com/' + photoID, function(response) {
        console.log(response);
        if (response.images) {
          $('#selected_photo').html('<img src="' + response.images[1].source + '">');
        }
      });
    }
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

<div class="fb-login-button" scope="user_about_me,
                                    user_activities,
                                    user_birthday,
                                    user_education_history,
                                    user_groups,
                                    user_hometown,
                                    user_interests,
                                    user_photos,
                                    user_likes,
                                    user_status,
                                    user_work_history">
  Login with Facebook
</div>

<h1>Hello<strong>&hellip;</strong></h1>

<div id="info"></div>

<div id="photos">
<ul>
</ul>
</div>

<div id="selected_photo"></div>

</body>
</html>

<script>
// Out of sight, out of mind.

// Albums
//   for (var i = 0; i < response.data.length; i++) {
//   var album = response.data[i];
//   if (album.name == 'Profile Pictures')
//   {
//     FB.api('/'+album.id+'/photos', function(photos){
//       if (photos && photos.data && photos.data.length){
//         for (var j=0; j<photos.data.length; j++){
//           var photo = photos.data[j];
//           // photo.picture contain the link to picture
//           var image = document.createElement('img');
//           image.src = photo.picture;
//           document.body.appendChild(img);
//         }
//       }
//     });
//
//     break;
//   }
// }
</script>