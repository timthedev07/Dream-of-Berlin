import Reichstagsgebäude from "../images/Reichstagsgebäude.jpg";
import Tor from "../images/Tor.jpg";
import Holocaust from "../images/holocaust.webp";
import Island from "../images/island.jpg";
import Charlie from "../images/charlie.jpg";
import Spy from "../images/spy.jpg";
import Perg from "../images/perg.jpg";
import Wall from "../images/wall.jpg";
import NaturalScience from "../images/nature.jpg";
import Wilhelm from "../images/wilhelm.jpg";
import BDom from "../images/bdom.jpg";
import Army from "../images/army.jpg";

export const attractions = [
  {
    latitude: 52.51864367760826,
    longitude: 13.376899031775872,
    name: "Reichstagsgebäude",
    imgUrl: Reichstagsgebäude,
  },
  {
    latitude: 52.516303958397565,
    longitude: 13.377494221977875,
    name: "Brandenburger Tor",
    imgUrl: Tor,
  },
  {
    latitude: 52.51693065246946,
    longitude: 13.401900367170825,
    name: "Museumsinsel",
    imgUrl: Island,
  },
  {
    latitude: 52.50743455975844,
    longitude: 13.390361956571038,
    name: "Grenzübergangsstelle",
    imgUrl: Charlie,
  },
  {
    latitude: 52.508761505446856,
    longitude: 13.379237263873586,
    name: "Deutsches Spionagemuseum",
    imgUrl: Spy,
  },
  {
    latitude: 52.52118079458849,
    longitude: 13.396901339122442,
    name: "Pergamonmuseum",
    imgUrl: Perg,
  },
  {
    latitude: 52.51392853560679,
    longitude: 13.378716411906147,
    name: "Holocaust-Mahnmal",
    imgUrl: Holocaust,
  },
  {
    latitude: 52.53503345292848,
    longitude: 13.39019504827703,
    name: "Gedenkstätte Berliner Mauer",
    imgUrl: Wall,
  },
  {
    latitude: 52.53056873406133,
    longitude: 13.379183081887655,
    name: "Museum für Naturkunde",
    imgUrl: NaturalScience,
  },
  {
    latitude: 52.504690275807846,
    longitude: 13.335070406536502,
    name: "Kaiser-Wilhelm-Gedächtniskirche",
    imgUrl: Wilhelm,
  },
  {
    latitude: 52.51892187351247,
    longitude: 13.400502961166387,
    name: "Berliner Dom",
    imgUrl: BDom,
  },
  {
    latitude: 52.47248998154964,
    longitude: 13.138431757672791,
    name: "Militärhistorisches Museum der Bundeswehr",
    imgUrl: Army,
  },
];

export const pushPins = [
  {
    location: [52.52555223870703, 13.407951269950583],
    option: {
      color: "red",
    },
    addHandler: "mouseover",
    infoboxOption: {
      title: "Shiori - Japanese Restaurant",
      description: "Legit Restaurant",
    },
    pushPinOption: {
      title: "Shiori - Japanese Restaurant",
      description: "Legit Restaurant",
    },
    infoboxAddHandler: {
      type: "click",
    },
    pushPinAddHandler: {
      type: "click",
    },
  },
  {
    location: [52.48765872521328, 13.390821460756163],
    option: {
      color: "red",
    },
    addHandler: "mouseover",
    infoboxOption: {
      title: "Peter Schlemihl - German Cuisine",
      description: "Legit Restaurant",
    },
    pushPinOption: {
      title: "Peter Schlemihl - German Cuisine",
      description: "Legit Restaurant",
    },
    infoboxAddHandler: {
      type: "click",
    },
    pushPinAddHandler: {
      type: "click",
    },
  },
  {
    location: [52.53650356848609, 13.379540398911166],
    option: {
      color: "red",
    },
    addHandler: "mouseover",
    infoboxOption: {
      title: "Hackethal's - German Cuisine",
      description: "Legit Restaurant",
    },
    pushPinOption: {
      title: "Hackethal's - German Cuisine",
      description: "Legit Restaurant",
    },
    infoboxAddHandler: {
      type: "click",
    },
    pushPinAddHandler: {
      type: "click",
    },
  },
  {
    location: [52.54053326762361, 13.412582341406043],
    option: {
      color: "red",
    },
    addHandler: "mouseover",
    infoboxOption: {
      title: "Rüyam Gemüse Kebab 2 - Kebab",
      description: "Legit Restaurant",
    },
    pushPinOption: {
      title: "Rüyam Gemüse Kebab 2 - Kebab",
      description: "Legit Restaurant",
    },
    infoboxAddHandler: {
      type: "click",
    },
    pushPinAddHandler: {
      type: "click",
    },
  },
  {
    location: [52.49818993717965, 13.430829275480743],
    option: {
      color: "red",
    },
    addHandler: "mouseover",
    infoboxOption: {
      title: "Best Friends Kreuzberg - Japanese & Fusion Cuisine",
      description: "Legit Restaurant",
    },
    pushPinOption: {
      title: "Best Friends Kreuzberg - Japanese & Fusion Cuisine",
      description: "Legit Restaurant",
    },
    infoboxAddHandler: {
      type: "click",
    },
    pushPinAddHandler: {
      type: "click",
    },
  },
];
