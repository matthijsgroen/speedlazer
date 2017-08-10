import Crafty from "crafty";
import "../components/connect";
import "../components/props";

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
    this.textColor(newState.color).text(`Player ${newState.playerId}`);
    this.secondLine.textColor(newState.color).text("Press fire to start");
  }
});

const playerUIs = [];

const updateUIs = players => {
  for (let i in players) {
    let playerUI = playerUIs[i];
    const playerProps = players[i];
    if (!playerUI) {
      playerUI = Crafty.e("Props, PlayerState").playerState(i);
      playerUIs.push(playerUI);
    }
    playerUI.props(playerProps);
  }
  if (playerUIs.length > players.length) {
    for (let c = players.length; c < playerUIs.length; c++) {
      playerUIs[c].destroy();
    }
    playerUIs.splice(players.length);
  }
};

Crafty.e("PlayerUIs, Connect")
  .bind("InitProps", props => updateUIs(props.players))
  .bind("UpdatedProps", props => updateUIs(props.players))
  .mapState(state => ({
    players: state.players
  }));
