import Crafty from "crafty";
import ControlScheme from "../components/control-scheme";
import Gamepad from "../components/Gamepad";

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

  const GAMEPAD_ANALOG_PRECISION = 10;

  Crafty.e(Gamepad, ControlScheme)
    .bind("GamepadKeyChange", function(e) {
      if (e.button === 0) this.fire(e.value);
    })
    .bind("GamepadAxisChange", function(e) {
      const raw = Math.round(e.value * GAMEPAD_ANALOG_PRECISION);
      if (e.axis === 0) {
        // left stick, left/right
        if (!this._previousXAxis || this._previousXAxis !== raw) {
          this.right(raw / GAMEPAD_ANALOG_PRECISION);
        }
        this._previousXAxis = raw;
      }
      if (e.axis === 1) {
        // left stick, up/down
        if (!this._previousYAxis || this._previousYAxis !== raw) {
          this.down(raw / GAMEPAD_ANALOG_PRECISION);
        }
        this._previousYAxis = raw;
      }
    })
    .gamepad(0)
    .controlScheme("gamepad1");
};

export default registerControls;
