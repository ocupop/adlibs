$(document).ready(function(){

  // Load controls.
  $('#controls').fadeIn();
  $('#pause').click(function()  { video.pause(); });
  $('#play').click(function()   { video.play(); });
  $('#mute').click(function()   { video.unmute(); });
  $('#unmute').click(function() { video.mute(); });

  // Start Popping Corn.
  var video = Popcorn.youtube( '#video', 'http://www.youtube.com/watch?v=qpwx1pllM4E&controls=0&rel=0&showinfo=0' );
  video.play()

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
      video.pause();
    }
  })
});