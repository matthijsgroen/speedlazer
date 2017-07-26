const scaleGame = () => {
  const gameElement = document.getElementById("game");
  const stageHeight = gameElement.clientHeight;
  const stageWidth = gameElement.clientWidth;
  const viewportHeight = window.innerHeight - 50;
  const viewportWidth = window.innerWidth;

  const ratioY = viewportHeight / stageHeight;
  const ratioX = viewportWidth / stageWidth;
  const ratio = Math.min(ratioY, ratioX);

  gameElement.style.transform = "scale(" + ratio + ")";
};

export default scaleGame;
