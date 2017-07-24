import LevelScript from "app/classes/levelscript";
import Crafty from "crafty";

export default class Stage1 extends LevelScript {
  main() {
    return this.sequence([this.scenery("Intro"), this.forceSpeed(100, 0)]);
  }
}
