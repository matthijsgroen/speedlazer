import Crafty from "crafty";
import ControlScheme from "../components/control-scheme";

const registerControls = () => {
  // TODO: Clear earlier control schemes!

  // TODO: Add some smoothing by adding transition with .5 values between frames
  Crafty.e("Keyboard", ControlScheme)
    .bind("KeyDown", function(e) {
      if (e.key === Crafty.keys.SPACE) this.fire(1);
      if (e.key === Crafty.keys.UP_ARROW) this.up(1);
      if (e.key === Crafty.keys.DOWN_ARROW) this.down(1);
      if (e.key === Crafty.keys.LEFT_ARROW) this.left(1);
      if (e.key === Crafty.keys.RIGHT_ARROW) this.right(1);
    })
    .bind("KeyUp", function(e) {
      if (e.key === Crafty.keys.SPACE) this.fire(0);
      if (e.key === Crafty.keys.UP_ARROW) this.up(0);
      if (e.key === Crafty.keys.DOWN_ARROW) this.down(0);
      if (e.key === Crafty.keys.LEFT_ARROW) this.left(0);
      if (e.key === Crafty.keys.RIGHT_ARROW) this.right(0);
    })
    .controlScheme("keyboard1");
};

export default registerControls;
