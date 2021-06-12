import React from "react";
import { useHistory } from "react-router";
import Nav from "../components/Nav";
import Background from "../images/404.jpg";
import { ReactComponent as Earth } from "../images/earth.svg";

export default function NotFound() {
  const history = useHistory();

  return (
    <>
      <Nav />
      <div id="not-found-page" className="page-content">
        <div className="not-found-content">
          <h1>
            4<Earth />4
          </h1>
          <h3>The page you were looking for was not found.</h3>
          <button
            onClick={() => {
              history.goBack();
            }}
            className="animated-btn"
          >
            Go Back
          </button>
        </div>
        <img id="not-found-bg" alt="404bg" src={Background} />
      </div>
    </>
  );
}
