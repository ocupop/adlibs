$(document).ready(function(){

  // Controls
  $('#controls').fadeIn();
  $('#pause').click(function()  { ad_biographical_smalltown.pause(); });
  $('#play').click(function()   { ad_biographical_smalltown.play(); });
  $('#mute').click(function()   { ad_biographical_smalltown.unmute(); });
  $('#unmute').click(function() { ad_biographical_smalltown.mute(); });

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
  	start: 4.75,
  	onStart: function( options ) {
      $('#ad-biographical-smalltown-photo1 img').addClass('fx');
    },
    end: 8,
    onEnd: function( options ) {
      $('#ad-biographical-smalltown-photo1 img').removeClass('fx');
    }
  })

  // Hometown
  .code({
  	start: 9.5,
  	onStart: function( options ) {
      $('#ad-biographical-smalltown-hometown').addClass('fx');
    },
    end: 14.5,
    onEnd: function( options ) {
      $('#ad-biographical-smalltown-hometown').removeClass('fx');
    }
  })

  // Diploma
  .code({
  	start: 18,
  	onStart: function( options ) {
      $('#ad-biographical-smalltown-diploma').addClass('fx')
    },
    end: 24,
    onEnd: function( options ) {
      $('#ad-biographical-smalltown-diploma').removeClass('fx');
    }
  })

  // Wrapup
  .code({
    start: 30,
    onStart: function( options ) {
      $('#ad-biographical-smalltown-wrapup').addClass('fx');
    }
  })

  // Wrapup: photo fly-in
  .code({
  	start: 32,
  	onStart: function( options ) {
      $('#ad-biographical-smalltown-wrapup .mug img').addClass('fx');
    }
  })

  // End. Pause video.
  .code({
  	start: 35,
  	onStart: function( options ) {
      ad_biographical_smalltown.pause();
    }
  })
});