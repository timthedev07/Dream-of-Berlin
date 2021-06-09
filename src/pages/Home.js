import React, { useState, useEffect } from "react";
import HighlightedNumber from "../components/HighlightedNumber";
import Nav from "../components/Nav";
import Berlin0 from "../images/berlin0.jpg";
import Battle from "../images/battle0.jpg";
import Communication from "../images/communication.jpg";

const Image = ({ image }) => {
  return <img src={image} alt="stuff" className={`info-image`} />;
};

export default function Home() {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const scrollCallback = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", scrollCallback);
  });

  return (
    <>
      <div className="page-header">
        <Nav transparent={scrollY <= 300} />
        <h1 className="page-heading">Berlin - the city in your dream.</h1>
      </div>

      <div id="home-page" className="page-content">
        <div className="content-wrapper">
          <div className="info-block">
            <h1 className="info-heading">Information und Fakten</h1>
            <div className="info-inner-container">
              <Image image={Berlin0} />
              <p className="info-paragraph">
                Berlin, die Hauptstadt Deutschlands, ist eine Stadt mit etwa
                <HighlightedNumber text="3,567,000" /> Einwohnern und einer
                Fläche von <HighlightedNumber text="891,8 km²" />. Berlin ist
                die Großte Stadt von Deutschland, während neunmal größer als
                Paris ist, obwohl es nur <HighlightedNumber text="1 / 5" /> von
                die population von paris hat. Es gibt viel Monumente im Berlin,
                es gibt Museen historische, auch es gibt ikonische Gebäude.
                &lt;It is further divided into <HighlightedNumber text="12" />{" "}
                Bezirke which includes, &gt; Mitte, Friedrichshain-Kreuzberg,
                Pankow, Charlottenburg-Wilmerdorf, Spandau, Steglitz-Zehlendorf,
                Tempelhof-Schöneberg, Neukölln, Treptow-Köpenick,
                Marzahn-Hellersdorf, Lichtenberg, und Reinickendorf.
              </p>
            </div>
          </div>
          <div className="info-block">
            <h1 className="info-heading">Die Geschichte Kurze</h1>
            <div className="info-inner-container-reversed">
              <Image image={Battle} />
              <p className="info-paragraph">
                Berlin, die heutige Hauptstadt Deutschlands, begann zunächst im
                13. Jahrhundert und wächst seitdem rasant und {"<unstoppably>"}.
                Nach 1900 wurde Berlin aufgrund seiner Überlegenheit in
                Wissenschaft, Bildung, Militär und Kultur zu einer der
                wichtigsten Städte der Welt.
              </p>
            </div>
          </div>
          <div className="info-block">
            <h1 className="info-heading">Dialekt von das Gebiet</h1>
            <div className="info-inner-container">
              <Image image={Communication} />
              <p className="info-paragraph">
                In Berlin es gibt einen speziellen Dialekt, bekannt als Berliner
                Dialekt (alias Berlinerisch). Es stammt ursprünglich aus ein
                Brandenburgisch Dialekt. Es hat etwa 5 Millionen Sprecher obwohl
                die Bildungsschicht bemühte sich stets distanzierend um
                einwandfreies Hochdeutsch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
