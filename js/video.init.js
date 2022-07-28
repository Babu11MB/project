 // Get element
 var youtubeEmbedElement = document.getElementById("youtubeEmbed");

 // Add YouTube API script
 var tag = document.createElement("script");
 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName("script")[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 var player;
 var videoId = youtubeEmbedElement.dataset.videoId;
 var startSeconds = 14;
 var endSeconds = 210;

 onYouTubeIframeAPIReady = function () {
 player = new YT.Player("youtubeEmbed", {
     videoId: videoId, // YouTube Video ID
     playerVars: {
     autoplay: 1, // Auto-play the video on load
     autohide: 1, // Hide video controls when playing
     disablekb: 1,
     controls: 0, // Hide pause/play buttons in player
     showinfo: 0, // Hide the video title
     modestbranding: 1, // Hide the Youtube Logo
     loop: 1, // Run the video in a loop
     fs: 0, // Hide the full screen button
     rel: 0,
     enablejsapi: 1,
     start: startSeconds,
     end: endSeconds
     },
     events: {
     onReady: function (e) {
         e.target.mute();
         e.target.playVideo();
     },
     onStateChange: function (e) {
         if (e.data === YT.PlayerState.PLAYING) {
         document.getElementById("youtubeEmbed").classList.add("loaded");
         }

         if (e.data === YT.PlayerState.ENDED) {
         // Loop from starting point
         player.seekTo(startSeconds);
         }
     }
     }
 });
 };