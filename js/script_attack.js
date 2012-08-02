$(document).ready(function(){

  // Controls
  $('#pause').click(function()  { ad_attack.pause(); });
  $('#play').click(function()   { ad_attack.play(); });
  $('#mute').click(function()   { ad_attack.mute(); });
  $('#unmute').click(function() { ad_attack.unmute(); });

  // Show overlay container.
  ad_attack.code({
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