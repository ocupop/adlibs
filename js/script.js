$(document).ready(function(){
	
	// Create a popcorn instance by calling Popcorn("#id-of-my-video")
	var pop = Popcorn("#video");

    // Show the banner and pause the movie using the code plugin
    // http://popcornjs.org/popcorn-docs/plugins/#Code
    pop.code({
    	start: 6.5,
    	onStart: function( options ) {
            pop.pause();
            $('#banner').fadeIn('fast');
        }
    })

    // Google Map Plugin
    .googlemap({
    	start: 10,
    	end: 15,
    	type: "SATELITE",
    	target: "map",
    	lat: 43.665429,
    	lng: -79.403323
    })

    .code({
    	start: 10,
    	onStart: function( options ) {
            $('#map').show();
        },
        end: 15,
        onEnd: function( options ) {
        	$('#map').hide();
        }
    })

    // banner continue link to resume video and hide banner
    $('a.continue').click(function(){
    	pop.play();
    	$('#banner').fadeOut('fast');
    })

    // play the video right away
    pop.play();

}); // end doc ready