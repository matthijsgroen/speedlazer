import Crafty from "crafty";
import "../components/connect";
import "../components/props";

const playerShips = [];

Crafty.c("ControllableShip", {
  updateState: function({ controls }) {
    const xAxis = controls.right - controls.left;
    const yAxis = controls.down - controls.up;
    this.attr({
      vx: xAxis * 200,
      vy: yAxis * 200
    });
  }
});

const updateShips = props => {
  const shipsArray = Object.values(props.ships);

  for (let i in shipsArray) {
    let shipEntity = playerShips[i];
    const ship = shipsArray[i];
    const controls = props.controls[ship.controlScheme];
    const player = props.players[ship.playerId];
    const shipProps = { ship, controls, player };
    if (!shipEntity) {
      shipEntity = Crafty.e("2D, WebGL, Color, Props, ControllableShip, Motion")
        .attr({
          x: 160,
          y: 380,
          w: 30,
          h: 30
        })
        .color(player.color);
      playerShips.push(shipEntity);
    }
    shipEntity.props(shipProps);
  }
  if (playerShips.length > shipsArray.length) {
    for (let c = shipsArray.length; c < playerShips.length; c++) {
      playerShips[c].destroy();
    }
    playerShips.splice(shipsArray.length);
  }
};

Crafty.e("Connect")
  .bind("InitProps", props => updateShips(props))
  .bind("UpdatedProps", props => updateShips(props))
  .mapState(state => ({
    controls: state.controls,
    players: state.players,
    ships: state.ships
  }));
