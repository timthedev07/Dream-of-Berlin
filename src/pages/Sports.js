import React from "react";
import Nav from "../components/Nav";

export default function Sports() {
  return (
    <>
      <div className="page-header" id="sports-page-header">
        <Nav transparent={false} />
        <h1 className="page-heading">Sports</h1>
      </div>
      <div id="sports-page" className="page-content">
        <div className="content-wrapper"></div>
      </div>
    </>
  );
}
