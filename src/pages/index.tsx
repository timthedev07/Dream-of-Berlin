import React, { useState, useEffect } from "react";
import { Highlight } from "../components/Highlight";
import { Nav } from "../components/Nav";
import {
  AnimatedList,
  AnimatedParagraph,
  AnimatedImage,
} from "../components/Animated";
import { GetStaticProps, NextPage } from "next";
export const SCROLL_ANIMATION_DURATION = "700";

const Home: NextPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const scrollCallback = () => {
      setScrollY(window.scrollY);
    };

    scrollCallback();

    window.addEventListener("scroll", scrollCallback);
  });

  return (
    <>
      <div className="page-header">
        <Nav transparent={scrollY <= 300} />
        <h1 className="page-heading" id="home-page-header">
          Berlin - the city in your dream.
        </h1>
      </div>

      <div id="home-page" className="page-content">
        <div className="content-wrapper">
          <div className="info-block">
            <h1 className="info-heading heading-center">
              Information und Fakten
            </h1>
            <div className="info-inner-container lots-of-text reversed-text-first">
              <AnimatedImage
                imagePath={"/images/berlin0.jpg"}
                position="left"
              />
              <AnimatedParagraph position="right">
                Berlin, die Hauptstadt Deutschlands, ist eine Stadt mit etwa
                <Highlight>3,567,000</Highlight> Einwohnern und einer Fläche von
                <Highlight>891,8 km²</Highlight>. Berlin ist die Größte Stadt
                von Deutschland, während neunmal größer als Paris ist, obwohl es
                nur
                <Highlight>1 / 5</Highlight> von die population von paris hat.
                Es gibt viel Monumente im Berlin, es gibt Museen historische, es
                gibt auch ikonische Gebäude. Die Stadt wird in
                <Highlight>12</Highlight>
                Bezirken geteilt, die Mitte, Friedrichshain-Kreuzberg, Pankow,
                Charlottenburg-Wilmerdorf, Spandau, Steglitz-Zehlendorf,
                Tempelhof-Schöneberg, Neukölln, Treptow-Köpenick,
                Marzahn-Hellersdorf, Lichtenberg, und Reinickendorf
                einschließen.
              </AnimatedParagraph>
            </div>
          </div>
          <div className="info-block">
            <h1 className="info-heading">Die Geschichte Kurze</h1>
            <div className="info-inner-container-reversed reversed-text-first">
              <AnimatedImage imagePath="/images/battle0.jpg" position="right" />
              <AnimatedParagraph position="left">
                Berlin begann zunächst im <Highlight>13 Jahrhundert</Highlight>
                und es steigt unaufhaltsam weiter. Nach
                <Highlight>1900</Highlight> Berlin ist eine Großstadt geworden
                aufgrund seiner Überlegenheit in Wissenschaft, Bildung, Militär
                und Kultur zu einer der wichtigsten Städte der Welt.
              </AnimatedParagraph>
            </div>
          </div>
          <div className="info-block">
            <h1 className="info-heading">Dialekt von das Gebiet</h1>
            <div className="info-inner-container reversed-text-first">
              <AnimatedImage
                imagePath="/images/communication.jpg"
                position="left"
              />
              <AnimatedParagraph position="right">
                In Berlin es gibt einen speziellen Dialekt, bekannt als Berliner
                Dialekt (alias Berlinerisch). Es stammt ursprünglich aus ein
                Brandenburgisch Dialekt. Es hat etwa
                <Highlight>5 Millionen</Highlight> Sprecher obwohl die
                Bildungsschicht bemühte sich stets distanzierend um
                einwandfreies Hochdeutsch.
              </AnimatedParagraph>
            </div>
          </div>
          <div className="info-block">
            <h1 className="info-heading">Prominente</h1>
            <div className="info-inner-container-reversed reversed-text-first">
              <AnimatedImage
                imagePath="/images/celebrities.jpg"
                position="right"
              />
              <AnimatedParagraph position="left">
                Es gibt viele bekannte berliner Superstars zum Beispiel,
                <Highlight>Kevyn Lettau</Highlight> ist eine Jazzsängerin
                geboren 1959, <Highlight>Caroline Fischer</Highlight> ist eine
                Pianistin geboren 1984, <Highlight>Götz George</Highlight> ist
                ein Akteur geboren 1938, und
                <Highlight>Carsten Keller</Highlight> ist ein ehemaliger
                {/* former */}Feldhockeyspieler{/* field hockey player */}, er
                ist auch ein Goldmedaillengewinner bei den Olympischen
                Sommerspielen 1972. Es gibt auch Mathematiker
                {/* mathematician */} wie <Highlight>Edmund Landau</Highlight>
                (1877–1938), und Bauingenieure wie
                <Highlight>Konrad Zuse</Highlight> (1910–1995). Schließlich gibt
                es toll Leiter wie <Highlight>Wilhelm II</Highlight>
                (1859–1941).
              </AnimatedParagraph>
            </div>
          </div>
          <div className="info-block">
            <h1 className="info-heading">Traditionelle Festivals</h1>
            <div className="info-inner-container reversed-text-first">
              <AnimatedImage
                imagePath="/images/celebrate.jpg"
                position="left"
              />
              <AnimatedParagraph position="right">
                Sie werden sehr wahrscheinlich über einige der traditionellen
                Berliner Feste stolpern wenn sie reisen in Berlin, und sie
                werden es auf jeden Fall lieben!
              </AnimatedParagraph>
              <AnimatedList position="right">
                <li>Die Internationale Filmfestspiele Berlin</li>
                <li>Jazzfest Berlin</li>
                <li>Karneval der Kulturen</li>
                <li>Lange Nachte der Museen</li>
                <li>Internationale Funkausstellung Berlin</li>
                <li>Museumsinsel Festival</li>
                <li>Internationales Berliner Bierfestival</li>
              </AnimatedList>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default Home;
