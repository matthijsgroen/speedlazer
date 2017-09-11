import Crafty from "crafty";
import Connect from "../components/connect";
import Props from "../components/props";
import * as constants from "src/state/players/constants";

const PlayerState = "PlayerState";

Crafty.c(PlayerState, {
  init: function() {
    this.requires("2D, DOM, Text");
  },
  playerState: function(index) {
    this.displayIndex = index;
    this.attr({
      x: 20 + index * 300,
      y: 20,
      w: 300,
      h: 30
    }).textFont({ size: "20px", weight: "bold" });
    this.secondLine = Crafty.e("2D, DOM, Text")
      .attr({
        x: 20 + index * 300,
        y: 40,
        w: 300,
        h: 30
      })
      .textFont({ size: "20px", weight: "bold" });
    this.attach(this.secondLine);
    return this;
  },
  updateState: function(newState) {
    this.textColor(newState.player.color);
    this.secondLine.textColor(newState.player.color);
    switch (newState.player.state) {
      case constants.STATE_NO_CONTROLS:
        this.text(`Player ${newState.player.playerId}`);
        this.secondLine.text("Press fire to start");
        return;
      case constants.STATE_PLAYING:
        this.text(`Score: ${newState.player.score}`);
        this.secondLine.text(`Health: ${newState.ship.health}`);
        return;
    }
  }
});

const playerUIs = [];

const updateUIs = props => {
  const playerArray = Object.values(props.players);
  const shipsArray = Object.values(props.ships);

  for (let i in playerArray) {
    let playerUI = playerUIs[i];
    const player = playerArray[i];
    const ship = shipsArray.find(s => s.playerId === player.playerId);
    const playerProps = { player, ship };
    if (!playerUI) {
      playerUI = Crafty.e(Props, PlayerState).playerState(i);
      playerUIs.push(playerUI);
    }
    playerUI.props(playerProps);
  }
  if (playerUIs.length > playerArray.length) {
    for (let c = playerArray.length; c < playerUIs.length; c++) {
      playerUIs[c].destroy();
    }
    playerUIs.splice(playerArray.length);
  }
};

Crafty.c("PlayerUIs", {
  remove: function() {
    if (playerUIs.length > 0) {
      for (let c = 0; c < playerUIs.length; c++) {
        playerUIs[c].destroy();
      }
      playerUIs.splice(0);
    }
  }
});

const createPlayerUI = () =>
  Crafty.e("PlayerUIs", Connect)
    .bind("InitProps", props => updateUIs(props))
    .bind("UpdatedProps", props => updateUIs(props))
    .mapState(state => ({
      players: state.players,
      ships: state.ships
    }));

export default createPlayerUI;
