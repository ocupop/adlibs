<!doctype html><?php if ($_SERVER["SERVER_NAME"] == 'localhost') { $FB_APP_ID = '461888813829980'; } if ($_SERVER["SERVER_NAME"] == 'ocupopdev.com') { $FB_APP_ID = '331797950244138'; } ?>
  <!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
  <!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
  <!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
  <!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width">

    <title>PBS NewsHour AdMaker 2012</title>

    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="ads.css">

    <script type="text/javascript" src="http://use.typekit.com/dcg5pic.js"></script>
    <script type="text/javascript">try{Typekit.load();}catch(e){}</script>

    <script src="js/lib/modernizr.custom.33487.js"></script>
  </head>
  <body class="<?php if ($_SERVER["SERVER_NAME"] == 'localhost') { echo 'dev'; } ?> ">
    <div id="fb-root"></div>

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

        <div id="video-overlay"></div>

        <div id="video-controls" style="display: none;">
          <span id="play_pause" class="playing">Play</span>
          <span id="mute">Mute</span>
        </div>

        <div id="video" style="width: 800px; height: 450px;"></div>

        <div id="video-mask">
          <div class="slide" id="title_card">
            <h2>Make Your Own<strong>Campaign Ads</strong></h2>
            <h3 id="login-loading" class="active"></h3>
            <h3 id="login-logged_out">
              <div class="instructions">
                <div class="fb-login-button" data-size="xlarge" scope="user_about_me,user_checkins,user_education_history,user_hometown,user_location,user_photos,user_likes,user_relationships,user_status,user_work_history"></div>
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

          <div class="slide" id="video_chooser">
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

          <div id="video-contents">

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

              <div class="output photo filter-sepia effect-ken_burns" id="ad-smalltown-old_photo"><div class="filter-fallback"></div></div>

              <!-- ################################################################################ -->

              <div class="input no_education" id="ad-smalltown-hometown-input">
                <h2 class="instructions"><span>Where did you grow up?</span></h2>
                <div class="choices text single large"><ul></ul></div>
                <div class="continue">Continue</div>
              </div>

              <div class="output slate effect-burns_ken" id="ad-smalltown-hometown">
                <div id="ad-smalltown-hometown-name-wrapper">
                  <div id="ad-smalltown-hometown-name"></div>
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
                <div id="ad-smalltown-diploma-school"></div>
                <div id="ad-smalltown-diploma-name" class="user-name"></div>
                <div id="ad-smalltown-diploma-year"></div>
              </div>

              <!-- ################################################################################ -->

              <div class="input" id="ad-smalltown-wrapup-input">
                <h2 class="instructions"><span>What is your vision for America? Make a slogan.</span></h2>
                <div class="education">
                  <p>Brevity thrives in advertising. Make your slogan punchy and positive!</p>
                  <p><strong>Watch the catchy &lsquo;I Like Ike&rsquo; ad for Dwight Eisenhower:</strong></p>
                  <div id="ad-smalltown-wrapup-input-education_video" style="width: 266px; height: 200px;"></div>
                </div>
                <div class="choices text single"><ul></ul></div>
                <div class="continue">Continue</div>
              </div>

              <div class="output slate" id="ad-smalltown-wrapup">
                <div id="ad-smalltown-wrapup-name"><span class="user-name"></span></div>
                <div id="ad-smalltown-wrapup-slogan"></div>
                <div id="ad-smalltown-wrapup-legal">Paid for by the Campaign to Elect <span class="user-name"></span></div>
                <div id="ad-smalltown-wrapup-photo"></div>
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
                <h2 class="instructions"><span>Choose a photo of your past self, preferably with family.</span></h2>
                <div class="education">
                  <p>Sepia-toned or black-and-white photos from the past can humanize a candidate&rsquo;s appeal.</p>
                  <p><strong>Watch Mitt Romney&rsquo;s 2012 Father&rsquo;s Day web spot:</strong></p>
                  <div id="ad-metro-old_photo-input-education_video" style="width: 266px; height: 150px;"></div>
                </div>
                <div class="choices photos single"><ul></ul></div>
                <div class="continue">Continue</div>
              </div>

              <div class="output photo filter-sepia effect-ken_burns" id="ad-metro-old_photo"><div class="filter-fallback"></div></div>

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

              <div class="output photo filter-sepia effect-burns_ken" id="ad-metro-hardship_photo"><div class="filter-fallback"></div></div>

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
                <div id="ad-metro-trophy-school"></div>
                <div class="user-name"></div>
                <div id="ad-metro-trophy-year"></div>
              </div>

              <!-- ################################################################################ -->

              <div class="input" id="ad-metro-wrapup-input">
                <h2 class="instructions"><span>What is your vision for America? Make a slogan.</span></h2>
                <div class="education">
                  <p>Brevity thrives in advertising. Make the slogan punchy and positive!</p>
                  <p><strong>Watch Jimmy Carter&rsquo;s vision for America:</strong></p>
                  <div id="ad-metro-wrapup-input-education_video" style="width: 266px; height: 200px;"></div>
                </div>
                <div class="choices text single"><ul></ul></div>
                <div class="continue">Continue</div>
              </div>

              <div class="output slate" id="ad-metro-wrapup">
                <div id="ad-metro-wrapup-name"><span class="user-name"></span></div>
                <div id="ad-metro-wrapup-slogan"></div>
                <div id="ad-metro-wrapup-legal">Paid for by the Campaign to Elect <span class="user-name"></span></div>
                <div id="ad-metro-wrapup-photo"></div>
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

              <div class="output photo effect-zoom_in" id="ad-credentials-photo"></div>

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

              <div class="output photo effect-burns_ken" id="ad-credentials-party_photo"></div>

              <!-- ################################################################################ -->

              <div class="input no_education" id="ad-credentials-wrapup-input">
                <h2 class="instructions"><span>Sling some mud. Make a negative slogan against yourself. The catchier, the better.</span></h2>
                <div class="choices text single"><ul></ul></div>
                <div class="continue">Continue</div>
              </div>

              <div class="output slate" id="ad-credentials-wrapup">
                <div id="ad-credentials-wrapup-name"><span class="user-name"></span></div>
                <div id="ad-credentials-wrapup-slogan"></div>
                <div id="ad-credentials-wrapup-legal">Paid for by the Campaign to Elect <span class="user-name"></span>.</div>
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

              <div class="output photo filter-negativity effect-ken_burns" id="ad-character-photo"><div class="filter-fallback"></div></div>

              <!-- ################################################################################ -->

              <div class="input" id="ad-character-out_of_context_quote-input">
                <h2 class="instructions"><span>Choose an out-of-context newspaper quote.</span></h2>
                <div class="education">
                  <p>Journalists are used as third-party sources to lend credibility to an attack ad&rsquo;s message.</p>
                  <p><strong>Only newspapers appear in this George McGovern attack ad:</strong></p>
                  <div id="ad-character-out_of_context_quote-input-education_video" style="width: 266px; height: 200px;"></div>
                </div>
                <div class="choices text single large"><ul></ul></div>
                <div class="continue">Continue</div>
              </div>

              <div class="output slate" id="ad-character-out_of_context_quote">
                <div id="ad-character-out_of_context_quote-text"></div>
              </div>

              <!-- ################################################################################ -->

              <div class="input" id="ad-character-incriminating_quote-input">
                <h2 class="instructions"><span>Pick out something you said.</span></h2>
                <div class="education">
                  <p>A candidate&rsquo;s own words&mdash;self-incrimination&mdash;is used to attack his or her credibility.</p>
                  <p><strong>Watch Barack Obama use John McCain&rsquo;s words against him, three times:</strong></p>
                  <div id="ad-character-incriminating_quote-input-education_video" style="width: 266px; height: 200px;"></div>
                </div>
                <div class="choices text single"><ul></ul></div>
                <div class="continue">Continue</div>
              </div>

              <div class="output slate" id="ad-character-incriminating_quote">
                <div id="ad-character-incriminating_quote-text"></div>
              </div>

              <!-- ################################################################################ -->

              <div class="input no_education" id="ad-character-wrapup-input">
                <h2 class="instructions"><span>Sling some mud. Make a negative slogan against yourself.</span></h2>
                <div class="choices text single"><ul></ul></div>
                <div class="continue">Continue</div>
              </div>

              <div class="output slate" id="ad-character-wrapup">
                <div id="ad-character-wrapup-name"><span class="user-name"></span></div>
                <div id="ad-character-wrapup-slogan"></div>
                <div id="ad-character-wrapup-legal">Paid for by the Campaign to Elect <span class="user-name"></span>.</div>
              </div>

            </div>
          </div>
        </div>

        <div id="video-postroll">
          <span id="watch-ad">Watch Your Ad</span>
          <span id="share-to-fb">Share to Facebook</span>
        </div>
      </div>

      <hr>

    </div>
  </body>

  <script src="js/lib/jquery-1.8.0.min.js"></script>
  <script src="js/lib/jquery.cycle.all.js"></script>
  <script src="js/lib/popcorn-complete.min.js"></script>
  <script src="js/app.js"></script>

  <?php
  // Suck in passed data for video replay.
  $dataDirty = base64_decode($_REQUEST[ "app_data" ]);
  $dataClean = str_replace(array( "[", "&", "<", ">", "]" ), "", $dataDirty);
  if (!$dataClean)
    $dataClean = "{}";
  echo "<script>var facebookData = " . $dataClean . ";</script>";
  ?>

  <script>
  // Set PHP-dependent global variables.
  $(document).ready(function() {
    window.FB_app_ID = <?php echo $FB_APP_ID; ?>;
    adlib.userIP = '<?php echo $_SERVER['REMOTE_ADDR']; ?>';
  });
  </script>

</html>
