$(document).ready(function(){

  // Poster.
  $('#poster').click(function(){
  	pop.play();
  	$('#poster .vote_for_you').addClass('gone');
  	$('#poster').fadeOut('fast');
  	$('nav').fadeIn('fast');
  	$('.stars_top').addClass('goodbye');
  })

  // Controls
  $('#pause').click(function(){ pop.pause(); });
  $('#play').click(function(){ pop.play(); });
  $('#mute').click(function(){ pop.mute(); });
  $('#unmute').click(function(){ pop.unmute(); });

	// Create a popcorn instance by calling Popcorn("#id-of-my-video")
	var pop = Popcorn("#video");

    // Show the banner and pause the movie using the code plugin
    // http://popcornjs.org/popcorn-docs/plugins/#Code
    pop.code({
    	start: 8,
    	onStart: function( options ) {
            pop.pause();
            $('#overlay').fadeIn('fast');
            $('#input').fadeIn('fast');
        }
    })

    // Google Map Plugin
    .googlemap({
    	start: .25,
    	end: 50,
    	type: "SATELLITE",
    	target: "map",
    	location: "Honolulu, HI",
    	zoom: 5
    })
    // Show and hide the map
    .code({
    	start: .25,
    	onStart: function( options ) {
          // $('#map').show();
        },
        end: 50,
        onEnd: function( options ) {
          // $('#map').hide();
        }
    })

    // Subtitle plugin
    .subtitle({
  		start: 10,
  		end: 26,
  		target: "subtitle",
  		text: "This is an amazing subtitle"
    })

    .subtitle({
  		start: 27,
  		end: 37,
  		target: "subtitle",
  		text: "LIES LIES LIES"
    })

    // 'Pinpoint' link.
    $('li.map').click(function(){
      $('#input .choices li').addClass('not_chosen')
      $(this).removeClass('not_chosen').addClass('chosen')
      $('#input').addClass('clicked');
    	$('#okay').fadeIn('fast');
    	$('#no').fadeIn('fast');
    	$('#map').fadeIn('fast');
    })

    // 'Continue' link to resume video and hide input banner.
    $('#okay').click(function(){
    	pop.play();
    	$('#overlay').fadeOut('fast');
    	$('#input').fadeOut('fast');
    	$('#map').fadeOut('fast');
    	$('#okay').fadeOut('fast');
    	$('#no').fadeOut('fast');
    })

    // Play the video right away.
    // pop.play();

});