// If we're not watching an ad, initialize the adlib data object.
function prefill_ad_outputs(e){FB.api("/"+window.adlib_data.facebookUserID,function(e){if(typeof e!="undefined"){window.user_name=e.name;window.user_first_name=e.first_name;$(".user-name").html(e.name);window.user_email=e.email;$("#user-email").val(e.email)}});FB.api("/"+window.adlib_data.facebookUserID+"/picture?width=300&height=300",function(t){if(typeof t!="undefined")switch(e){case"smalltown":$("#ad-smalltown-positive_slogan-photo").html('<img src="'+t.data.url+'" style="width: '+t.data.width+"; height: "+t.data.height+';">');break;case"metro":$("#ad-metro-positive_slogan-photo").html('<img src="'+t.data.url+'" style="width: '+t.data.width+"; height: "+t.data.height+';">');break;case"credentials":$("#ad-credentials-negative_slogan-photo").html('<img src="'+t.data.url+'" style="width: '+t.data.width+"; height: "+t.data.height+';">');break;case"character":$("#ad-character-backfire_quote-photo").html('<img src="'+t.data.url+'" style="width: '+t.data.width+"; height: "+t.data.height+';">');$("#ad-character-negative_slogan-photo").html('<img src="'+t.data.url+'" style="width: '+t.data.width+"; height: "+t.data.height+';">')}})}function get_facebook_photos_as_choices(e,t,n){var r="#ad-"+e+"-"+t+"-input .choices ul",i="ad-"+e+"-"+t;FB.api("/me/albums?limit=0",function(e){if(typeof e.data!="undefined")for(var t=0;t<e.data.length;t++)typeof e.data[t]!="undefined"&&typeof e.data[t]!="undefined"&&typeof e.data[t].type!="undefined"&&e.data[t].privacy==="everyone"&&e.data[t].type==="profile"&&FB.api("/"+e.data[t].id+"/photos?limit=0",function(e){if(typeof e.data!="undefined"&&typeof e.data[0].images!="undefined")for(var t=0;t<e.data.length;t++)if(typeof e.data[t]!="undefined"){found=!0;$(r).prepend('<li style="background-image: url('+e.data[t].images[7].source+');" id="'+i+"-choice-profile-"+t+'"></li>');var n={};n[i]=e.data[t].images[1].source;$("#"+i+"-choice-profile-"+t).data("options",n)}});FB.api("/me/photos?limit=50",function(e){if(typeof e.data!="undefined"&&typeof e.data[0]!="undefined"&&typeof e.data[0].images!="undefined")for(var t=0;t<100;t++)if(typeof e.data[t]!="undefined"){$(r).append('<li style="background-image: url('+e.data[t].images[7].source+');" id="'+i+"-choice-tagged-"+t+'"></li>');var s={};s[i]=e.data[t].images[1].source;$("#"+i+"-choice-tagged-"+t).data("options",s)}for(var t=1;t<7;t++){$(r).append('<li style="background-image: url(img/video-output/photos/thumbnails/'+n+t+'-thumbnail.jpg)" id="'+i+"-choice-stock-"+t+'"></li>');var s={};s[i]="img/video-output/photos/"+n+t+".jpg";$("#"+i+"-choice-stock-"+t).data("options",s)}})})}function get_facebook_locations_and_checkins_as_choices(e,t){var n="#ad-"+e+"-"+t+"-input .choices ul",r="ad-"+e+"-"+t,i,s=[];FB.api("/me",function(e){if(e.hometown&&typeof e.hometown.name!="undefined"){i=e.hometown.name.substr(0,e.hometown.name.indexOf(", "));s.push(i)}if(typeof e.location!="undefined"&&typeof e.location.name!="undefined"&&i!==e.location.name){var t=e.location.name.substr(0,e.location.name.indexOf(","));s.push(t)}FB.api("/me/checkins",function(e){if(typeof e.data!="undefined"){var o=[];for(var u=0;u<e.data.length;u++){var a=e.data[u].place.location.city;a!==i&&a!==t&&o.push(a)}checkinsSorted=o.sort();checkinsCleaned=[];for(var u=0;u<checkinsSorted.length;u++)checkinsSorted[u+1]!==checkinsSorted[u]&&checkinsCleaned.push(checkinsSorted[u]);for(var u=0;u<checkinsCleaned.length;u++)s.push(checkinsCleaned[u])}for(var u=0;u<ad_lib_stock_content.towns.length;u++)s.push(ad_lib_stock_content.towns[u]);for(var u=0;u<s.length;u++){$(n).append('<li id="'+r+"-choice-"+u+'"></li>');var f={};f[r+"-name"]=encode_string(s[u]);$("#"+r+"-choice-"+u).data("options",f).html(encode_string(s[u]))}})})}function get_facebook_education_and_occupations_as_achievement_choices(e,t){var n="#ad-"+e+"-"+t+"-input .choices ul",r="ad-"+e+"-"+t,i=[],s=[];FB.api("/me",function(e){if(typeof e!="undefined"){if(typeof e.work!="undefined")for(var t=0;t<e.work.length;t++){var o="";e.work[t].start_date!=="0000-00"&&e.work[t].end_date!=="0000-00"&&typeof e.work[t].start_date!="undefined"&&typeof e.work[t].end_date!="undefined"?o=e.work[t].start_date.substr(0,4)+" to "+e.work[t].end_date.substr(0,4):e.work[t].start_date!=="0000-00"&&typeof e.work[t].start_date!="undefined"&&typeof e.work[t].end_date=="undefined"?o=e.work[t].start_date.substr(0,4):typeof e.work[t].start_date=="undefined"&&e.work[t].end_date!=="0000-00"&&typeof e.work[t].end_date!="undefined"?o=e.work[t].end_date.substr(0,4):typeof e.work[t].start_date=="undefined"&&typeof e.work[t].end_date=="undefined"&&(o="");i.push({place:e.work[t].employer?e.work[t].employer.name:"",role:e.work[t].position?e.work[t].position.name:"",year:o})}if(typeof e.education!="undefined")for(var t=0;t<e.education.length;t++){var u;typeof e.education[t].year!="undefined"?u=e.education[t].year.name:u="";s.push({place:e.education[t].school.name,role:"",year:u})}for(var t=0;t<ad_lib_stock_content.achievements.length;t++)i.push({place:ad_lib_stock_content.achievements[t].place,role:ad_lib_stock_content.achievements[t].role,year:ad_lib_stock_content.achievements[t].year})}for(var t=0;t<s.length;t++){var a=encode_string(s[t].place);s[t].year!==""&&(a+=", "+s[t].year);$(n).prepend('<li id="'+r+"-choice-school-"+t+'"></li>');var f={};f[r+"-place"]=encode_string(s[t].place);f[r+"-role"]=encode_string(s[t].role);f[r+"-year"]=encode_string(s[t].year);$("#"+r+"-choice-school-"+t).data("options",f).html(a)}for(var t=0;t<i.length;t++){var l="";i[t].role!==""&&(l+=encode_string(i[t].role));i[t].role!==""&&i[t].place!==""&&(l+=" at ");i[t].place!==""&&(l+=encode_string(i[t].place));i[t].year!==""&&(l+=", "+i[t].year);$(n).append('<li id="'+r+"-choice-work-"+t+'"></li>');var f={};f[r+"-place"]=encode_string(i[t].place);f[r+"-role"]=encode_string(i[t].role);f[r+"-year"]=encode_string(i[t].year);$("#"+r+"-choice-work-"+t).data("options",f).html(l)}})}function get_facebook_bio_and_statuses_as_choices(e,t){var n="#ad-"+e+"-"+t+"-input .choices ul",r="ad-"+e+"-"+t,i,s=[];FB.api("/me",function(e){if(typeof e.bio!="undefined"){i=e.bio;i=encode_string(i);if(t==="out_of_context_quote"||t==="backfire_quote")i="&ldquo;"+i+"&rdquo;";s.push(i)}});FB.api("/me/statuses",function(e){if(typeof e.data!="undefined")for(var o=0;o<e.data.length;o++)if(typeof e.data[o].message!="undefined"&&e.data[o].message.indexOf("http")===-1){e.data[o].message.length>109?i=e.data[o].message.substr(0,109)+"…":i=e.data[o].message;if(t==="out_of_context_quote"||t==="backfire_quote")i="&ldquo;"+i+"&rdquo;";s.push(i)}switch(t){case"positive_slogan":for(var o=0;o<ad_lib_stock_content.positive_slogans.length;o++)s.push(ad_lib_stock_content.positive_slogans[o]);break;case"negative_slogan":for(var o=0;o<ad_lib_stock_content.negative_slogans.length;o++)s.push(ad_lib_stock_content.negative_slogans[o]);break;case"out_of_context_quote":for(var o=0;o<ad_lib_stock_content.out_of_context_quotes.length;o++)s.push(ad_lib_stock_content.out_of_context_quotes[o]);break;case"backfire_quote":for(var o=0;o<ad_lib_stock_content.backfire_quotes.length;o++)s.push(ad_lib_stock_content.backfire_quotes[o])}for(var o=0;o<s.length;o++){$(n).append('<li id="'+r+"-choice-"+o+'"></li>');var u={};u[r+"-text"]=s[o];$("#"+r+"-choice-"+o).data("options",u).html(s[o])}})}function get_facebook_likes_as_choices(e,t){var n="#ad-"+e+"-"+t+"-input .choices ul",r="ad-"+e+"-"+t,i=[];FB.api("/me/likes",function(e){if(typeof e.data!="undefined")for(var t=0;t<e.data.length;t++)i.push(e.data[t].name);for(var t=0;t<ad_lib_stock_content.likes.length;t++)i.push(ad_lib_stock_content.likes[t]);for(var t=0;t<i.length;t++){$(n).append('<li id="'+r+"-choice-"+t+'"></li>');var s={};s[r]=i[t];$("#"+r+"-choice-"+t).data("options",s).html(i[t])}})}function handle_choice_clicking_and_deciding(e){var e="#ad-"+e;$(e+" .choices li").ready(function(){$(".choices.single").off("click","li");$(".choices.single").on("click","li",function(){var e="#"+$(this).parents(".input").attr("id");if($(this).hasClass("selected")){hide_element($(".continue"));$(e+" .choices li").removeClass("selected unselected")}else{$(e+" .choices li").removeClass("selected").addClass("unselected");$(this).removeClass("unselected").addClass("selected");show_element($(".continue"))}});var t=$(e+" .choices.single + .continue");t.siblings(".choices").find("ul").children("li").remove();t.click(function(){$(this).off("click");var e=$(this).siblings(".choices").find("ul").find(".selected").data();add_custom_content_to_ad(e.options)});var n=[];$(".choices.double").off("click","li");$(".choices.double").on("click","li",function(){var e="#"+$(this).parents(".input").attr("id"),t=$(this);if($(e+" .chosen_choices ul li").length===2){$(e+" .chosen_choices ul li:last-child").remove();n.unshift(t.html());n.pop();$(e+" .chosen_choices ul").prepend("<li>"+t.html()+"</li>")}else{n.unshift(t.html());$(e+" .chosen_choices ul").prepend("<li>"+t.html()+"</li>")}$(e+" .choices li.selected").length===2&&!t.hasClass("selected")&&$(e+" .choices li.selected.secondChoice").removeClass("secondChoice firstChoice selected");$(e+" .choices li.selected").length>0&&$(e+" .choices li.selected.firstChoice").addClass("secondChoice").removeClass("firstChoice");if(t.hasClass("selected")){t.removeClass("selected").removeClass("firstChoice").removeClass("secondChoice");$(e+" .choices li.selected").addClass("firstChoice").removeClass("secondChoice");for(var r=0;r<n.length;r++)if(n[r]===t.html()){n=[];$(e+" .chosen_choices ul li").remove();if($(e+" .choices li.selected").length===1){n.push($(e+" .choices li.selected").html());$(e+" .chosen_choices ul").prepend("<li>"+$(e+" .choices li.selected").html()+"</li>")}break}}else $(t).addClass("selected firstChoice");n.length===2?t.parents(".input").children(".continue").addClass("active").click(function(){var e={};e["ad-credentials-likes-like1"]=n[0];e["ad-credentials-likes-like2"]=n[1];add_custom_content_to_ad(e)}):t.parents(".input").children(".continue").removeClass("active")})})}function add_custom_content_to_ad(e){$.each(e,function(e,t){e.indexOf("photo")!==-1?$("#"+e+" img").attr("src",t):$("#"+e).html(t);window.playback_mode!=="watch"&&(window.adlib_data.choices[e]=t)})}function log(e){console.log(e)}function show_element(e){e.addClass("active").removeClass("inactive")}function hide_element(e){e.addClass("inactive").removeClass("active")}function encode_string(e){e=$("<div/>").text(e).html();e=htmlentities(e);return e}window.playback_mode!=="watch"&&typeof window.adlib_data=="undefined"&&(window.adlib_data={dateCreated:new Date,userIP:"",facebookUserName:"",facebookUserID:"",ad:"",choices:{}});var ad_lib_template_settings={smalltown:{template_video_youtube_ID:"RspONMMMMT8",inputs:{old_photo:{start:"05.10",end:"08.50",educational_video_youtube_ID:"rPSJJwZUmik",type:"photo",secondary_type:"past"},hometown:{start:"08.80",end:"14.00",educational_video_youtube_ID:"",type:"location",secondary_type:""},diploma:{start:"18.00",end:"24.00",educational_video_youtube_ID:"WiqWpTuse18",type:"achievement",secondary_type:""},positive_slogan:{start:"28.70",end:"",educational_video_youtube_ID:"va5Btg4kkUE",type:"slogan",secondary_type:""},"positive_slogan-photo":{start:"32.00",end:"",educational_video_youtube_ID:"",type:"output_only",secondary_type:""}}},metro:{template_video_youtube_ID:"W96BDbjxw0c",inputs:{old_photo:{start:"04.10",end:"09.50",educational_video_youtube_ID:"L1N1fYDq26k",type:"photo",secondary_type:"patriotic"},hardship_photo:{start:"12.20",end:"14.30",educational_video_youtube_ID:"WbCauaAH6AQ",type:"photo",secondary_type:"hardship"},trophy:{start:"15.00",end:"18.00",educational_video_youtube_ID:"WiqWpTuse18",type:"achievement",secondary_type:""},positive_slogan:{start:"26.70",end:"",educational_video_youtube_ID:"wNUOhEproKs",type:"slogan",secondary_type:""},"positive_slogan-photo":{start:"28.00",end:"",educational_video_youtube_ID:"",type:"output_only",secondary_type:""}}},credentials:{template_video_youtube_ID:"ibjuY3_UQJ0",inputs:{photo:{start:"03.00",end:"06.00",educational_video_youtube_ID:"I4mXfLSvKGY",type:"photo",secondary_type:"headshot"},likes:{start:"13.00",end:"18.00",educational_video_youtube_ID:"pbdzMLk9wHQ",type:"likes",secondary_type:""},party_photo:{start:"18.10",end:"25.20",educational_video_youtube_ID:"9LyYD166ync",type:"photo",secondary_type:"party"},negative_slogan:{start:"27.70",end:"",educational_video_youtube_ID:"",type:"slogan",secondary_type:""},"negative_slogan-photo":{start:"28.00",end:"",educational_video_youtube_ID:"",type:"output_only",secondary_type:""}}},character:{template_video_youtube_ID:"D7HfhzAO3zE",inputs:{photo:{start:"06.40",end:"15.00",educational_video_youtube_ID:"PmwhdDv8VrM",type:"photo",secondary_type:"headshot"},out_of_context_quote:{start:"15.10",end:"20.00",educational_video_youtube_ID:"FNE56_GkOOY",type:"slogan",secondary_type:""},backfire_quote:{start:"20.10",end:"25.00",educational_video_youtube_ID:"6reQLzgywzk",type:"slogan",secondary_type:""},negative_slogan:{start:"26.80",end:"",educational_video_youtube_ID:"",type:"slogan",secondary_type:""},"negative_slogan-photo":{start:"29.00",end:"",educational_video_youtube_ID:"",type:"output_only",secondary_type:""}}},zombie:{template_video_youtube_ID:"U8hnA3KvPPs",inputs:{photo1:{start:"11.00",end:"15.50",educational_video_youtube_ID:"kepFrEfIbi4",type:"photo",secondary_type:"headshot"},hometown:{start:"23.50",end:"28.20",educational_video_youtube_ID:"ExjDzDsgbww",type:"location",secondary_type:""},out_of_context_quote:{start:"28.10",end:"32.00",educational_video_youtube_ID:"bVIaqCjvLpU",type:"slogan",secondary_type:""},over_shoulder_photo:{start:"33.00",end:"36.40",educational_video_youtube_ID:"8EL5Atp_vF0",type:"photo",secondary_type:"headshot"},photo2:{start:"44.00",end:"",educational_video_youtube_ID:"PmwhdDv8VrM",type:"photo",secondary_type:"headshot"},"photo2-legal":{start:"46.00",end:"",educational_video_youtube_ID:"",type:"output_only",secondary_type:""}}}},ad_lib_stock_content={towns:["Anytown","Springfield","Podunk","Main Street","Boondocks","Dunmovin","Unalaska","Goobertown","No Name","Slice of Heaven","Chickasawhatchee","Normal","Plainville","Monkeys Eyebrow","Yazoo"],positive_slogans:["Values. Respect. Wisdom. Courage.","Homegrown principles, national know-how.","A President who knows the importance of family and hard work.","It could be worse.","Pick me, pick me, pick me!","I promise to be good.","You know you love me.","Putting people first.","A return to normalcy.","The better leader for a better America.","Vote for ideas, not empty promises.","A chicken in every pot and a car in every garage.","Dream for something more today.","For the future.","I&rsquo;m not your typical politician."],negative_slogans:["Elect a REAL American.","Not to be trusted.","Does the truth matter to you?","Don&rsquo;t waste your vote.","How can we trust this candidate now?","America can&rsquo;t afford that risk.","Can we trust this candidate in the White House?","Do you really want more of the same?","Out of touch."],likes:["Kittens","Puppies","Dictators","Sunburns","Succulents","Bodybuilding","Discoth&eacute;ques","Vacuums","Dalai Lama","Fly fishing","Freedom","Traveling","Dancing","The 1920s","Pizza"],out_of_context_quotes:["&ldquo;My vacation was wonderful!&rdquo;","&ldquo;Let them eat cake.&rdquo;"],backfire_quotes:["&ldquo;My opponent is working hand in glove with criminals.&rdquo;","&ldquo;We&rsquo;re lazy as a democracy.&rdquo;","&ldquo;I&rsquo;m not a witch.&rdquo;","&ldquo;You say &lsquo;potato,&rsquo; I say &lsquo;pota-toe.&rsquo;&rdquo;","&ldquo;The bombing begins in five minutes.&rdquo;","&ldquo;I am a jelly-filled doughnut&rdquo;"],achievements:[{place:"The School of Hard Knocks",role:"",year:"1912"},{place:"Daydream Academy",role:"",year:"1999"},{place:"Old School",role:"",year:"1985"},{place:"New School",role:"",year:"2005"},{place:"The Old Steel Mill",role:"Foreman",year:"1902 to 2002"},{place:"The Greatest Charity Foundation",role:"Director",year:"1984 to 1996"},{place:"King of the Rock",role:"",year:"1960 to 2012"},{place:"Horse Whisperer",role:"",year:"1998"},{place:"Sideshow Freak",role:"",year:"1920"},{place:"Pearl Diver",role:"",year:"2009"},{place:"Professional Party-starter",role:"",year:"2005 to 2009"},{place:"Basketball Player",role:"",year:"1983"},{place:"Freelance Entrepreneur",role:"",year:"2008"},{place:"Expert Expert",role:"",year:"2003"},{place:"Drummer in Many Local Bands",role:"",year:"1982 to 2012"},{place:"Talk Show Host",role:"",year:"1993 to 2004"},{place:"Dungeon Master",role:"",year:"1971 to 2008"}]};$(document).ready(function(){function e(e){setTimeout(function(){$(".video-decor-crest").addClass("gone");$(".video-decor-pin").addClass("gone")},2e3);$("body:not(.lt-ie10) #video_type_cycle").cycle($("#video_type_cycle em."+e).index()).cycle("pause");hide_element($("#video-chooser"));show_element($("#video-loading"));$("#ad-"+e).show();$("#play_pause").off("click");$("#play_pause").click(function(){$(this).hasClass("playing")?u.pause():u.play(),$(this).toggleClass("playing")});$("#mute").off("click");$("#mute").click(function(){$(this).hasClass("muted")?u.unmute():u.mute(),$(this).toggleClass("muted")});prefill_ad_outputs(e);var u=Popcorn.youtube("#video","http://www.youtube.com/watch?v="+ad_lib_template_settings[e].template_video_youtube_ID+"&controls=0&rel=0&showinfo=0&modestbranding=1");u.on("play",function(){$(".output.active.paused").removeClass("paused")});u.on("pause",function(){$(".output.active").addClass("paused")});u.on("canplaythrough",function(){u.play();u.code({start:"00.10",onStart:function(e){hide_element($("#video-loading"));$("#video-mask").addClass("transparent");$("#video-controls").fadeIn()}});$.each(ad_lib_template_settings[e].inputs,function(o,a){switch(a.type){case"photo":get_facebook_photos_as_choices(e,o,a.secondary_type);break;case"location":get_facebook_locations_and_checkins_as_choices(e,o);break;case"achievement":get_facebook_education_and_occupations_as_achievement_choices(e,o);break;case"slogan":get_facebook_bio_and_statuses_as_choices(e,o);break;case"likes":get_facebook_likes_as_choices(e,o)}a.type==="output_only"?u.code({start:a.start,onStart:function(t){i(e,o)}}):a.end===""?u.code({start:a.start-.1,onStart:function(r){n(u,e,o);t(u,e,o)},end:a.start+1,onEnd:function(t){r(u,e,o)}}).code({start:a.start,onStart:function(t){i(e,o)}}):u.code({start:a.start-.1,onStart:function(r){n(u,e,o);t(u,e,o)},end:a.end,onEnd:function(t){r(u,e,o)}}).code({start:a.start,onStart:function(t){i(e,o)},end:a.end,onEnd:function(t){s(e,o)}})});u.code({start:u.duration()-.25,onStart:function(t){o(u,e)}});handle_choice_clicking_and_deciding(e)})}function t(e,t,n,r){if(window.playback_mode==="create"||r==="input_opportunity_clicked"){var i="#ad-"+t+"-"+n,s="#ad-"+t+"-"+n+"-input";e.pause();show_element($("#video-overlay"));$("#video-controls").fadeOut();show_element($(s));if(ad_lib_template_settings[t].inputs[n].educational_video_youtube_ID!=="")var o=Popcorn.youtube(s+"-education_video","http://www.youtube.com/watch?v="+ad_lib_template_settings[t].inputs[n].educational_video_youtube_ID+"&controls=0&rel=0&showinfo=0&modestbranding=1");$(s+" .continue").click(function(){$(i+" img").imagesLoaded(function(){hide_element($(s));hide_element($(".continue"));if(typeof o!="undefined")try{o.destroy()}catch(r){o.pause();o.media&&o.media.children&&o.media.children[0]&&o.media.children[0].parentNode&&o.media.children[0].parentNode.removeChild(o.media.children[0])}hide_element($("#video-overlay"));$("#video-controls").fadeIn();e.play(ad_lib_template_settings[t].inputs[n].start-.05)})})}}function n(e,n,r){window.playback_mode==="replay"&&$("#video-input_opportunity").click(function(){hide_element($(this));s(n,r);t(e,n,r,"input_opportunity_clicked")})}function r(e,t){window.playback_mode==="replay"&&hide_element($("#video-input_opportunity"))}function i(e,t){show_element($("#ad-"+e+"-"+t))}function s(e,t){hide_element($("#ad-"+e+"-"+t))}function o(e,t){e.pause();setTimeout(function(){$("#video-controls").hide();show_element($("#video-postroll").addClass(window.playback_mode));$("body:not(.lt-ie10) #video_type_cycle").cycle("resume")},3e3);var n="no";$("#makeyourown").off("click");$("#makeyourown.active").click(function(){window.open("//apps.facebook.com/admaker/","_blank");window.focus()});$("#restart.active").click(function(){window.playback_mode="create";n="no";$(this).off("click");hide_element($("#video-postroll-offer_to_email_bookmark"));hide_element($("#video-postroll-offer_to_email_bookmark .form"));hide_element($("#video-postroll"));$("#ad-"+t).hide();hide_element($("#video-postroll-offer_to_email_bookmark .confirmation"));show_element($("#video-postroll-offer_to_email_bookmark .form"));$("#play_pause").removeClass("playing");$("#mute").removeClass("muted");$(".video_type_category").removeClass("chosen").addClass("not_chosen clickable");$(".video_type").removeClass("chosen").addClass("not_chosen clickable");e.destroy();show_element($("#video-chooser"));hide_element($(".output"))});$("#replay.active").click(function(){window.playback_mode="replay";e.currentTime(0).play();hide_element($("#video-postroll"));hide_element($(".input"));hide_element($(".output"))});$("#video-postroll #share.active").click(function(){log("Unescaped URL:");log(JSON.stringify(window.adlib_data));log("Cleaned-up URL:");log(btoa(encodeURIComponent(unescape(JSON.stringify(window.adlib_data)))));var e=window.FB_app_url+"?adlib_data="+btoa(encodeURIComponent(unescape(JSON.stringify(window.adlib_data)))),t=$.getJSON("https://api-ssl.bit.ly/v3/shorten/?callback=?",{format:"json",apiKey:"R_67b1d731eb253240ae5e333abc004b3f",login:"pbsnewshouradlibs",longUrl:e},function(e){log("Shortened URL:");log(e.data.url);window.adlib_data.ad==="zombie"?window.share_image="facebook_share-zombie.png":window.share_image="facebook_share.png";FB.ui({method:"stream.publish",attachment:{name:"Check Out My Campaign Ad!",description:"I used PBS NewsHour Ad Libs to personalize my own campaign ad. Check it out and make one for yourself.",media:[{type:"image",src:window.app_url+"/img/"+window.share_image,href:e.data.url}],href:e.data.url}},function(e){typeof _gaq!="undefined"&&_gaq!==null&&_gaq.push(["_trackPageview"]);typeof e!="undefined"&&typeof e.post_id!="undefined"&&$("#video-postroll #share").removeClass("active").addClass("inactive");n="yes"})})})}$("#credits_button").on("click",function(e){e.preventDefault();$("#credits").bPopup()});$("#video_type_cycle").cycle({speed:"fast",timeout:1500,startingSlide:0});if(window.playback_mode==="watch"&&typeof window.adlib_data!="undefined"){hide_element($("#video-intro"));ad=window.adlib_data.ad;$(document).on("facebook_loaded",function(){$(document).off("facebook_loaded");add_custom_content_to_ad(window.adlib_data.choices);e(ad)})}else{setTimeout(function(){show_element($("#video-intro"))},1500);setTimeout(function(){show_element($("#video-chooser"))},2e3)}$("#login-logged_in").click(function(){hide_element($("#video-intro"))});$(".video_type_category").click(function(){$(".video_type_category").removeClass("chosen").addClass("not_chosen");$(this).removeClass("not_chosen").addClass("chosen")});$(".video_type.clickable").click(function(){if(!$(this).hasClass("video_type_category video_type")&&$(this).hasClass("chosen")){log("no");return}$(".video_type").removeClass("chosen clickable").addClass("not_chosen");$(this).addClass("chosen");ad=$(this).attr("id").substr(11);window.adlib_data.ad=ad;e(ad)})});window.fbAsyncInit=function(){function e(e){if(e.status==="connected"){$(document).trigger("facebook_loaded");var t=e.authResponse.userID,n=e.authResponse.accessToken;FB.api("/me",function(e){window.adlib_data.facebookUserName=e.name;window.adlib_data.facebookUserID=t});FB.api("/me",function(e){$("#login-logged_in strong").html(e.first_name);hide_element($("#login-loading"));hide_element($("#login-logged_out"));show_element($("#login-logged_in"))})}else if(e.status==="not_authorized"){hide_element($("#login-loading"));hide_element($("#login-logged_in"));show_element($("#login-logged_out"))}else{hide_element($("#login-loading"));hide_element($("#login-logged_in"));show_element($("#login-logged_out"))}}FB.init({appId:window.FB_app_ID,channelUrl:"channel.php",status:!0,cookie:!0,xfbml:!0});FB.getLoginStatus(e);FB.Event.subscribe("auth.authResponseChange",e)};(function(e){var t,n="facebook-jssdk",r=e.getElementsByTagName("script")[0];if(e.getElementById(n))return;t=e.createElement("script");t.id=n;t.async=!0;t.src="//connect.facebook.net/en_US/all.js";r.parentNode.insertBefore(t,r)})(document);