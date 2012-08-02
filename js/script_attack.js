$(document).ready(function(){



  // Poster.
  $('#poster').click(function(){
  	pop.play();
  	$('#poster .vote_for_you').addClass('gone');
  	$('#poster').fadeOut('fast');
  	//$('nav').fadeIn('fast');
  	//$('.stars_top').addClass('goodbye');
  })

	// Create a popcorn instance by calling Popcorn("#id-of-my-video")
    var pop = Popcorn.youtube(
           '#video',
           'http://www.youtube.com/watch?v=-6USyIkAxBI&controls=0&rel=0' );


   // Show Overlay Container
   pop.code({
   	start: .1,
   	onStart: function( options ) {
       $('.video_bounds').show();
    }
   })

     // Photo 1
     .code({
     	start: 12,
     	onStart: function( options ) {
           $('#photo1 img').addClass('fx');
         },
         end: 15,
         onEnd: function( options ) {
           $('#photo1 img').removeClass('fx');
         }
     })

     // Photo 2
     .code({
     	start: 15,
     	onStart: function( options ) {
           $('#photo2_attack img').addClass('fx')
         },
         end: 18,
         onEnd: function( options ) {
           $('#photo2_attack img').removeClass('fx');
         }
     })

     // Photo 3 and Quote
     .code({
     	start: 18,
     	onStart: function( options ) {
           $('#quote').addClass('fx')
         },
         end: 21.5,
         onEnd: function( options ) {
           $('#quote').removeClass('fx');
         }
     })

     // wrapup
     .code({
     	start: 25,
     	onStart: function( options ) {
           $('#attack_wrapup').addClass('fx');
         }
     })

     // hide overlay container
     .code({
     	start: 29.9,
     	onStart: function( options ) {
         //$('.video_bounds').hide();
         pop.pause();
      }
     })

    // remove controls: &controls=0
    // Show the banner and pause the movie using the code plugin
    // http://popcornjs.org/popcorn-docs/plugins/#Code
//    pop.code({
//    	start: 8,
//    	onStart: function( options ) {
//            pop.pause();
//            $('#overlay').fadeIn('fast');
//            $('#input').fadeIn('fast');
//        }
//    })


    // Google Map Plugin
//    .googlemap({
//    	start: .25,
//    	end: 50,
//    	type: "SATELLITE",
//    	target: "map",
//    	location: "Honolulu, HI",
//    	zoom: 5
//    })
//
    // Show and hide the map
//    .code({
//    	start: .25,
//    	onStart: function( options ) {
          // $('#map').show();
//        },
//        end: 50,
//        onEnd: function( options ) {
          // $('#map').hide();
//        }
//    })

    // Subtitle plugin
//    .subtitle({
//  		start: 10,
//  		end: 26,
//  		target: "subtitle",
//  		text: "This is an amazing subtitle"
//    })
//
//    .subtitle({
//  		start: 27,
//  		end: 37,
//  		target: "subtitle",
//  		text: "LIES LIES LIES"
//    })



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