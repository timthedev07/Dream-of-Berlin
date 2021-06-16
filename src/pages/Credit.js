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
          <h6 className="info-heading">
            Tim: Source code author & site construction, and information
            collection(tourism, sports, information and facts, brief history,
            dialects, restaurants, attractions, hotels, sporting events,
            olympians, and the translations of other information).
          </h6>
          <h6 className="info-heading">
            Cristina: Information collection(policital parties, traditional
            dishes, celebrities)
          </h6>
          <h6 className="info-heading">
            Selina: Information collection(traditional festivals)
          </h6>
          {spacer}
        </div>
      </div>
    </>
  );
}
