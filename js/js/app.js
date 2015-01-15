$(document).ready(function () {
    $(".transparent").css('height', $("iframe").height())
});


$(function() {
  var iframe = $('#player1')[0];
  var player = $f(iframe);
  var status = $('.status');

  // When the player is ready, add listeners for pause, finish, and playProgress
  player.addEvent('ready', function() {
      player.api('setVolume', 0);
      player.api('seekTo', 24);
  });
})

var glow = $('span.glyphicon.glyphicon-arrow-down');
setInterval(function(){
    glow.toggleClass('glow');
}, 1000);
