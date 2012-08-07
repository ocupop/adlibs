$(document).ready(function(){

  // Controls
  $('#controls').fadeIn();
  $('#pause').click(function()  { ad_bio.pause(); });
  $('#play').click(function()   { ad_bio.play(); });
  $('#mute').click(function()   { ad_attack.unmute(); });
  $('#unmute').click(function() { ad_attack.mute(); });

  // Display Overlays
  $('#ad-attack-backfire').show();

  // Fetch the ad and play it.
  var ad_attack_backfire = Popcorn.youtube( '#video', 'http://www.youtube.com/watch?v=wQlOhGZA95k&controls=0&rel=0&showinfo=0' );
  ad_attack_backfire.play()

  // Show overlay container.
  .code({
    start: 0,
    onStart: function( options ) {
      $('.video_bounds').show();
    }
  })

  // End. Pause video.
  .code({
    start: 30,
    onStart: function( options ) {
      ad_attack_backfire.pause();
    }
  })

});