    var tag = document.createElement('script');
    tag.id = 'iframe-demo';
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    
    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('existing-iframe-example', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        events: {
          'onReady': onPlayerReady
        }
      });
    }
    

    var player;
    var duration;
    var vidClock;
    var seeking = false;

    function onYouTubeIframeAPIReady() {
      player = new YT.Player('existing-iframe-example', {
        height: '390',
        width: '640',
        videoId: 'NlOF03DUoWc',
        events: {
          'onReady': onPlayerReady
        }
      });
    }
    


    // BOTON PLAY VIDEO
    $('#play').on('click', function () {
        player.playVideo();
    });

    // BOTON PAUSA VIDEO
    $('#pause').on('click', function () {
        player.pauseVideo();
    });

    // BOTON TOGGLE MUTE VIDEO
    $('#mute-toggle').on('click', function() {
        var mute_toggle = $(this);

        if(player.isMuted()){
            player.unMute();
            mute_toggle.addClass('mute')
        }
        else{
            player.mute();
            mute_toggle.removeClass('mute')
        }
    });

    // BOTONES PLAYLIST
    $('.selecVideo').on('click', function () {
      $('.selecVideo').removeClass('currentvideo');
      $(this).addClass('currentvideo');
      player.stopVideo();
      handleState(1) ;
      var $seekSlider = $('.progress');
      $seekSlider.animate({
              'width': '0%'
            }, 500, 'linear');
      var url = $(this).attr('data-video-id');
      player.cueVideoById(url);

    });

    // BARRA DE PROGRESO
    function onPlayerReady(event) {
        player.addEventListener('onStateChange', function(state) {
          handleState(state.data);
        });
    }
    function handleState(state) {
      var $seekSlider = $('.progress');
      var $seekContainer = $('.progress-container');
      if (state == 1) {
        duration = player.getDuration();
        vidClock = setInterval(function() {
          if ((state == 1) && (seeking == false)) {
            var time = player.getCurrentTime();
            var percent = (time / duration) * 100;
            $seekSlider.animate({
              'width': percent + '%'
            }, 0, 'linear');

          }
        }, 0);
      }
    }