$(document).ready(function(){

  // Controls
  $('#controls').fadeIn();
  $('#pause').click(function()  { ad_bio.pause(); });
  $('#play').click(function()   { ad_bio.play(); });
  $('#mute').click(function()   { ad_bio.unmute(); });
  $('#unmute').click(function() { ad_bio.mute(); });

  // Display Overlays
  $('#ad-biographical-smalltown').show();

  // Fetch the ad and play it.
  var ad_biographical_smalltown = Popcorn.youtube( '#video', 'http://www.youtube.com/watch?v=0N8SOd9l6so&controls=0&rel=0&showinfo=0' );
  ad_biographical_smalltown.play()

  // Show overlay container.
  .code({
  	start: 0,
  	onStart: function( options ) {
      $('.video_bounds').show();
    }
  })

  // Family Photo
  .code({
  	start: 8,
  	onStart: function( options ) {
      $('#ad-biographical-smalltown-photo1 img').addClass('fx');
    },
    end: 12.5,
    onEnd: function( options ) {
      $('#ad-biographical-smalltown-photo1 img').removeClass('fx');
    }
  })

  // Hometown
  .code({
  	start: 5,
  	onStart: function( options ) {
      $('#ad-biographical-smalltown-hometown').addClass('fx');
    },
    end: 7,
    onEnd: function( options ) {
      $('#ad-biographical-smalltown-hometown').removeClass('fx');
    }
  })

  // Diploma
  .code({
  	start: 15.5,
  	onStart: function( options ) {
      $('#ad-biographical-smalltown-diploma').addClass('fx')
    },
    end: 20,
    onEnd: function( options ) {
      $('#ad-biographical-smalltown-diploma').removeClass('fx');
    }
  })

  // Wrapup
  .code({
    start: 25.5,
    onStart: function( options ) {
      $('#ad-biographical-smalltown-wrapup').addClass('fx');
    }
  })

  // Wrapup: photo fly-in
  .code({
  	start: 26.5,
  	onStart: function( options ) {
      $('#ad-biographical-smalltown-wrapup .mug').addClass('fx');
    }
  })

  // End. Pause video.
  .code({
  	start: 29.9,
  	onStart: function( options ) {
      ad_biographical_smalltown.pause();
    }
  })
});