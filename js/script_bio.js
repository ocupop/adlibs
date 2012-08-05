$(document).ready(function(){

  // Controls
  $('#controls').fadeIn();
  $('#pause').click(function()  { ad_bio.play(); });
  $('#play').click(function()   { ad_bio.pause(); });
  $('#mute').click(function()   { ad_bio.unmute(); });
  $('#unmute').click(function() { ad_bio.mute(); });

  // Display Overlays
  $('#ad-bio').show();

  // Fetch the ad and play it.
  var ad_bio = Popcorn.youtube( '#video', 'http://www.youtube.com/watch?v=0N8SOd9l6so&controls=0&rel=0&showinfo=0' );
  ad_bio.play()

  // Show overlay container.
  .code({
  	start: .1,
  	onStart: function( options ) {
      $('.video_bounds').show();
    }
  })

  // Hometown
  .code({
  	start: 5,
  	onStart: function( options ) {
      $('#ad-bio-hometown').addClass('fx');
    },
    end: 7,
    onEnd: function( options ) {
      $('#ad-bio-hometown').removeClass('fx');
    }
  })

  // Photo 1
  .code({
  	start: 8,
  	onStart: function( options ) {
      $('#ad-bio-photo1 img').addClass('fx');
    },
    end: 12.5,
    onEnd: function( options ) {
      $('#ad-bio-photo1 img').removeClass('fx');
    }
  })

  // Diploma
  .code({
  	start: 15.5,
  	onStart: function( options ) {
      $('#ad-bio-diploma').addClass('fx')
    },
    end: 20,
    onEnd: function( options ) {
      $('#ad-bio-diploma').removeClass('fx');
    }
  })

  // Wrapup
  .code({
    start: 25.5,
    onStart: function( options ) {
      $('#ad-bio-wrapup').addClass('fx');
    }
  })

  // Wrapup: photo fly-in
  .code({
  	start: 26.5,
  	onStart: function( options ) {
      $('#ad-bio-wrapup .mug').addClass('fx');
    }
  })

  // End. Pause video.
  .code({
  	start: 29.9,
  	onStart: function( options ) {
      ad_bio.pause();
    }
  })
});