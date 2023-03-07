import Coordinate from "./Coordinate";

export default interface BusStop extends Coordinate {
  id: number;
  name: string;
}
