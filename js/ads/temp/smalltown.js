$(document).ready(function(){

  // Load controls.
  $('#controls').fadeIn();
  $('#pause').click(function()  { video.pause(); });
  $('#play').click(function()   { video.play(); });
  $('#mute').click(function()   { video.unmute(); });
  $('#unmute').click(function() { video.mute(); });

  // Start Popping Corn.
  var video = Popcorn.youtube( '#video', 'http://www.youtube.com/watch?v=0N8SOd9l6so&controls=0&rel=0&showinfo=0' );
  video.play()

  // Show overlay container.
  .code({
  	start: 0,
  	onStart: function( options ) {
      $('#video_contents').show();
    }
  })

  // Family Photo
  .code({
  	start: 4.75,
  	onStart: function( options ) {
      $('#ad-smalltown-photo1 img').addClass('fx');
    },
    end: 8,
    onEnd: function( options ) {
      $('#ad-smalltown-photo1 img').removeClass('fx');
    }
  })

  // Hometown
  .code({
  	start: 9.5,
  	onStart: function( options ) {
      $('#ad-smalltown-hometown').addClass('fx');
    },
    end: 14.5,
    onEnd: function( options ) {
      $('#ad-smalltown-hometown').removeClass('fx');
    }
  })

  // Diploma
  .code({
  	start: 18,
  	onStart: function( options ) {
      $('#ad-smalltown-diploma').addClass('fx')
    },
    end: 24,
    onEnd: function( options ) {
      $('#ad-smalltown-diploma').removeClass('fx');
    }
  })

  // Wrapup
  .code({
    start: 30,
    onStart: function( options ) {
      $('#ad-smalltown-wrapup').addClass('fx');
    }
  })

  // Wrapup: photo fly-in
  .code({
  	start: 32,
  	onStart: function( options ) {
      $('#ad-smalltown-wrapup .mug img').addClass('fx');
    }
  })

  // End. Pause video.
  .code({
  	start: 35,
  	onStart: function( options ) {
      video.pause();
    }
  });

});