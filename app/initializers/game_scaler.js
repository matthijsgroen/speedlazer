
function scaleGame() {
  const gameElement = document.getElementById('game')
  let stageHeight = gameElement.clientHeight,
    stageWidth = gameElement.clientWidth,
    viewportHeight = window.innerHeight - 50,
    viewportWidth = window.innerWidth

  let ratioY = viewportHeight / stageHeight;
  let ratioX = viewportWidth / stageWidth;
  let ratio = Math.min(ratioY, ratioX);

  gameElement.style.transform = "scale(" + ratio + ")"

  //$('footer').css({ top: (576 * ratio) });
}

window.addEventListener("resize", () => {
  scaleGame();
})

// Handle the fullscreen button
//$(document).on('click', '#cr-stage', function () {
  //if (screenfull.enabled) {
    //screenfull.request($('#theater')[0]);
    //$('body').addClass('fullscreen');
    //scaleGame();
    //document.addEventListener(screenfull.raw.fullscreenchange, function () {
      //if (!screenfull.isFullscreen) {
        //// exit fullscreen code here
        //$('body').removeClass('fullscreen');
        //scaleGame();
      //}
    //});
  //}
//});

setTimeout(function() { scaleGame(); }, 0);
