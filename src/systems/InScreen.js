import Crafty from "crafty";

const InScreen = "InScreen";

Crafty.s(
  InScreen,
  {
    init: function() {},
    removed: function() {
      this.stop();
    },
    start: function() {
      this.bind("EnterFrame", this.checkBoundaries);
    },
    stop: function() {
      this.unbind("EnterFrame", this.checkBoundaries);
    },
    checkBoundaries: function() {
      const xLimit = Crafty.viewport.x + Crafty.viewport.width;
      Crafty("OnlyInScreen").each(function() {
        if (this.x > xLimit) {
          if (!(this.vx < 0)) this.destroy();
        }
        if (this.x + this.w < 0) {
          if (!(this.vx > 0)) this.destroy();
        }
      });
    }
  },
  {},
  false
);

export default Crafty.s(InScreen);
