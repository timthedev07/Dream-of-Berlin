import React from "react";
import Nav from "../components/Nav";
import SportsSwiper from "../components/SportsSwiper";
import Highlight from "../components/Highlight";
import Christoph from "../images/christoph.jpg";
import Jochen from "../images/jochen.jpg";
import Claudia from "../images/claudia.jpg";
import Laura from "../images/laura.jpg";
import Hagen from "../images/hagen.jpg";
import Ulf from "../images/ulf.jpg";
import Franziska from "../images/franziska.jpg";
import Katarina from "../images/katarina.webp";

import OlympianCard from "../components/OlympianCard";

const OLYMPIANS = [
  {
    name: "Christoph Harting",
    img: Christoph,
    description: "Diskuswerfer",
  },
  {
    name: "Franziska van Almsick",
    img: Franziska,
    description: "Schwimmer",
  },

  {
    name: "Jochen Schümann",
    img: Jochen,
    description: "Seefahrer",
  },
  {
    name: "Claudia Pechstein",
    img: Claudia,
    description: "Skater",
  },
  {
    name: "Laura Ludwig",
    img: Laura,
    description: "Beachvolleyballer",
  },
  {
    name: "Hagen Stamm",
    img: Hagen,
    description: "Wasserballer",
  },
  {
    name: "Ulf Timmermann",
    img: Ulf,
    description: "Kugelstoßer",
  },
  {
    name: "Katarina Witt",
    img: Katarina,
    description: "Eiskunstläuferin",
  },
];

export default function Sports() {
  let right = false;
  let cards = [];
  for (let i = 0; i < OLYMPIANS.length; i++) {
    cards.push(
      <OlympianCard
        description={OLYMPIANS[i].description}
        name={OLYMPIANS[i].name}
        position={right ? "right" : "left"}
        key={OLYMPIANS[i].name}
        image={OLYMPIANS[i].img}
        noOffset={i === 0}
      />
    );
    right = !right;
  }

  return (
    <>
      <div className="page-header" id="sports-page-header">
        <Nav transparent={false} />
        <h1 className="page-heading">Sportarten</h1>
      </div>
      <div id="sports-page" className="page-content">
        <h1 style={{ margin: "35px" }} className="info-heading">
          Sportarten beliebt und Sportveranstaltungen
        </h1>
        <div className="ps-relative dp-block margined-div">
          Berlin ist eine Stadt überlegen in viele Felder, einschließlich
          Sportarten. Es ist eine Stadt {"full of sport facilities"} und
          leidenschaftlich über Sport sind die Bürger auch. Die berliner spielen
          ziemlich gern <Highlight>Fußball</Highlight>, und es gibt zwei große
          in Berlin, sie sind Hertha BSC und FC Union Berlin. Außerdem, gibt es
          andere Sportarten wie <Highlight>Handball</Highlight>,
          <Highlight>Basketball</Highlight>, <Highlight>Eishockey</Highlight>,
          <Highlight>Marathon</Highlight>, <Highlight>Radfahren</Highlight>,
          <Highlight>Volleyball</Highlight>, und <Highlight>Snooker</Highlight>.
          <br />
          <br />
          In Berlin finden viele Sportveranstaltungen statt, zum Beispiel,
          einige der besten ist
          <Highlight>die Olympische Sommerspiele in 1936</Highlight> und
          <Highlight>
            die FIFA Fußball Weltmeisterschaftfinale in 2006
          </Highlight>
          . Es gibt auch anderen wie
          <Highlight>
            die FIFA Fußball Weltmeisterschaftfinale Gruppe A in 1974
          </Highlight>
          und
          <Highlight>die UEFA Champions-League-Finale in 2015</Highlight>.
          <br />
          <br />
          <SportsSwiper />
        </div>
        <h1 style={{ margin: "35px" }} className="info-heading">
          Olympioniken
        </h1>
        <section className="olympians-section">
          <div className="olympians-container">{cards.slice(0, 4)}</div>
          <div className="olympians-container">{cards.slice(4)}</div>
        </section>
      </div>
    </>
  );
}
