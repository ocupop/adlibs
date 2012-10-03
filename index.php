<!doctype html><?php require_once('settings.php'); ?>
  <!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
  <!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
  <!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
  <!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->

  <head>
    <script type="text/javascript">

      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-1996666-1']);
      _gaq.push(['_setDomainName', 'none']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();

    </script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width">

    <title>PBS NewsHour Ad Libs 2012</title>

    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="ads.css">

    <script type="text/javascript" src="//use.typekit.net/dcg5pic.js"></script>
    <script type="text/javascript">try{Typekit.load();}catch(e){}</script>

    <script src="js/lib/modernizr.custom.33487.js"></script>
  </head>
  <body class="<?php if ($_SERVER["SERVER_NAME"] == 'localhost') { echo 'dev'; } ?> ">
    <div id="fb-root"></div>

    <div class="ua-warning">We&rsquo;re sorry&mdash;your browser might not work with Ad Libs very well. You can <a href="http://browsehappy.com/">upgrade your browser</a> easily or <a href="#" class="close-button">try Ad Libs anyway</a>.</div>

    <script>
      var ACCEPTED_UA_LIST = {
        "Chrome": 17,
        "Firefox": 10,
        "MSIE": 9,
        "Safari": 6
      };

      var ua = navigator.userAgent,
          acceptedUA;
      for ( var uaName in ACCEPTED_UA_LIST ) {
        if( ACCEPTED_UA_LIST.hasOwnProperty( uaName ) ) {
          var uaRegex = new RegExp( uaName + "(?:/|\\s)([0-9]+)\\.", "g" ),
              versionRegex = new RegExp( "Version(?:/|\\s)([0-9]+)\\.", "g" ),
              match = uaRegex.exec( ua ),
              version = versionRegex.exec( ua );
          if ( match && match.length === 2 ) {
            // version correction for safari and opera
            if ( version && version.length === 2 ) {
              match[ 1 ] = version[ 1 ];
            }
            if ( Number( match[ 1 ] ) >= ACCEPTED_UA_LIST[ uaName ] ) {
              acceptedUA = uaName + "/" + match[ 1 ];
            }
          }
        }
      }

      var showUAWarning = function() {
        var uaWarningDiv = document.getElementsByClassName('ua-warning')[0];
        uaWarningDiv.style.display = 'block';
        uaWarningDiv.getElementsByClassName('close-button')[0].onclick = function () {
          uaWarningDiv.style.display = 'none';
        };
      };

      if ( !acceptedUA ) {
        showUAWarning();
      }
    </script>
    <div class="container">

      <header>
        <h1 class="ir">PBS NewsHour AdMaker 2012</h1>
      </header>

      <p class="tagline">
        <strong class="pbs"><img src="img/header-pbs.png" alt="PBS face logo" title="PBS"> PBS NewsHour</strong>
        Presents
        <span id="video_type_cycle">
          <em class="biographical">Biographical</em>
          <em class="smalltown">Small-town</em>
          <em class="metro">Metro America</em>
          <em class="attack">Attack</em>
          <em class="credentials">Credentials</em>
          <em class="character">Character</em>
        </span>
        <strong>Ad Libs</strong> for <strong>2012</strong>.
        <br>
        Finally, a chance for <strong>YOU</strong> to <strong>&lsquo;approve this message.&rsquo;</strong>
      </p>

      <div id="video-container">

        <img src="img/video-decor-pin.png" class="video-decor-pin">
        <img src="img/video-decor-crest.png" class="video-decor-crest">

        <div id="video-frame"></div>

        <div id="video-controls" style="display: none;">
          <span id="play_pause" class="playing">Play</span>
          <span id="mute">Mute</span>
        </div>

        <div id="video" style="width: 800px; height: 450px;"></div>

        <div id="video-mask">
          <div class="slide" id="video-intro">
            <h2>Make Your Own<strong>Campaign Ads</strong></h2>
            <h3 id="login-loading" class="active"></h3>
            <h3 id="login-logged_out">
              <div class="instructions">
                <div class="fb-login-button" data-size="xlarge" scope="user_about_me,user_checkins,user_education_history,user_hometown,user_location,user_photos,user_likes,user_relationships,user_status,user_work_history,email"></div>
                to get started!
              </div>
              <div id="disclaimer">
                <p>Login with Facebook to create an ad using your personal information. Nothing will be shared on your timeline until you choose a sharing option at the end of the creation process.</p>
              </div>
            </h3>
            <h3 id="login-logged_in">
              <div class="instructions">
                Start campaigning, <strong></strong>! <img src="img/video-button-play.png">
              </div>
            </h3>
            <p>Do you know how political campaign ads work? How they&rsquo;re built? What they&rsquo;re meant to tell you? Most political ads follow a rigid set of guidelines and fall into one of a few categories. We&rsquo;ve put together a few samples for you to customize with your information and imagination. It&rsquo;s fun, it&rsquo;s fast, and you&rsquo;ll never watch campaign ads the same way again!</p>
          </div>

          <div class="slide" id="video-chooser">
            <h2>Choose an Ad!</h2>
            <ul>
              <li class="video_type_category left clickable" id="video_type-bio">
                <h3>Biographical</h3>
                <div>
                  <h4>Where do you hail from?</h4>
                  <p>A biographical ad captures a candidate&rsquo;s life story. But depending on a candidate&rsquo;s origins, the ad could be a tale of small-town values or a record of experience.</p>
                  <ul>
                    <li class="video_type clickable" id="video_type-smalltown">Small Town</li>
                    <li class="video_type clickable" id="video_type-metro">City or Suburb</li>
                  </ul>
                </div>
              </li>
              <li class="video_type_category right clickable" id="video_type-attack">
                <h3>Attack</h3>
                <div>
                  <h4>Do you want to attack your character or credentials?</h4>
                  <p>Attacks ads instill doubt about a political opponent. How will you show that this candidate is unfit for office, or even dangerous?</p>
                  <ul>
                    <li class="video_type clickable" id="video_type-credentials">Credentials</li>
                    <li class="video_type clickable" id="video_type-character">Character</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div id="video-loading" class="inactive">
            <div>
              <strong>
                Starting the
                <span>campaign</span>
                <span>machine</span>
              </strong>
            </div>
          </div>
          
          <div id="video-postroll">
            <ul>
              <li id="makeyourown" class="active">Make Your Own Ad</li>
              <li id="restart" class="active">Choose a New Ad</li>
              <li id="replay" class="active">Replay This Ad</li>
              <li id="share" class="active">Share to Facebook</li>
            </ul>

            <div id="video-postroll-offer_to_email_bookmark">
              <div class="form">
                <p id="video-postroll-offer_to_email_bookmark-instructions"><strong>Wait!</strong> You haven&rsquo;t shared this Ad Lib you created on Facebook yet. You can replay or revise your ad, or we can email you a link to it.</p>
                <input type="text" id="user-email" value="">
                <span id="email_bookmark_button">Email Bookmark<br>to This Address</span>
              </div>
              <div class="confirmation">
                <p><strong>Thank you!</strong> We&rsquo;ve emailed you a link to the video you just created. Feel free to continue by choosing one of the options below.</p>
              </div>
            </div>
          </div>

          <div id="video-input_opportunity"></div>

          <div id="video-contents">
            <div id="video-overlay"></div>

<!--
             ####  #    #   ##   #      #            #####  ####  #    # #    #
            #      ##  ##  #  #  #      #              #   #    # #    # ##   #
             ####  # ## # #    # #      #      #####   #   #    # #    # # #  #
                 # #    # ###### #      #              #   #    # # ## # #  # #
            #    # #    # #    # #      #              #   #    # ##  ## #   ##
             ####  #    # #    # ###### ######         #    ####  #    # #    #
-->

            <div class="video-io" id="ad-smalltown" style="display: none;">

              <div class="input" id="ad-smalltown-old_photo-input">
                <h2 class="instructions"><span>Choose a photo of your past self,<br>preferably with family.</span></h2>
                <div class="education">
                  <p>Sepia-toned or black-and-white photos from the past can humanize a candidate&rsquo;s appeal.</p>
                  <p><strong>Watch Gerald Ford&rsquo;s 1976 montage of sepia-toned photos:</strong></p>
                  <div id="ad-smalltown-old_photo-input-education_video" style="width: 266px; height: 200px;"></div>
                </div>
                <div class="choices photos single"><ul></ul></div>
                <div class="continue">Continue</div>
              </div>

              <div class="output photo filter-sepia effect-ken_burns" id="ad-smalltown-old_photo">
                <div class="filter-fallback"></div>
                <img>
              </div>

              <!-- ################################################################################ -->

              <div class="input no_education" id="ad-smalltown-hometown-input">
                <h2 class="instructions"><span>Where did you grow up?</span></h2>
                <div class="choices text single large"><ul></ul></div>
                <div class="continue">Continue</div>
              </div>

              <div class="output slate effect-burns_ken" id="ad-smalltown-hometown">
                <div id="ad-smalltown-hometown-name-wrapper">
                  <div id="ad-smalltown-hometown-name">&hellip;</div>
                </div>
              </div>

              <!-- ################################################################################ -->

              <div class="input" id="ad-smalltown-diploma-input">
                <h2 class="instructions"><span>What is your proudest achievement?</span></h2>
                <div class="education">
                  <p>Biographical spots highlight a candidate&rsquo;s positive career milestones. Presumably, candidates applied the small-town values they learned to reach their achievements.</p>
                  <p><strong>Watch Bill Clinton shake hands with President John Kennedy:</strong></p>
                  <div id="ad-smalltown-diploma-input-education_video" style="width: 266px; height: 200px;"></div>
                </div>
                <div class="choices text single"><ul></ul></div>
                <div class="continue">Continue</div>
              </div>

              <div class="output slate effect-zoom_in" id="ad-smalltown-diploma">
                <div id="ad-smalltown-diploma-place"></div>
                <div id="ad-smalltown-diploma-name" class="user-name"></div>
                <div id="ad-smalltown-diploma-year"></div>
              </div>

              <!-- ################################################################################ -->

              <div class="input" id="ad-smalltown-positive_slogan-input">
                <h2 class="instructions"><span>What is your vision for America? Make a slogan.</span></h2>
                <div class="education">
                  <p>Brevity thrives in advertising. Make your slogan punchy and positive!</p>
                  <p><strong>Watch the catchy &lsquo;I Like Ike&rsquo; ad for Dwight Eisenhower:</strong></p>
                  <div id="ad-smalltown-positive_slogan-input-education_video" style="width: 266px; height: 200px;"></div>
                </div>
                <div class="choices text single"><ul></ul></div>
                <div class="continue">Continue</div>
              </div>

              <div class="output slate" id="ad-smalltown-positive_slogan">
                <div id="ad-smalltown-positive_slogan-name"><span class="user-name"></span></div>
                <div id="ad-smalltown-positive_slogan-text"></div>
                <div id="ad-smalltown-positive_slogan-legal">Paid for by the Campaign to Elect <span class="user-name"></span></div>
                <div id="ad-smalltown-positive_slogan-photo"></div>
              </div>

            </div>

<!--
            #    # ###### ##### #####   ####
            ##  ## #        #   #    # #    #
            # ## # #####    #   #    # #    #
            #    # #        #   #####  #    #
            #    # #        #   #   #  #    #
            #    # ######   #   #    #  ####
-->

            <div class="video-io" id="ad-metro" style="display: none;">

              <div class="input" id="ad-metro-old_photo-input">
                <h2 class="instructions"><span>Choose a photo of your past self,<br>preferably with family.</span></h2>
                <div class="education">
                  <p>Sepia-toned or black-and-white photos from the past can humanize a candidate&rsquo;s appeal.</p>
                  <p><strong>Watch Mitt Romney&rsquo;s 2012 Father&rsquo;s Day web spot:</strong></p>
                  <div id="ad-metro-old_photo-input-education_video" style="width: 266px; height: 150px;"></div>
                </div>
                <div class="choices photos single"><ul></ul></div>
                <div class="continue">Continue</div>
              </div>

              <div class="output photo filter-sepia effect-ken_burns" id="ad-metro-old_photo">
                <div class="filter-fallback"></div>
                <img>
              </div>

              <!-- ################################################################################ -->

              <div class="input" id="ad-metro-hardship_photo-input">
                <h2 class="instructions"><span>What hardship did you overcome?</span></h2>
                <div class="education">
                  <p>Biographical spots highlight a candidate&rsquo;s good qualities that make them fit for the nation&rsquo;s highest office.</p>
                  <p><strong>Watch Bob Dole&rsquo;s 1996 ad on how he overcame his paralysis:</strong></p>
                  <div id="ad-metro-hardship_photo-input-education_video" style="width: 266px; height: 200px;"></div>
                </div>
                <div class="choices photos single"><ul></ul></div>
                <div class="continue">Continue</div>
              </div>

              <div class="output photo filter-sepia effect-burns_ken" id="ad-metro-hardship_photo">
                <div class="filter-fallback"></div>
                <img>
              </div>

              <!-- ################################################################################ -->

              <div class="input" id="ad-metro-trophy-input">
                <h2 class="instructions"><span>What is your proudest achievement?</span></h2>
                <div class="education">
                  <p>Biographical spots highlight a candidate&rsquo;s positive career milestones. Presumably, candidates applied the small-town values they learned to reach their achievements.</p>
                  <p><strong>Watch Bill Clinton shake hands with President John Kennedy:</strong></p>
                  <div id="ad-metro-trophy-input-education_video" style="width: 266px; height: 200px;"></div>
                </div>
                <div class="choices text single"><ul></ul></div>
                <div class="continue">Continue</div>
              </div>

              <div class="output slate effect-zoom_out" id="ad-metro-trophy">
                <div id="ad-metro-trophy-place"></div>
                <div class="user-name"></div>
                <div id="ad-metro-trophy-year"></div>
              </div>

              <!-- ################################################################################ -->

              <div class="input" id="ad-metro-positive_slogan-input">
                <h2 class="instructions"><span>What is your vision for America? Make a slogan.</span></h2>
                <div class="education">
                  <p>Brevity thrives in advertising. Make the slogan punchy and positive!</p>
                  <p><strong>Watch Jimmy Carter&rsquo;s vision for America:</strong></p>
                  <div id="ad-metro-positive_slogan-input-education_video" style="width: 266px; height: 200px;"></div>
                </div>
                <div class="choices text single"><ul></ul></div>
                <div class="continue">Continue</div>
              </div>

              <div class="output slate" id="ad-metro-positive_slogan">
                <div id="ad-metro-positive_slogan-name"><span class="user-name"></span></div>
                <div id="ad-metro-positive_slogan-text"></div>
                <div id="ad-metro-positive_slogan-legal">Paid for by the Campaign to Elect <span class="user-name"></span></div>
                <div id="ad-metro-positive_slogan-photo"></div>
              </div>

            </div>

<!--
             ####  #####  ###### #####  ###### #    # ##### #   ##   #       ####
            #    # #    # #      #    # #      ##   #   #   #  #  #  #      #
            #      #    # #####  #    # #####  # #  #   #   # #    # #       ####
            #      #####  #      #    # #      #  # #   #   # ###### #           #
            #    # #   #  #      #    # #      #   ##   #   # #    # #      #    #
             ####  #    # ###### #####  ###### #    #   #   # #    # ######  ####
-->

            <div class="video-io" id="ad-credentials" style="display: none;">

              <div class="input" id="ad-credentials-photo-input">
                <h2 class="instructions"><span>Choose a photo of yourself.</span></h2>
                <div class="education">
                  <p>A photo doesn&rsquo;t need to be altered to denote negativity. Sometimes, juxtaposition of two incongruous elements is enough.</p>
                  <p><strong>Watch a Richard Nixon ad mix images of the Vietnam War with Hubert Humphrey at a convention:</strong></p>
                  <div id="ad-credentials-photo-input-education_video" style="width: 266px; height: 200px;"></div>
                </div>
                <div class="choices photos single"><ul></ul></div>
                <div class="continue">Continue</div>
              </div>

              <div class="output photo filter-monochrome effect-zoom_in" id="ad-credentials-photo">
                <img>
              </div>

              <!-- ################################################################################ -->

              <div class="input" id="ad-credentials-likes-input">
                <h2 class="instructions"><span>Choose two things you like. The more different they are, the better.</span></h2>
                <div class="education">
                  <p>A candidate loses credibility when he or she is seen as &lsquo;flip-flopper.&rsquo;</p>
                  <p><strong>Watch a George W. Bush ad use John Kerry&rsquo;s windsurfing as a flip-flop visual:</strong></p>
                  <div id="ad-credentials-likes-input-education_video" style="width: 266px; height: 200px;"></div>
                </div>
                <div class="chosen_choices"><h4>Your Choices:</h4><ul></ul></div>
                <div class="choices text likes double"><ul></ul></div>
                <div class="continue">Continue</div>
              </div>

              <div class="output slate likes" id="ad-credentials-likes">
                <div id="ad-credentials-likes-like1"></div>
                <div id="ad-credentials-likes-like2"></div>
              </div>

              <!-- ################################################################################ -->

              <div class="input" id="ad-credentials-party_photo-input">
                <h2 class="instructions"><span>Choose a vacation or party photo.</span></h2>
                <div class="education">
                  <p>Candidates also lose credibility if they look unpresidential.</p>
                  <p><strong>Watch a George Bush ad turn Michael Dukakis&rsquo; staged tank ride into a PR nightmare:</strong></p>
                  <div id="ad-credentials-party_photo-input-education_video" style="width: 266px; height: 200px;"></div>
                </div>
                <div class="choices photos single"><ul></ul></div>
                <div class="continue">Continue</div>
              </div>

              <div class="output photo effect-burns_ken" id="ad-credentials-party_photo">
                <img>
              </div>

              <!-- ################################################################################ -->

              <div class="input no_education" id="ad-credentials-negative_slogan-input">
                <h2 class="instructions"><span>Sling some mud. Make a negative slogan against yourself. The catchier, the better.</span></h2>
                <div class="choices text single"><ul></ul></div>
                <div class="continue">Continue</div>
              </div>

              <div class="output slate" id="ad-credentials-negative_slogan">
                <div id="ad-credentials-negative_slogan-text"></div>
                <div id="ad-credentials-negative_slogan-legal">Paid for by the Campaign to Not Elect <span class="user-name"></span>.</div>
                <div id="ad-credentials-negative_slogan-photo" class="photo filter-monochrome"></div>
              </div>

            </div>

<!--
             ####  #    #   ##   #####    ##    ####  ##### ###### #####
            #    # #    #  #  #  #    #  #  #  #    #   #   #      #    #
            #      ###### #    # #    # #    # #        #   #####  #    #
            #      #    # ###### #####  ###### #        #   #      #####
            #    # #    # #    # #   #  #    # #    #   #   #      #   #
             ####  #    # #    # #    # #    #  ####    #   ###### #    #
-->

            <div class="video-io" id="ad-character" style="display: none;">

              <div class="input" id="ad-character-photo-input">
                <h2 class="instructions"><span>Choose a photo of yourself.</span></h2>
                <div class="education">
                  <p>Heavily manipulated, black-and-white images can denote negativity.</p>
                  <p><strong>Watch George Bush use revolving doors as a metaphor in 1988:</strong></p>
                  <div id="ad-character-photo-input-education_video" style="width: 266px; height: 200px;"></div>
                </div>
                <div class="choices photos single"><ul></ul></div>
                <div class="continue">Continue</div>
              </div>

              <div class="output photo filter-negativity effect-ken_burns" id="ad-character-photo">
                <div class="filter-fallback"></div>
                <img>
              </div>

              <!-- ################################################################################ -->

              <div class="input" id="ad-character-out_of_context_quote-input">
                <h2 class="instructions"><span>Choose an out-of-context newspaper quote.</span></h2>
                <div class="education">
                  <p>Journalists are used as third-party sources to lend credibility to an attack ad&rsquo;s message.</p>
                  <p><strong>Only newspapers appear in this George McGovern attack ad:</strong></p>
                  <div id="ad-character-out_of_context_quote-input-education_video" style="width: 266px; height: 200px;"></div>
                </div>
                <div class="choices text single"><ul></ul></div>
                <div class="continue">Continue</div>
              </div>

              <div class="output slate" id="ad-character-out_of_context_quote">
                <div id="ad-character-out_of_context_quote-text"></div>
              </div>

              <!-- ################################################################################ -->

              <div class="input" id="ad-character-backfire_quote-input">
                <h2 class="instructions"><span>Pick out something you said.</span></h2>
                <div class="education">
                  <p>A candidate&rsquo;s own words&mdash;self-incrimination&mdash;is used to attack his or her credibility.</p>
                  <p><strong>Watch Barack Obama use John McCain&rsquo;s words against him, three times:</strong></p>
                  <div id="ad-character-backfire_quote-input-education_video" style="width: 266px; height: 200px;"></div>
                </div>
                <div class="choices text single"><ul></ul></div>
                <div class="continue">Continue</div>
              </div>

              <div class="output slate" id="ad-character-backfire_quote">
                <div id="ad-character-backfire_quote-photo" class="photo filter-negativity"></div>
                <div id="ad-character-backfire_quote-text"></div>
              </div>

              <!-- ################################################################################ -->

              <div class="input no_education" id="ad-character-negative_slogan-input">
                <h2 class="instructions"><span>Sling some mud. Make a negative slogan against yourself. The catchier, the better.</span></h2>
                <div class="choices text single"><ul></ul></div>
                <div class="continue">Continue</div>
              </div>

              <div class="output slate" id="ad-character-negative_slogan">
                <div id="ad-character-negative_slogan-text"></div>
                <div id="ad-character-negative_slogan-legal">Paid for by the Campaign to Not Elect <span class="user-name"></span>.</div>
                <div id="ad-character-negative_slogan-photo" class="photo filter-monochrome"></div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <hr>

      <footer>
        <ul>
          <li><a id="credits_button" href="#credits">Credits</a></li>
        </ul>
      </footer>

      <div id="credits" style="display: none;">
        <h2>Credits</h2>

        <ul>
          <li>Voiceover: Don McClurkin</li>
          <li>Video Production, Editing, and Content: Joshua Barajas &amp; Vanessa Dennis</li>
          <li>Stock Photos:
            <ul class="stock_photos_credits clearfix">
              <!-- Past Self -->
              <li><a href="http://www.flickr.com/photos/85037140@N00/7186107890/">Bernard Oh &mdash; P1280276</a></li>
              <li><a href="http://www.flickr.com/photos/45495368@N07/4735425883/">Anton Novoselov &mdash; Execution</a></li>
              <li><a href="http://www.flickr.com/photos/gregarch2/4264891052/">Diane Gregg &mdash; The Brat Pack</a></li>
              <li><a href="http://www.flickr.com/photos/90376147@N00/39932566/">Kelly &mdash; Dancing</a></li>
              <li><a href="http://www.flickr.com/photos/23748404@N00/4056272505/">Adam Currell &mdash; Found Photo Aug 67</a></li>
              <li><a href="http://www.flickr.com/photos/94261979@N00/82937675/">Shavar Ross &mdash; Passion Eyes</a></li>
              <!-- Past Self (Patriotic, with Family) -->
              <li><a href="http://www.flickr.com/photos/46386324@N04/4264891038/">Diane Gregg &mdash; Musical and Patriotic Too</a></li>
              <li><a href="http://www.flickr.com/photos/10101046@N06/3876364046/">Beverly &amp; Pack &mdash; Welcome Home Parade&hellip;</a></li>
              <li><a href="http://www.flickr.com/photos/nathancongleton/4734063240/">Nathan Congleton &mdash; Pushing On</a></li>
              <li><a href="http://www.flickr.com/photos/84992687@N00/2641372156/">Jack (jmtimages) &mdash; young patriot</a></li>
              <li><a href="http://www.flickr.com/photos/7202153@N03/4418450215/">Alan English &mdash; Bridwell Riders&hellip;</a></li>
              <li><a href="http://www.flickr.com/photos/80081080@N00/3690292706/">Drew Bennett &mdash; So 'Cited!</a></li>
              <!-- Hardship -->
              <li><a href="http://www.flickr.com/photos/msvg/5597159832/in/photostream/">Michael Gil &mdash; Yugo GV</a></li>
              <li><a href="http://www.flickr.com/photos/chris-short/6750056731/in/photostream/">Chris Short &mdash; First World Problems</a></li>
              <li><a href="http://www.flickr.com/photos/leejordan/2203543685/">Lee Jordan &mdash; Spilt Milk</a></li>
              <li><a href="http://www.flickr.com/photos/face_it/1152018541/">Gabriela Camerotti &mdash; Sad Scene</a></li>
              <li><a href="http://www.flickr.com/photos/imageme/2274473425/in/photostream/">matt &mdash; xmas</a></li>
              <li><a href="http://www.flickr.com/photos/jocke66/2317876711/in/photostream/">Joakim Jardenberg &mdash; garantirep?</a></li>
              <!-- Irresponsible -->
              <li><a href="http://www.flickr.com/photos/angusmcdiarmid/4601824905/in/photostream/">Angus McDiarmid &mdash; Anna Mae Craven</a></li>
              <li><a href="http://www.flickr.com/photos/angusmcdiarmid/3574155464/in/photostream/">Angus McDiarmid &mdash; Preston H Litz, Jr</a></li>
              <li><a href="http://www.flickr.com/photos/34120957@N04/3478789765/">Alex E. Proimos &mdash; ARRESTED, DUI, Las Vegas</a></li>
              <li><a href="http://www.flickr.com/photos/raulc/83548509/">Ra&uacute;l &mdash; The party ends</a></li>
              <li><a href="http://www.flickr.com/photos/tonydeifell/171866633/">Tony Deifell &mdash; wdydwyd? Burning Man '05</a></li>
              <li><a href="http://www.flickr.com/photos/feastoffools/50138725/">Fausto Fernos &mdash; Charlie and his friend Derek</a></li>
              <!-- Headshots -->
              <li><a href="http://www.flickr.com/photos/isaacsingleton/2912949265/">Isaac Singleton &mdash; William Brooks</a></li>
              <li><a href="http://www.flickr.com/photos/ahdchild/5616723216/in/photostream/">Ahd Photography &mdash; What's gotten into him</a></li>
              <li><a href="http://www.flickr.com/photos/rajarshi/3631904458/in/photostream/">Rishi S &mdash; Headshot</a></li>
              <li><a href="http://www.flickr.com/photos/ammgramm/6328685013/in/photostream/">ammgramm &mdash; Tronies #10</a></li>
              <li><a href="http://www.flickr.com/photos/dawolf/7510738276/in/photostream/">dawolf- &mdash; Fin de siècle</a></li>
              <li><a href="http://www.flickr.com/photos/drongo3/4321640418/in/photostream/">Mom Smooch &mdash; Drongowski</a></li>
            </ul>
          </li>
        </ul>

        <h3><em>Small-town</em> Biographical Ad</h3>
        <ul>
          <li>Music: <a href="http://archive.org/details/track_2">Christopher Brozek &mdash; Part 2</a></li>
          <li>Population sign: <a href="http://www.flickr.com/photos/graeme_pow/6137177630/sizes/l/in/photostream/">Graeme Pow &mdash; Augusta Population 1550</a></li>
        </ul>

        <h3><em>Metro</em> Biographical Ad</h3>
        <ul>
          <li>Music: <a href="http://archive.org/details/CharlyMulliganEricaBailey">Charly Mulligan, Erica Bailey &mdash; An Optimistic Moment</a></li>
          <li>Sound: <a href="http://www.youtube.com/watch?v=XyoUunJJ6_Y">Jojikiba &mdash; Cymbal Roll Sound Effect</a></li>
          <li>Sound: <a href="http://www.freesound.org/people/davidjwoll/sounds/85486/">davidjwoll &mdash; Cymbal Roll Loud</a></li>
        </ul>

        <h3><em>Character</em> Attack Ad</h3>
        <ul>
          <li>Video: <a href="http://www.youtube.com/watch?v=8vjxPTqMXuw">PBS NewsHour News Wrap: New Orleans Police Ordered to Clean Up Corruption (July 24, 2012)</a></li>
          <li>Music: <a href="http://archive.org/details/20101023HeavyAmsStrings">Nickleus &mdash; 20101023 Heavy Ams Strings</a></li>
          <li>Music: <a href="http://archive.org/details/RichardWalkerQuietScaryPianoNoise24mins">Richard Walker &mdash; Quiet Scary Piano Noise 24 mins (2004)</a></li>
        </ul>

        <h3><em>Credentials</em> Attack Ad</h3>
        <ul>
          <li>Music: <a href="http://archive.org/details/Storm_2">Ourmedia, OperaLab &mdash; Storm</a></li>
          <li>Video: <a href="http://archive.org/details/JimWilliamsTheStorm">Jim Williams &mdash; The Storm</a></li>
        </ul>
      </div>

    </div>
  </body>

  <script src="js/lib/jquery-1.8.2.min.js"></script>
  <script src="js/lib/jquery.cycle.all.js"></script>
  <script src="js/lib/jquery.bpopup-0.7.0.min.js"></script>
  <script src="js/lib/jquery.imagesloaded.min.js"></script>
  <script src="js/lib/popcorn-complete.min.js"></script>

  <?php
  // Suck in passed data for video replay.
  if ($_REQUEST['adlib_data'] && $_REQUEST['adlib_data'] !== '')
  {
    // Set the mode of playback to 'watch', so that inputs and input opportunities won't fire.
    $playback_mode = 'watch';
    
    // Get the passed-in parameters and set them.
    $data_unclean = base64_decode($_REQUEST[ "adlib_data" ]);
    $data_cleaned = str_replace(array( "[", "&", "<", ">", "]" ), "", $data_unclean);
    if (!$data_cleaned)
      $data_cleaned = "{}";
    echo "<script>window.adlib_data = " . $data_cleaned . ";</script>";
  }
  else
  {
    $playback_mode = 'create';
  }
  ?>
  <script>
  // Set some starter variables from PHP.
  $(document).ready(function() {
    window.FB_app_ID  = '<?php echo $FB_APP_ID; ?>';
    window.FB_app_url = '<?php echo $FB_APP_URL; ?>';
    window.app_url    = '<?php echo $APP_URL; ?>';

    window.playback_mode = '<?php echo $playback_mode; ?>';
    window.date = '<?php date_default_timezone_set('UTC'); echo date(DATE_RFC822); ?>';

    <?php if ($playback_mode !== 'watch') { ?>
    window.adlib_data['userIP'] = '<?php echo $_SERVER['REMOTE_ADDR']; ?>';
    <?php } ?>
  });
  </script>
  
  <script src="js/app.js"></script>

</html>
