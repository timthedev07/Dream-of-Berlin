export interface RestaurantData {
  latitude: number;
  longitude: number;
  name: string;
}

export interface AttractionData extends RestaurantData {
  imgPath: string;
}

export const attractions: AttractionData[] = [
  {
    latitude: 52.51864367760826,
    longitude: 13.376899031775872,
    name: "Reichstagsgebäude",
    imgPath: "/images/Reichstagsgebäude.jpg",
  },
  {
    latitude: 52.516303958397565,
    longitude: 13.377494221977875,
    name: "Brandenburger Tor",
    imgPath: "/images/Tor.jpg",
  },
  {
    latitude: 52.51693065246946,
    longitude: 13.401900367170825,
    name: "Museumsinsel",
    imgPath: "/images/island.jpg",
  },
  {
    latitude: 52.50743455975844,
    longitude: 13.390361956571038,
    name: "Grenzübergangsstelle",
    imgPath: "/images/charlie.jpg",
  },
  {
    latitude: 52.508761505446856,
    longitude: 13.379237263873586,
    name: "Deutsches Spionagemuseum",
    imgPath: "/images/spy.jpg",
  },
  {
    latitude: 52.52118079458849,
    longitude: 13.396901339122442,
    name: "Pergamonmuseum",
    imgPath: "/images/perg.jpg",
  },
  {
    latitude: 52.51392853560679,
    longitude: 13.378716411906147,
    name: "Holocaust-Mahnmal",
    imgPath: "/images/holocaust.webp",
  },
  {
    latitude: 52.53503345292848,
    longitude: 13.39019504827703,
    name: "Gedenkstätte Berliner Mauer",
    imgPath: "/images/wall.jpg",
  },
  {
    latitude: 52.53056873406133,
    longitude: 13.379183081887655,
    name: "Museum für Naturkunde",
    imgPath: "/images/nature.jpg",
  },
  {
    latitude: 52.504690275807846,
    longitude: 13.335070406536502,
    name: "Kaiser-Wilhelm-Gedächtniskirche",
    imgPath: "",
  },
  {
    latitude: 52.51892187351247,
    longitude: 13.400502961166387,
    name: "Berliner Dom",
    imgPath: "/images/bdom.jpg",
  },
  {
    latitude: 52.47248998154964,
    longitude: 13.138431757672791,
    name: "Militärhistorisches Museum der Bundeswehr",
    imgPath: "/images/army.jpg",
  },
];

export const restaurants: RestaurantData[] = [
  {
    latitude: 52.52555223870703,
    longitude: 13.407951269950583,
    name: "Shiori - Japanese Restaurant",
  },
  {
    latitude: 52.48765872521328,
    longitude: 13.390821460756163,
    name: "Peter Schlemihl - German Cuisine",
  },
  {
    latitude: 52.53650356848609,
    longitude: 13.379540398911166,
    name: "Hackethal's - German Cuisine",
  },
  {
    latitude: 52.54053326762361,
    longitude: 13.412582341406043,
    name: "Rüyam Gemüse Kebab 2 - Kebab",
  },
  {
    latitude: 52.49818993717965,
    longitude: 13.430829275480743,
    name: "Best Friends Kreuzberg - Japanese & Fusion Cuisine",
  },
];
