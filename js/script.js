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
    	start: 8,
    	end: 15,
    	type: "SATELITE",
    	target: "map",
    	location: "Honolulu, HI",
    	zoom: 5
    })
    // Show and hide the map
    .code({
    	start: 8,
    	onStart: function( options ) {
            $('#map').show();
        },
        end: 15,
        onEnd: function( options ) {
        	$('#map').hide();
        }
    })

    // Subtitle plugin
    .subtitle({
		start: 16,
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


    // banner continue link to resume video and hide banner
    $('a.continue').click(function(){
    	pop.play();
    	$('#banner').fadeOut('fast');
    })

    // play the video right away
    pop.play();

}); // end doc ready