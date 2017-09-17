import Crafty from "crafty";
import Connect from "../components/connect";
import Props from "../components/props";
import InScreen from "../systems/InScreen";

InScreen.start();

const playerShips = [];
const ControllableShip = "ControllableShip";

Crafty.c(ControllableShip, {
  init: function() {
    this.bind("UpdatedProps", this.controlShip);
  },
  controlShip: function({ controls }) {
    const xAxis = controls.right - controls.left;
    const yAxis = controls.down - controls.up;
    this.attr({
      vx: xAxis * 200,
      vy: yAxis * 200
    });
  }
});

const WeaponSystems = "WeaponSystems";

Crafty.c(WeaponSystems, {
  init: function() {
    this.bind("UpdatedProps", this.fireWeapons);
  },
  remove: function() {
    this.fireWeapon = false;
    clearInterval(this.fireInterval);
  },
  fireWeapons: function({ controls }) {
    if (controls.fire && !this.fireWeapon) {
      this.fireWeapon = true;
      this.fireInterval = setInterval(() => {
        this.shoot();
      }, 100);
    } else if (!controls.fire && this.fireWeapon) {
      this.fireWeapon = false;
      clearInterval(this.fireInterval);
    }
  },
  shoot: function() {
    Crafty.e("2D, WebGL, Color, Motion, OnlyInScreen")
      .attr({
        x: this.x + this.w,
        y: this.y + this.h / 2,
        vx: 600,
        w: 20,
        h: 5
      })
      .color("#FFDDDD");
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
      shipEntity = Crafty.e(
        [
          "2D",
          "WebGL",
          "Color",
          ControllableShip,
          "Motion",
          Props,
          WeaponSystems
        ].join(",")
      )
        .attr({
          x: 160,
          y: 380,
          w: 30,
          h: 30
        })
        .color(player.color);
      playerShips.push(shipEntity);
    }
    shipEntity.trigger("UpdatedProps", shipProps);
  }
  if (playerShips.length > shipsArray.length) {
    for (let c = shipsArray.length; c < playerShips.length; c++) {
      playerShips[c].destroy();
    }
    playerShips.splice(shipsArray.length);
  }
};

Crafty.e(Connect)
  .bind("InitProps", props => updateShips(props))
  .bind("UpdatedProps", props => updateShips(props))
  .mapState(state => ({
    controls: state.controls,
    players: state.players,
    ships: state.ships
  }));
