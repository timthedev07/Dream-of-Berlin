import React from "react";
import Nav from "../components/Nav";
import { ReactBingmaps } from "react-bingmaps";
import {
  AnimatedParagraph,
  SCROLL_ANIMATION_DURATION,
  AnimatedList,
} from "./Home";

const BMap = ({ points }) => {
  return (
    <>
      <ReactBingmaps
        bingmapKey={process.env.REACT_APP_MAPS_API}
        zoom={11}
        disableScrollWheelZoom={true}
        center={[52.52138088473879, 13.406859916716096]}
        infoboxesWithPushPins={pushPins}
      ></ReactBingmaps>
    </>
  );
};

const RestaurantMap = () => {
  return (
    <div
      data-aos="zoom-in-down"
      data-aos-duration={SCROLL_ANIMATION_DURATION}
      data-aos-once="true"
      id="restaurant-map"
    >
      <BMap />
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
          <div className="content-section food-content">
            <h1 className="info-heading">Essen und Restaurants</h1>
            <AnimatedParagraph fullWidth={true} position="left">
              Berlin ist eine schöne Stadt mit allen Art von leckeren Speisen in
              unterschiedlichen Restaurants. Heir sind
            </AnimatedParagraph>

            <AnimatedList>
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
            <RestaurantMap />
          </div>
        </div>
      </div>
    </>
  );
}

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
