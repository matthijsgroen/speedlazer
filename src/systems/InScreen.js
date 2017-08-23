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
        const inBounds = this.x < xLimit;
        if (!inBounds) this.destroy();
      });
    }
  },
  {},
  false
);

export default Crafty.s(InScreen);
