import BusStop from "./BusStop";

export default interface BusDetails {
  id: number;
  name: string;
  price: number;
  type: "BUS" | "TRAM" | "TAXI" | "A PIED";
  stops: BusStop[];
}
