$(document).ready(function(){
	
	// Create a popcorn instance by calling Popcorn("#id-of-my-video")
	var pop = Popcorn("#video");

	// add a footnote at 2 seconds, and remove it at 6 seconds
    pop.footnote({
    	start: 0,
    	end: 12,
    	text: "Nice here is an overlay",
    	target: "target"
    });

    // play the video right away
    pop.play();

}); // end doc ready