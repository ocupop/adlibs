$(document).ready(function(){

  // Controls
  $('#controls').fadeIn();
  $('#pause').click(function()  { ad_bio.pause(); });
  $('#play').click(function()   { ad_bio.play(); });
  $('#mute').click(function()   { ad_attack.unmute(); });
  $('#unmute').click(function() { ad_attack.mute(); });

  // Display Overlays
  $('#ad-attack').show();

  // Fetch the ad and play it.
  var ad_attack = Popcorn.youtube( '#video', 'http://www.youtube.com/watch?v=-6USyIkAxBI&controls=0&rel=0&showinfo=0' );
  ad_attack.play()

  // Show overlay container.
  .code({
    start: .1,
    onStart: function( options ) {
      $('.video_bounds').show();
    }
  })

  // Photo 1
  .code({
    start: 12,
    onStart: function( options ) {
      $('#ad-attack-photo1 img').addClass('fx');
    },
    end: 15,
    onEnd: function( options ) {
      $('#ad-attack-photo1 img').removeClass('fx');
    }
  })

  // Photo 2
  .code({
    start: 15,
    onStart: function( options ) {
      $('#ad-attack-photo2 img').addClass('fx')
    },
    end: 18,
    onEnd: function( options ) {
      $('#ad-attack-photo2 img').removeClass('fx');
    }
  })

  // Photo 3 and Quote
  .code({
    start: 18,
    onStart: function( options ) {
      $('#ad-attack-quote').addClass('fx')
    },
    end: 21.5,
    onEnd: function( options ) {
      $('#ad-attack-quote').removeClass('fx');
    }
  })

  // Wrapup
  .code({
    start: 25,
    onStart: function( options ) {
      $('#ad-attack-wrapup').addClass('fx');
    }
  })

  // End. Pause video.
  .code({
    start: 29.9,
    onStart: function( options ) {
      ad_attack.pause();
    }
  })

});