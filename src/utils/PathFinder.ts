import Graph from "graphology";
import BusStop from "../database/interfaces/BusStop";
import dijkstra from "graphology-shortest-path/dijkstra";
import Coordinate from "../database/interfaces/Coordinate";
import Database from "../database";
import Stop from "../database/models/stops.entity";
import Bus from "../database/models/bus.entity";

export default class PathFinder {
  private static readonly WEIGHT_BETWEEN_TWO_SAME_BUS_STOPS = 1;
  private static graph: Graph;

  private static coordinate(latitude: number, longitude: number): Coordinate {
    return { latitude, longitude };
  }

  static async getPath(start: Coordinate, end: Coordinate): Promise<BusStop[]> {
    /**
     * TODO: do we construct the graph at each call of the function or only once on the starting of the application ?
     */

    const graphe = await this.generate();

    graphe.addNode("start", { ...start });
    graphe.forEachNode((node, attributes) => {
      if (node == "start") return;
      const distance = this.distance(start, {
        latitude: attributes.latitude,
        longitude: attributes.longitude,
      });
      graphe.addEdge(node, "start", {
        weight: distance,
      });
    });

    graphe.addNode("end", { ...end });
    graphe.forEachNode((node, attributes) => {
      if (node == "end") return;
      const distance = this.distance(end, {
        latitude: attributes.latitude,
        longitude: attributes.longitude,
      });
      graphe.addEdge(node, "end", {
        weight: distance,
      });
    });

    graphe.dropUndirectedEdge("start", "end");
    graphe.addEdge("start", "end", { weight: 10000000 });

    const result = dijkstra.bidirectional(graphe, "start", "end", "weight");

    console.log(result);

    return [];
  }

  private static toRadians(degree: number): number {
    let one_deg = Math.PI / 180;
    return one_deg * degree;
  }

  private static distance(point1: Coordinate, point2: Coordinate): number {
    const lat1 = this.toRadians(point1.latitude);
    const long1 = this.toRadians(point1.longitude);
    const lat2 = this.toRadians(point2.latitude);
    const long2 = this.toRadians(point2.longitude);

    let dlong = long2 - long1;
    let dlat = lat2 - lat1;

    let ans =
      Math.pow(Math.sin(dlat / 2), 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlong / 2), 2);

    ans = 2 * Math.asin(Math.sqrt(ans));

    let R = 6371;

    ans = ans * R;

    return ans * 1000;
  }

  private static async generate(): Promise<Graph> {
    const graphe = new Graph({
      type: "undirected",
      multi: false,
      allowSelfLoops: false,
    });

    const buses = await Database.DataSource.getRepository(Bus).find();

    buses.forEach((bus) => {
      bus.stops.forEach((stop, stopIndex) => {
        graphe.addNode(bus.name + stop.id, {
          latitude: stop.latitude,
          longitude: stop.longitude,
        });

        if (stopIndex !== -1)
          graphe.addEdge(
            bus.name + stop.id,
            bus.name + bus.stops[stopIndex - 1].id,
            { weight: this.WEIGHT_BETWEEN_TWO_SAME_BUS_STOPS }
          );

        graphe.forEachNode((node, attributes) => {
          const nodeId = node;

          if (nodeId.startsWith(bus.name)) return;

          const distance = this.distance(
            this.coordinate(attributes.latitude, attributes.longitude),
            this.coordinate(stop.latitude, stop.longitude)
          );

          graphe.addEdge(nodeId, bus.name + stop.id, {
            weight: distance,
          });
        });
      });
    });

    return graphe;
  }
}
