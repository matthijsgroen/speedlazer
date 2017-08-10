import Crafty from "crafty";

Crafty.c("Props", {
  init: function() {
    this.state = {};
  },
  props: function(newState) {
    if (newState === this.state) return this;
    this.updateState(newState);
    this.state = newState;
    return this;
  },
  updateState: function() {}
});
