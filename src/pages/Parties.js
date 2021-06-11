import React from "react";
import Nav from "../components/Nav";

export default function Parties() {
  return (
    <>
      <div className="page-header" id="parties-page-header">
        <Nav transparent={false} />
        <h1 className="page-heading">Politische Parteien</h1>
      </div>
      <div id="sports-page" className="page-content">
        <div className="content-wrapper">
          <h1>Eine Einstufung</h1>
        </div>
      </div>
    </>
  );
}
