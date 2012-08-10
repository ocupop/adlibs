$(document).ready(function(){

  // Load controls.
  $('#controls').fadeIn();
  $('#pause').click(function()  { video.pause(); });
  $('#play').click(function()   { video.play(); });
  $('#mute').click(function()   { video.unmute(); });
  $('#unmute').click(function() { video.mute(); });

  // Start Popping Corn.
  var video = Popcorn.youtube( '#video', 'http://www.youtube.com/watch?v=FjDXudS9GNo&controls=0&rel=0&showinfo=0' );
  video.play()

  // Show overlay container.
  .code({
    start: 0,
    onStart: function( options ) {
      $('.video_bounds').show();
    }
  })

  // Photo 1
  .code({
    start: 12,
    onStart: function( options ) {
      $('#ad-fitforoffice-photo1 img').addClass('fx');
    },
    end: 15,
    onEnd: function( options ) {
      $('#ad-fitforoffice-photo1 img').removeClass('fx');
    }
  })

  // Photo 2
  .code({
    start: 15,
    onStart: function( options ) {
      $('#ad-fitforoffice-photo2 img').addClass('fx')
    },
    end: 18,
    onEnd: function( options ) {
      $('#ad-fitforoffice-photo2 img').removeClass('fx');
    }
  })

  // Photo 3 and Quote
  .code({
    start: 18,
    onStart: function( options ) {
      $('#ad-fitforoffice-quote').addClass('fx')
    },
    end: 21.5,
    onEnd: function( options ) {
      $('#ad-fitforoffice-quote').removeClass('fx');
    }
  })

  // Wrapup
  .code({
    start: 25,
    onStart: function( options ) {
      $('#ad-fitforoffice-wrapup').addClass('fx');
    }
  })

  // End. Pause video.
  .code({
    start: 30,
    onStart: function( options ) {
      video.pause();
    }
  })

});