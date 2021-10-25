import React, { useState, useEffect } from "react";
import { Nav } from "../components/Nav";
import { ProgressBar } from "react-bootstrap";
import { GetStaticProps, NextPage } from "next";

const TOTAL = 1596283;
const PROGRESSBAR_VARIANT = "success";

const PARTY_DATA = [
  {
    name: "Sozialdemokratische Partei Deutschlands",
    votes: 352369,
  },
  {
    name: "Christlich Demokratische Union Deutschlands",
    votes: 288002,
  },
  {
    name: "Die Linke",
    votes: 255740,
  },
  {
    name: "Bündnis 90/Die Grünen",
    votes: 248243,
  },
  {
    name: "Alternative für Deutschland",
    votes: 231325,
  },
  {
    name: "Freie Demokratische Partei",
    votes: 109431,
  },
  {
    name: "Die Partei",
    votes: 31908,
  },
  {
    name: "Animal Protection Party",
    votes: 30565,
  },
  {
    name: "Pirate Party",
    votes: 30565,
  },
  {
    name: "Graue Panther",
    votes: 18135,
  },
];

const Parties: NextPage = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const callback = () => {
      setWindowWidth(window.innerWidth);
    };
    callback();
    window.addEventListener("resize", callback);

    return () => {
      window.removeEventListener("resize", callback);
    };
  });

  const isSmallScreen = () => {
    return windowWidth < 500;
  };

  return (
    <>
      <div className="page-header" id="parties-page-header">
        <Nav transparent={false} />
        <h1 className="page-heading">Politische Parteien</h1>
      </div>
      <div id="sports-page" className="page-content">
        <div className="content-wrapper">
          <h1>Eine Bestenliste von die politische Parteien</h1>
          <table className="political-leaderboard">
            <tbody>
              {PARTY_DATA.map((each) => {
                let now = Math.round((each.votes / TOTAL) * 10000) / 100;

                return (
                  <tr key={each.name}>
                    <td className="political-leaderboard-cell name-cell">
                      {each.name}
                    </td>
                    {!isSmallScreen() ? (
                      <>
                        <td className="political-leaderboard-cell progress-cell">
                          <ProgressBar
                            animated
                            variant={PROGRESSBAR_VARIANT}
                            className="political-progress-bar"
                            now={now * 4.1}
                          />
                        </td>
                        <td className="political-leaderboard-cell label-cell">
                          {now}%
                        </td>
                      </>
                    ) : (
                      <td>
                        <ProgressBar
                          animated
                          variant={PROGRESSBAR_VARIANT}
                          className="political-progress-bar"
                          now={now * 4.1}
                        />
                        <div style={{ textAlign: "right" }}>{now}%</div>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default Parties;
