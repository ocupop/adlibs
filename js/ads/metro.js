$(document).ready(function(){

  // Start Popping Corn.
  video

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