$(document).ready(function(){

  // Controls
  $('#controls').fadeIn();
  $('#pause').click(function()  { ad_biographical_metro.pause(); });
  $('#play').click(function()   { ad_biographical_metro.play(); });
  $('#mute').click(function()   { ad_biographical_metro.unmute(); });
  $('#unmute').click(function() { ad_biographical_metro.mute(); });

  // Display Overlays
  $('#ad-biographical-metro').show();

  // Fetch the ad and play it.
  var ad_biographical_metro = Popcorn.youtube( '#video', 'http://www.youtube.com/watch?v=MhP76_6dZOg&controls=0&rel=0&showinfo=0' );
  ad_biographical_metro.play()

  // Show overlay container.
  .code({
  	start: 0,
  	onStart: function( options ) {
      $('.video_bounds').show();
    }
  })

  // End. Pause video.
  .code({
  	start: 32,
  	onStart: function( options ) {
      ad_bio.pause();
    }
  })
});