import React from "react";
import Nav from "../components/Nav";

export default function Credit() {
  let spacer = [];
  for (let i = 0; i < 10; i++) {
    spacer.push(<br />);
  }
  return (
    <>
      <Nav />
      <div className="page-content">
        <div className="policies-container">
          <h1 className="info-heading">Credit</h1>
          <h5 className="info-heading">
            Tim: Information collection and site construction
          </h5>
          <h6 className="info-heading">Cristina: Information collection</h6>
          {spacer}
        </div>
      </div>
    </>
  );
}
