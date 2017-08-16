import store from "../state";
import Crafty from "crafty";

const Connect = "Connect";

Crafty.c(Connect, {
  init: function() {
    this._unsubscribeConnect = () => {};
  },
  removed: function() {
    this._unsubscribeConnect();
  },
  mapState: function(mapper) {
    this._stateMapper = mapper;
    this._unsubscribeConnect = store.subscribe(() => {
      const state = store.getState();
      const newProps = this._stateMapper(state);
      this.trigger("UpdatedProps", newProps);
    });
    const state = store.getState();
    const newProps = this._stateMapper(state);
    this.trigger("InitProps", newProps);
    return this;
  }
});

export default Connect;
