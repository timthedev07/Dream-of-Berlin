import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { ReactBingmaps } from "react-bingmaps";
import {
  AnimatedParagraph,
  SCROLL_ANIMATION_DURATION,
  AnimatedList,
  Image,
} from "./Home";
import ReactGLMap, { Marker, Popup } from "react-map-gl";
import { ReactComponent as MarkerIcon } from "../icons/marker.svg";
/** images for attractions */
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
import Tourism from "../images/tourism.jpg";

const DEV_MODE = false;

const RestaurantMap = () => {
  return (
    <div
      data-aos="zoom-in-down"
      data-aos-duration={SCROLL_ANIMATION_DURATION}
      data-aos-once="true"
      id="restaurant-map"
    >
      {!DEV_MODE ? (
        <ReactBingmaps
          bingmapKey={process.env.REACT_APP_BING_MAPS_API}
          zoom={11}
          disableScrollWheelZoom={true}
          center={[52.52138088473879, 13.406859916716096]}
          infoboxesWithPushPins={pushPins}
        ></ReactBingmaps>
      ) : (
        <h1>MAP NOT SHOWN FOR DEVELOPMENT PURPOSES</h1>
      )}
    </div>
  );
};

const AttractionsMap = () => {
  const [mapState, setMapState] = useState({
    latitude: 52.482502939478366,
    longitude: 13.263164133157128,
    zoom: 11,
    width: "100%",
    height: "100%",
  });

  const [selectedSpot, setSelectedSpot] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedSpot(null);
      }
    };
    window.addEventListener("keyup", listener);

    return () => {
      window.removeEventListener("keyup", listener);
    };
  }, []);

  return (
    <div
      data-aos="zoom-out-up"
      data-aos-duratino={SCROLL_ANIMATION_DURATION}
      data-aos-once="true"
      className="attractions-map-container"
    >
      <ReactGLMap
        {...mapState}
        className="attractions-map info-paragraph"
        mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_API}
        onViewportChange={(newState) => {
          setMapState(newState);
        }}
        mapStyle="mapbox://styles/im-just-a-dev/ckpr6pit02jhi18qhjckjcdzg"
      >
        {attractions.map((each) => {
          return (
            <Marker
              key={`${each.name}`}
              latitude={each.latitude}
              longitude={each.longitude}
            >
              <MarkerIcon
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedSpot({
                    name: each.name,
                    latitude: each.latitude,
                    longitude: each.longitude,
                    imgUrl: each.imgUrl,
                  });
                }}
                className="mapbox-marker-inner"
              />
            </Marker>
          );
        })}
        {selectedSpot ? (
          <Popup
            latitude={selectedSpot.latitude}
            longitude={selectedSpot.longitude}
            onClose={() => {
              setSelectedSpot(null);
            }}
          >
            <div className="popup-inner-wrapper">
              <h4 className="black-text" style={{ width: "min-content" }}>
                {selectedSpot.name}
              </h4>
              <img
                className="popup-img"
                src={selectedSpot.imgUrl}
                alt="beautiful place"
              />
            </div>
          </Popup>
        ) : null}
      </ReactGLMap>
    </div>
  );
};

export default function Travel() {
  return (
    <>
      <div className="page-header" id="travel-page-header">
        <Nav transparent={false} />
        <h1 className="page-heading">Reiseführer</h1>
      </div>
      <div id="travel-page" className="page-content">
        <div className="content-wrapper">
          <div className="info-block">
            <h1 className="info-heading">Touristische Attraktionen</h1>
            <div className="info-inner-container attractions-info-container">
              <AnimatedParagraph fullWidth={true} position="right">
                Berlin ist eine ziemlich historische Stadt. Folglich kann man
                die Geschichte genießen und viele wunderbare Sehenswürdigkeiten
                besuchen (zum Beispiel das Pergamonmuseum).
                <br />
                Hier stehen viele touristische Attraktionen zur Verfügung (Sieh
                den Stadtplan unten), wir empfehlen Ihnen, sie besichtigen wenn
                du reist in Berlin.
              </AnimatedParagraph>
              <AttractionsMap />
            </div>
          </div>
          <section className="content-section food-content">
            <h1 className="info-heading">Essen und Restaurants</h1>
            <div className="info-block">
              <div className="info-inner-container reversed-text-first">
                <Image image={Island} position="left" />
                <AnimatedParagraph position="right">
                  Es ist auch eine schöne Stadt mit allen Art von leckeren
                  Speisen in unterschiedlichen Restaurants.
                  <b>
                    <br />
                    Heir sind enige der traditionellen Gerichte einen Versuch
                    wert sind.
                  </b>
                </AnimatedParagraph>
              </div>
            </div>

            <AnimatedList position="left" fullWidth={true}>
              <li>
                Schnitzel: ein Stück Fleisch, mit Mehl, Ei und Semmelbrösel
                bedeckt und dann in Öl frittiert
              </li>
              <li>Döner Kebab</li>
              <li>Apfelstrudel</li>
              <li>Bretzels</li>
              <li>Berliner Donuts: lochlose mit Marmelade gefüllte Donuts</li>
              <li>Kartoffelpuffer</li>
              <li>
                Senfeier: hartgekochte Eier und serviert mit Kartoffelpüree,
                alles überzogen mit einer cremigen Senfsauce.
              </li>
            </AnimatedList>
            <AnimatedParagraph fullWidth={true}>
              Wir auflisten einige die beste Restaurants auf Berlin:
            </AnimatedParagraph>
            <RestaurantMap />
          </section>
          <div className="info-block">
            <h1 className="info-heading">Traditionelle Feste</h1>
            <div className="info-inner-container reversed-text-first">
              <Image image={Tourism} position="left" />
              <AnimatedParagraph position="right">TO-DO</AnimatedParagraph>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const attractions = [
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

const pushPins = [
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
