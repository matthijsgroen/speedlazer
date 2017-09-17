import Crafty from "crafty";
import createPlayerUI from "src/ui/player-ui";
import "src/game/ships";
import store from "src/state";
import { random, createSeed } from "src/lib/random";
import { recordStop } from "src/state/replay/actions";
import { endGame } from "src/state/game/actions";

let playerUI;

const getSeed = () =>
  store.getState().gameState.seed || createSeed()

Crafty.c("Enemy", {
  init: function() {
    this.requires("WebGL, 2D, Color, Motion, OnlyInScreen");
    this.color("#0000FF");
    this.attr({ w: 40, h: 40 });
  }
});

let lvlTimer;

Crafty.scene("Gameplay", () => {
  playerUI = createPlayerUI();
  const r = random(getSeed());

  const levelData = Array(10).fill(1).map(() => ({
    ts: Math.round(300 + (r() * 3500)),
    enemy: {
      x: 1040,
      y: Math.round((r() * 600) + 40),
      vx: -Math.round((r() * 100) + 40)
    }
  }))

  let next = levelData.shift();
  let ts = 0;
  lvlTimer = fd => {
    ts += fd.dt;
    if (next && ts > next.ts) {
      Crafty.e("Enemy").attr(next.enemy);

      next = levelData.shift();
      ts = 0;
    }
    if (!next && ts > 10000) {
      store.dispatch(endGame());
      store.dispatch(recordStop());
      console.log("end of gameplay!")
      Crafty.scene("Replay");
      ts = 0;
    }
  }
  Crafty.bind("EnterFrame", lvlTimer);

}, () => {
  playerUI.destroy();
  Crafty.unbind("EnterFrame", lvlTimer);
});

