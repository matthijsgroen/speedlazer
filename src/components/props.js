import Crafty from "crafty";

const Props = "Props";

Crafty.c(Props, {
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

export default Props;
