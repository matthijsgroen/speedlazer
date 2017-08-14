import Crafty from "crafty";
import "../components/connect";
import "../components/props";
import * as constants from "src/state/players/constants";

Crafty.c("PlayerState", {
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
    this.textColor(newState.color);
    this.secondLine.textColor(newState.color);
    switch (newState.state) {
      case constants.STATE_NO_CONTROLS:
        this.text(`Player ${newState.playerId}`);
        this.secondLine.text("Press fire to start");
        return;
      case constants.STATE_PLAYING:
        this.text(`Score: ${newState.score}`);
        this.secondLine.text(`Health: ${newState.health}`);
        return;
    }
  }
});

const playerUIs = [];

const updateUIs = players => {
  const playerArray = Object.values(players);
  for (let i in playerArray) {
    let playerUI = playerUIs[i];
    const playerProps = playerArray[i];
    if (!playerUI) {
      playerUI = Crafty.e("Props, PlayerState").playerState(i);
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

Crafty.e("PlayerUIs, Connect")
  .bind("InitProps", props => updateUIs(props.players))
  .bind("UpdatedProps", props => updateUIs(props.players))
  .mapState(state => ({
    players: state.players
  }));
