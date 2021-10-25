import React, { FC } from "react";
import { Nav } from "../components/Nav";
import {
  AnimatedParagraph,
  AnimatedList,
  AnimatedImage,
} from "../components/Animated";
import { AttractionsMap, RestaurantMap } from "../components/Maps";
import { GetStaticProps, NextPage } from "next";

interface LinkProps {
  href: string;
  comma?: boolean;
}
const Link: FC<LinkProps> = ({ href, children, comma }) => {
  return (
    <a className="link-text" href={href}>
      &nbsp;{children}
      {comma ? "," : null}&nbsp;
    </a>
  );
};

const Travel: NextPage = () => {
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
                du in Berlin reist.
              </AnimatedParagraph>
              <AttractionsMap />
            </div>
          </div>
          <div className="info-block">
            <h1 className="info-heading">Hotels</h1>
            <div className="info-inner-container-reversed reversed-text-first">
              <AnimatedImage imagePath="/images/hotels.webp" position="right" />
              <AnimatedParagraph position="left">
                Wenn du lebhaftere Orte magst, kannst du ein Hotel im
                Stadtzentrum buchen, zum Beispiel Hilton Berlin. Andererseits
                wenn du ruhige Orte bevorzugst, kannst du ein Hotel weiter weg
                von Stadtzentrum wie
                <Link href="https://www.google.com/travel/hotels/Berlin/entity/ChcItd7P5JvvzrlTGgsvZy8xdHQxcnFtZhAB?g2lb=2502548%2C2503781%2C4258168%2C4270442%2C4306835%2C4317915%2C4371335%2C4401769%2C4419364%2C4482438%2C4486153%2C4509341%2C4536454%2C4545889%2C4564872%2C4570611%2C4270859%2C4284970%2C4291517&hl=en-ES&gl=es&ssta=1&ap=SAEwAVqOAwoFCJYBEAAiA0VVUioWCgcI5Q8QBhgcEgcI5Q8QBhgdGAEoALABAFgBaAFyBAgCGACaARESD0JlcmxpbiwgR2VybWFueaIBEgoIL20vMDE1NnESBkJlcmxpbqoBKwoCCCESAghVEgIIDxICCBUSAggNEgIIZxICCFsSAwiUAhICCC8SAghaGAGqAQYKAghiGACqARMKAggSEgMImwESAghoEgIIaRgBqgEKCgIIFBICCBsYAaoBEgoCCBwSAghzEgIINhICCCkYAaoBCgoCCCUSAgh1GAGqARoKAggREgIIKhICCEASAgg4EgIIVxICCAIYAaoBKAoCCC4SAwiAARICCDsSAghWEgIIPRIDCIEBEgIIAxICCAwSAggnGAGqAREKAwiuARIDCLMBEgMIsgEYAaoBBwoDCKcBGACqARYKAwipARIDCKsBEgMIqgESAwisARgBqgEGCgIIRhgAqgEPCgIIUBIDCIQBEgIITxgBqgEMCgMIowESAwikARgBqgEHCgMI_QEYAJIBAiABaAA&q=berlin%20hotels&rp=ogEPQmVybGluLCBHZXJtYW55OAFAAEgC&ictx=1&utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESCgoCCAMKAggDEAAaMwoVEhE6D0JlcmxpbiwgR2VybWFueRoAEhoSFAoHCOUPEAYYHBIHCOUPEAYYHRgBMgIQACoNCgcoAToDRVVSGgAoCQ&ved=0CAAQ5JsGahcKEwiwtqPwm5DxAhUAAAAAHQAAAAAQBA">
                  Landgasthof zum Mühlenteich
                </Link>
                buchen. Check den
                <Link href="https://www.google.com/travel/hotels/Berlin?g2lb=2502548%2C2503781%2C4258168%2C4270442%2C4306835%2C4317915%2C4371335%2C4401769%2C4419364%2C4482438%2C4486153%2C4509341%2C4536454%2C4545889%2C4564872%2C4570611%2C4270859%2C4284970%2C4291517&hl=en-ES&gl=es&ssta=1&ap=SAFoAQ&q=berlin%20hotels&rp=EKGPsurfv5e1rQEQ4Jynt_W738S8ARDLjIjJjLyH6C8Q2f3tmL_9t_IZOAFAAEgCogEPQmVybGluLCBHZXJtYW55&ictx=1&ved=0CAAQ5JsGahcKEwiYwOySm5DxAhUAAAAAHQAAAAAQAg&utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESCgoCCAMKAggDEAAaMwoVEhE6D0JlcmxpbiwgR2VybWFueRoAEhoSFAoHCOUPEAYYHBIHCOUPEAYYHRgBMgIQACoLCgcoAToDRVVSGgA">
                  link
                </Link>
                für mehr Information.
              </AnimatedParagraph>
            </div>
          </div>
          <section className="content-section food-content">
            <h1 className="info-heading">Essen und Restaurants</h1>
            <AnimatedParagraph position="right">
              Es ist auch eine schöne Stadt mit allen Art von leckeren Speisen
              in unterschiedlichen Restaurants.
              <b>
                <br />
                Hier sind enige der traditionellen Gerichte einen Versuch wert
                sind.
              </b>
            </AnimatedParagraph>
            <div className="info-block">
              <div className="info-inner-container reversed-text-first">
                <AnimatedImage
                  imagePath={"/images/foodcollage.jpg"}
                  position="left"
                />
                <AnimatedList position="left" fullWidth={false}>
                  <li>
                    Schnitzel: ein Stück Fleisch, mit Mehl, Ei und Semmelbrösel
                    bedeckt und dann in Öl frittiert
                  </li>
                  <li>Döner Kebab</li>
                  <li>Apfelstrudel</li>
                  <li>Bretzels</li>
                  <li>
                    Berliner Donuts: lochlose mit Marmelade gefüllte Donuts
                  </li>
                  <li>Kartoffelpuffer</li>
                  <li>
                    Senfeier: hartgekochte Eier und serviert mit Kartoffelpüree,
                    alles überzogen mit einer cremigen Senfsauce.
                  </li>
                  <li>Kassler: gesalzenes und geräuchertes Schweinefleisch</li>
                  <li>Currywurst</li>
                </AnimatedList>
              </div>
            </div>

            <AnimatedParagraph fullWidth={true}>
              Wir auflisten einige die beste Restaurants auf Berlin:
            </AnimatedParagraph>
          </section>
          <RestaurantMap />
          <div className="info-block">
            <h1 className="info-heading heading-center">Tourismus</h1>
            <div className="horizontal-line"></div>
            <div className="info-inner-container-reversed reversed-text-first">
              <AnimatedParagraph
                additionalClassName="large-width"
                position="right"
              >
                Berlin ist ein beliebter Ort für Touristen, weil gibt so viele
                Dinge zu machen es! Es gibt eine Menge Museen, ikonische
                Gebäude, und Denkmäler, und sich nie langweilen! Es ist die
                dritt meistbesuchte Stadt der Welt, und laut die Statistiken von
                <Link href="https://www.visitberlin.de/de" comma>
                  Visit Berlin
                </Link>
                es gab insgesamt etwa 14 Millionen in 2019! (lass uns nicht über
                2020/2021 reden)
              </AnimatedParagraph>
              <AnimatedImage
                position="left"
                imagePath="/images/marketing.gif"
              />
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

export default Travel;
