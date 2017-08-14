import Crafty from "crafty";

Crafty.c("Props", {
  init: function() {
    this.state = {};
    this.bind("InitProps", this.props);
    this.bind("UpdatedProps", this.props);
    this.updateState = this.updateState || function() {};
  },
  props: function(newState) {
    if (newState === this.state) return this;
    this.updateState(newState);
    this.state = newState;
    return this;
  }
});
