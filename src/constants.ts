export interface Coordinate {
  latitude: number;
  longitude: number;
}

export interface BusStop extends Coordinate {
  id: number;
  name: string;
}

export interface BusDetails {
  id: number;
  name: string;
  price: number;
  type: "BUS" | "TRAM" | "TAXI" | "A PIED";
  stops: BusStop[];
}

/**
 * https://www.calculator.net/distance-calculator.html?type=3&la1=35.68810597682453&lo1=-0.6234807106895207&la2=35.647816159238985&lo2=-0.6495268344726736&ctype=dec&lad1=38&lam1=53&las1=51.36&lau1=n&lod1=77&lom1=2&los1=11.76&lou1=w&lad2=39&lam2=56&las2=58.56&lau2=n&lod2=75&lom2=9&los2=1.08&lou2=w&x=53&y=35#latlog
 */

export const BUS_STOPS: { [key: string]: BusDetails } = {
  B: {
    id: 0,
    name: "B",
    price: 20,
    type: "BUS",
    stops: [
      {
        id: 8,
        name: "dar bayda",
        latitude: 35.696488190182386,
        longitude: -0.6140231827008712,
      },
      {
        id: 9,
        name: "castor",
        latitude: 35.692291880668876,
        longitude: -0.6186080410410372,
      },
      {
        id: 10,
        name: "basti",
        latitude: 35.68810597682453,
        longitude: -0.6234807106895207,
      },
      {
        id: 11,
        name: "nakhla",
        latitude: 35.686751358796485,
        longitude: -0.6252204775073107,
      },
      {
        id: 12,
        name: "Cirque",
        latitude: 35.684164229452755,
        longitude: -0.6315647378411133,
      },
      {
        id: 13,
        name: "Hmari / Stade / Station",
        latitude: 35.681863884109184,
        longitude: -0.6369736874868328,
      },
      {
        id: 14,
        name: "Between hamri charfawi",
        latitude: 35.68082043199621,
        longitude: -0.6396961114096966,
      },
      {
        id: 15,
        name: "CHARFAOUI",
        latitude: 35.679367595225486,
        longitude: -0.6434174188725347,
      },
      {
        id: 16,
        name: "nakhla",
        latitude: 35.67742481925992,
        longitude: -0.6477993207432939,
      },
      {
        id: 17,
        name: "Illusia / mobilis / banque",
        latitude: 35.67670321234609,
        longitude: -0.6498066184883806,
      },
      {
        id: 18,
        name: "Feu Rouge",
        latitude: 35.67581506268618,
        longitude: -0.6517114285625863,
      },
      {
        id: 19,
        name: "Yaghmorasane",
        latitude: 35.6756346359442,
        longitude: -0.6573831404762458,
      },
      {
        id: 20,
        name: "Glaciere",
        latitude: 35.67612035882468,
        longitude: -0.6621665011024337,
      },
      {
        id: 21,
        name: "Babiche",
        latitude: 35.67729992722703,
        longitude: -0.6661127731493365,
      },
      {
        id: 22,
        name: "Bou3kale-Before",
        latitude: 35.67927045776474,
        longitude: -0.6714684401673111,
      },
      {
        id: 23,
        name: "Bou3kale-After",
        latitude: 35.679513294499486,
        longitude: -0.674304308770405,
      },
      {
        id: 24,
        name: "Terminus",
        latitude: 35.67614116152806,
        longitude: -0.677251181390534,
      },
    ],
  },
  "34": {
    id: 1,
    name: "34",
    price: 20,
    type: "BUS",
    stops: [
      {
        id: 0,
        name: "200",
        latitude: 35.647816159238985,
        longitude: -0.6495268344726736,
      },
      {
        id: 1,
        name: "KAHWA",
        latitude: 35.650220184940736,
        longitude: -0.6503518045612143,
      },
      {
        id: 2,
        name: "ADL",
        latitude: 35.651205540985266,
        longitude: -0.648038629299833,
      },
      {
        id: 3,
        name: "CHANTY",
        latitude: 35.65249909110758,
        longitude: -0.6447508685722861,
      },
      {
        id: 4,
        name: "SENIA",
        latitude: 35.65219970193515,
        longitude: -0.6271047256365219,
      },
      {
        id: 5,
        name: "FIRMA",
        latitude: 35.654514418991866,
        longitude: -0.6278357609453883,
      },
      {
        id: 6,
        name: "GEAMO",
        latitude: 35.66081614840594,
        longitude: -0.631640703890213,
      },
      {
        id: 7,
        name: "POSTE",
        latitude: 35.664777059017496,
        longitude: -0.6340787014921515,
      },
      {
        id: 8,
        name: "ALE H",
        latitude: 35.667755364457186,
        longitude: -0.6358963057801196,
      },
      {
        id: 9,
        name: "INESM",
        latitude: 35.67036232470115,
        longitude: -0.637442420004147,
      },
      {
        id: 10,
        name: "CPA",
        latitude: 35.67459741334976,
        longitude: -0.6400851061857254,
      },
      {
        id: 11,
        name: "CHARFAOUI",
        latitude: 35.67981193083056,
        longitude: -0.6432371147599317,
      },
      {
        id: 12,
        name: "entre charfaoui et centrale",
        latitude: 35.683863089819006,
        longitude: -0.6457260371892976,
      },
      {
        id: 13,
        name: "palais des sports",
        latitude: 35.689696395156325,
        longitude: -0.6486951189264675,
      },
      {
        id: 14,
        name: "MDINA JDIDA",
        latitude: 35.69157040710943,
        longitude: -0.6494819865686289,
      },
      {
        id: 15,
        name: "3AND DAWRA MJIHATE LA POSte",
        latitude: 35.696937534379884,
        longitude: -0.651529078824805,
      },
      {
        id: 16,
        name: "terminus",
        latitude: 35.70018551882689,
        longitude: -0.6496180648951534,
      },
    ],
  },
  "4g": {
    id: 3,
    name: "4g",
    price: 20,
    type: "BUS",
    stops: [
      { id: 0, name: "d", latitude: 35.670137, longitude: -0.658682 },
      { id: 1, name: "a", latitude: 35.673651, longitude: -0.657805 },
      { id: 2, name: "r", latitude: 35.675723, longitude: -0.657562 },
      { id: 3, name: "d", latitude: 35.676357, longitude: -0.661873 },
      { id: 4, name: "dsq", latitude: 35.679352, longitude: -0.660326 },
      { id: 5, name: "ezae", latitude: 35.682036, longitude: -0.658974 },
      { id: 6, name: "gfs", latitude: 35.683182, longitude: -0.658373 },
      { id: 7, name: "fs", latitude: 35.686824, longitude: -0.656442 },
      { id: 8, name: "aza", latitude: 35.686589, longitude: -0.65361 },
      { id: 9, name: "fdsfs", latitude: 35.685857, longitude: -0.648385 },
      { id: 10, name: "dsqdqs", latitude: 35.688846, longitude: -0.643439 },
      { id: 11, name: "dsq", latitude: 35.690759, longitude: -0.640698 },
      { id: 12, name: "dsq", latitude: 35.693007, longitude: -0.636288 },
      { id: 13, name: "dsq", latitude: 35.694366, longitude: -0.631423 },
      { id: 14, name: "dsq", latitude: 35.696375, longitude: -0.630741 },
      { id: 15, name: "dsq", latitude: 35.694016, longitude: -0.626124 },
      { id: 16, name: "dsq", latitude: 35.69185, longitude: -0.618989 },
      { id: 17, name: "dsq", latitude: 35.695757, longitude: -0.614528 },
      { id: 18, name: "dsq", latitude: 35.697637, longitude: -0.603625 },
    ],
  },
  tram: {
    id: 4,
    name: "tram",
    price: 40,
    type: "TRAM",
    stops: [
      {
        id: 0,
        name: "Terminus senia",
        latitude: 35.642341004568564,
        longitude: -0.6171162960511922,
      },

      {
        id: 1,
        name: "dsq",
        latitude: 35.64637074174728,
        longitude: -0.6218895511713913,
      },
      {
        id: 2,
        name: "dsq",
        latitude: 35.65013855550497,
        longitude: -0.6253000097197511,
      },
      {
        id: 3,
        name: "dsq",
        latitude: 35.65556693246569,
        longitude: -0.6284433718841368,
      },
      {
        id: 4,
        name: "dsq",
        latitude: 35.66174208105954,
        longitude: -0.6323333835950121,
      },
      {
        id: 5,
        name: "dsq",
        latitude: 35.665979559429104,
        longitude: -0.6349541514605873,
      },
      {
        id: 6,
        name: "dsq",
        latitude: 35.671153096480865,
        longitude: -0.638089395332629,
      },
      {
        id: 7,
        name: "CPA / AVANT CHARFAOUI",
        latitude: 35.67452544012643,
        longitude: -0.640133112014404,
      },
      {
        id: 8,
        name: "CHARFAOUI",
        latitude: 35.679810316288744,
        longitude: -0.6433605979824626,
      },
      {
        id: 9,
        name: "APRES CHARFAOUI",
        latitude: 35.6838274448425,
        longitude: -0.6458812461095704,
      },
      {
        id: 10,
        name: "station nesrine",
        latitude: 35.686655169905166,
        longitude: -0.6475229338767748,
      },

      {
        id: 11,
        name: "dar hayate",
        latitude: 35.69003307280825,
        longitude: -0.6489717860311642,
      },
      {
        id: 12,
        name: "houha",
        latitude: 35.697125867628436,
        longitude: -0.6514885485663864,
      },
      {
        id: 13,
        name: "terminux 34",
        latitude: 35.70126905848322,
        longitude: -0.6500869552880723,
      },
      {
        id: 14,
        name: "place d'arme",
        latitude: 35.70364398065714,
        longitude: -0.6489907142951374,
      },
      {
        id: 15,
        name: "amir abdelkader",
        latitude: 35.70074693666352,
        longitude: -0.6456944099918333,
      },
    ],
  },
};
