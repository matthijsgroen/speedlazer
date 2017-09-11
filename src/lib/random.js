import alea from "seedrandom/lib/alea";
import "seedrandom";

export const createSeed = () => Math.seedrandom();
export const random = seed => new alea(seed);
export const guid = () =>
  "xxxx-xxxx-4xxx-yxxx".replace(/[xy]/g, c => {
    const r = (random() * 16) | 0;
    const v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
export default random;
